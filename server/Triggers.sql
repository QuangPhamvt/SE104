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
		INSERT INTO `BAOCAODOANHSO`(LTK, NGAYBAOCAO, TongThu, TongChi, ChenhLech) VALUES (new.`LTK`, new.`NgayMoSo`, new.`TienGoc`, 0, new.`TienGoc`);
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
    DECLARE NAP DATETIME default (SELECT `NgayApDung` from `LOAITIETKIEM` WHERE `LOAITIETKIEM`.`id` = new.`LTK`);
	DECLARE KH int DEFAULT (SELECT `KyHan` FROM `LOAITIETKIEM` WHERE `LOAITIETKIEM`.`id` = new.`LTK`);
    set new.`NgayDaoHan` = old.`NgayDaoHan`;    
    
	WHILE (SELECT TIMESTAMPDIFF(DAY, new.`NgayDaoHan`, current_timestamp )) >= 0 DO
		IF ((SELECT timestampdiff(DAY, new.`NgayDaoHan`, NAP)) >= KH) then
        BEGIN
			SET new.`LaiSuat` = (SELECT `LaiSuat` FROM `LOAITIETKIEM` WHERE `LOAITIETKIEM`.`id`= old.`LTK`);
            SET new.`TienDu` = new.`TienDu` * 1.05;
			SET new.`NgayDaoHan` = (SELECT DATE_ADD(new.`NgayDaoHan`, INTERVAL KH DAY));
		END;
		ELSE
		BEGIN
            SET new.`TienDu` = new.`TienDu` * 1.05;
			SET new.`NgayDaoHan` = (SELECT DATE_ADD(new.`NgayDaoHan`, INTERVAL KH DAY));
		END;
		END IF;
	END WHILE;
-- cẬP NHẬP BÁO CÁO SỐ DOANH SỐ KHI ĐÓNG SỔ
    IF new.`TienDu`= 0.0 and NOT EXISTS
    (
		SELECT * FROM `BAOCAODOANHSO` WHERE `NgayBaoCao` = DATE(new.`NgayMoSo`) AND `LTK` = new.`LTK` 
	) then
		INSERT INTO `BAOCAODOANHSO`(LTK, NGAYBAOCAO, TongThu, TongChi, ChenhLech) VALUES (new.`LTK`, new.`NgayDongSo`, 0, old.`TienDu`, -1*old.`TienDu`);
	ELSEIF new.`TienDu` = 0.0 then
		UPDATE `BAOCAODOANHSO` 
        SET `TongChi` = `TongChi` + new.`TienDu`
        WHERE `NgayBaoCao` = DATE(new.`NgayMoSo`) AND `LTK` = new.`LTK`;
    END IF;
END $$
DELIMITER ;
SELECT DATE_ADD("2020-10-21", INTERVAL 15 DAY);
select 5*(1+0.00008);
