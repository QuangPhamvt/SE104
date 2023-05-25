-- Trigger 
-- bảng phiếu gửi tiền
CREATE TRIGGER before_PHIEUGUITIEN_update
BEFORE UPDATE ON CNPM.PHIEUGUITIEN 
FOR EACH ROW
BEGIN
-- Update khi đến ngày tính lãi
    DECLARE days int default (select timestampdiff(day, old.NgayCapNhap, current_timestamp));
    DECLARE kyhan int default (select KyHan from LOAITIETKIEM where LOAITIETKIEM.id = new.LTK);
    if days >= kyhan then
		SET new.Tien = old.Tien*(1 + (select LaiSuat from LOAITIETKIEM where LOAITIETKIEM.id = new.LTK));
	else 
		SET new.NgayCapNhap = old.NgayCapNhap;
	end if;
-- Update bản báo cáo doanh số khi đến ngày
	if new.Tien = 0 then 
		begin
			IF NOT EXISTS(
				SELECT * 
				FROM BAOCAODOANHSO BCDS 
				where 
					DATE(BCDS.NgayBaoCao) = DATE(new.NgayDongSo) and
					new.LTK = BCDS.LTK 
			) then 
			BEGIN
				DECLARE id varchar(15) DEFAULT (SELECT SUBSTR(MD5(RAND()), 1, 15));
				INSERT INTO `BAOCAODOANHSO`(id, LTK, TongThu, TongChi, ChenhLech) 
					VALUES (id, new.LTK, 0, old.Tien, -1*(old.Tien));
			END;
			ELSE 
				UPDATE BAOCAODOANHSO 
				SET 
					TongChi  = TongChi  + old.Tien,
					ChenhLech = ChenhLech - old.Tien
				WHERE DATE(BAOCAODOANHSO.NgayBaoCao) = DATE(new.NgayDongSo);
			END IF;
		end;
	end if;
END
DROP trigger before_PHIEUGUITIEN_update;

-- update BAOCAODOANHSO nếu thêm một phieuguitien
CREATE TRIGGER before_PHIEUGUITIEN_insert
BEFORE INSERT ON `CNPM`.`PHIEUGUITIEN`
FOR EACH ROW 
BEGIN 
	IF NOT EXISTS (
		SELECT * 
		FROM BAOCAODOANHSO BCDS 
		where 
			DATE(BCDS.NgayBaoCao) = DATE(new.NgayMoSo) and
			new.LTK = BCDS.LTK 
		) THEN 
		BEGIN 
			DECLARE id varchar(15) DEFAULT (SELECT SUBSTR(MD5(RAND()), 1, 15));
			INSERT INTO `BAOCAODOANHSO`(id, LTK, NgayBaoCao, TongThu, TongChi, ChenhLech) 
				VALUES (id, new.LTK, new.NgayMoSo, new.TienGoc, 0, new.TienGoc);
		END;
	ELSE
		BEGIN
			UPDATE BAOCAODOANHSO
			SET 
				TongThu  = TongThu + new.TienGoc,
				ChenhLech = ChenhLech + new.TienGoc
			WHERE 
				DATE(BAOCAODOANHSO.NgayBaoCao) = DATE(new.NgayMoSo) AND 
				new.LTK = BAOCAODOANHSO.LTK;
		END;
	END IF;
END;
DROP TRIGGER before_PHIEUGUITIEN_insert;

select timestampdiff(day, (select NgayCapNhap from PHIEUGUITIEN order by NgayCapNhap limit 1), current_timestamp);

















