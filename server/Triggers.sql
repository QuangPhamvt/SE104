-- Trigger 
-- insert PHIEUGUITIEN
use CNPM;
DROP TRIGGER `CNPM`.`before_PHIEUGUITIEN_insert`;	
DELIMITER $$
CREATE TRIGGER before_PHIEUGUITIEN_insert
BEFORE INSERT ON `CNPM`.`PHIEUGUITIEN`
FOR EACH ROW
BEGIN
	DECLARE KyHan int DEFAULT (SELECT `KyHan` FROM `LOAITIETKIEM` WHERE `id` = new.`LTK`);
	SET new.`NgayDaoHan` = date((SELECT DATE_ADD(new.`NgayMoSo`, INTERVAL KyHan DAY)));
    SET new.`TienDu` = new.`TienGoc`;
    IF (
			SELECT timestampdiff(day, new.`NgayMoSo`, `NgayApDung`) 
			FROM `LOAITIETKIEM`
			WHERE `id` = new.`LTK` 
		) > 0 then
		SET new.`LaiSuat` = (SELECT `LaiSuatCu` FROM `LOAITIETKIEM` WHERE `id` = new.`LTK`);
	ELSE
		SET new.`LaiSuat` = (SELECT `LaiSuat` FROM `LOAITIETKIEM` WHERE `id` = new.`LTK`);
	END IF;

    -- cập nhập lại danh sách báo cáo khi thêm
    IF NOT EXISTS (SELECT * FROM `BAOCAODOANHSO` WHERE `NgayBaoCao` = DATE(new.`NgayMoSo`) AND `LTK` = new.`LTK`) then
		INSERT INTO `BAOCAODOANHSO`(LTK, NGAYBAOCAO, TongThu, TongChi, ChenhLech) VALUES (new.`LTK`, DATE(new.`NgayMoSo`), new.`TienGoc`, 0, new.`TienGoc`);
	ELSE
		UPDATE `BAOCAODOANHSO` 
        SET `TongThu` = `TongThu` + new.`TienGoc`
        WHERE `NgayBaoCao` = DATE(new.`NgayMoSo`) AND `LTK` = new.`LTK`;
	END IF;
END $$
DELIMITER ;


-- update khi đến ngày tính lãi 
DROP trigger before_PHIEUGUITIEN_update;
DELIMITER $$
CREATE TRIGGER before_PHIEUGUITIEN_update
BEFORE UPDATE ON `CNPM`.`PHIEUGUITIEN` 
FOR EACH ROW
BEGIN
    DECLARE NgayApDung DATETIME default (SELECT `NgayApDung` from `LOAITIETKIEM` WHERE `LOAITIETKIEM`.`id` = new.`LTK`);
	DECLARE KyHan int DEFAULT (SELECT `KyHan` FROM `LOAITIETKIEM` WHERE `LOAITIETKIEM`.`id` = new.`LTK`);
    
		DECLARE times int;
		SET times = ceil( timestampdiff(DAY, old.`NgayDaoHan`, new.`NgayDaoHan`) / KyHan );
		SET new.`NgayDaoHan` = DATE_ADD(old.`NgayDaoHan`,INTERVAL times*KyHan DAY);
	
    
		IF (DATE(new.`NgayDaoHan`) < DATE(NgayApDung)) or (timestampdiff(DAY, NgayApDung, old.`NgayDaoHan`) >= KyHan) or (timestampdiff(DAY, NgayApDung, new.`NgayDaoHan`) > KyHan)  then
			SET new.`TienDu` = new.`TienDu` * (1 + new.`LaiSuat`*times*KyHan/360);
		ELSE
			BEGIN            
				DECLARE TEST int default (floor( timestampdiff(DAY, NgayApDung, new.`NgayDaoHan`) / KyHan ) - 1);
				SET new.`TienDu` = new.`TienDu` * (1 + new.`LaiSuat`*(times - TEST)*KyHan/360 );
				SET new.`LaiSuat` = (SELECT `LaiSuat` from `LOAITIETKIEM` where `id` = new.`LTK`);			
				SET new.`TienDu` = new.`TienDu` * (1 + new.`LaiSuat`*TEST*KyHan/360);
			END;
		END IF;
-- cẬP NHẬP BÁO CÁO SỐ DOANH SỐ KHI ĐÓNG SỔ
    IF new.`TienDu`= 0.0 and NOT EXISTS
    (
		SELECT * FROM `BAOCAODOANHSO` WHERE `NgayBaoCao` = DATE(new.`NgayDongSo`) AND `LTK` = new.`LTK` 
	) then
		BEGIN
        DECLARE money decimal(60,5);
        SET money = 1 + (SELECT `LaiSuat` from `LOAITIETKIEM` where `id` = 1)*( KyHan - timestampdiff(DAY, new.`NgayDongSo`, new.`NgayDaoHan`));
		INSERT INTO `BAOCAODOANHSO`(LTK, NGAYBAOCAO, TongThu, TongChi, ChenhLech) 
        VALUES (new.`LTK`, DATE(new.`NgayDongSo`), 0, old.`TienDu`, -1*old.`TienDu`*money);
        END;
	ELSEIF new.`TienDu` = 0.0 then
		BEGIN
		DECLARE money decimal(60,5);
        SET money = 1 + (SELECT `LaiSuat` from `LOAITIETKIEM` where `id` = 1)*( KyHan - timestampdiff(DAY, new.`NgayDongSo`, new.`NgayDaoHan`));
		UPDATE `BAOCAODOANHSO` 
        SET `TongChi` = `TongChi` + old.`TienDu`, `ChenhLech` = `ChenhLech` - old.`TienDu`*money
        WHERE `NgayBaoCao` = DATE(new.`NgayDongSo`) AND `LTK` = new.`LTK`;
        END;
    END IF;
END $$
DELIMITER ;
SELECT DATE_ADD("2020-10-21", INTERVAL 15 DAY);
select floor(timestampdiff(DAY, "2023-04-01", "2023-02-02") / 5);
