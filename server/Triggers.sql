-- Trigger 
-- update khi đến ngày tính lãi 
DELIMITER $$
CREATE TRIGGER before_upd_PHIEUGUITIEN
BEFORE UPDATE ON CNPM.PHIEUGUITIEN 
FOR EACH ROW
BEGIN
    DECLARE days int default (select timestampdiff(day, old.NgayCapNhap, current_timestamp));
    DECLARE kyhan int default (select KyHan from LOAITIETKIEM where LOAITIETKIEM.id = new.LTK);
    DECLARE tien int default old.Tien;
    if days >= kyhan then
		SET new.Tien = tien*(1 + (select LaiSuat from LOAITIETKIEM where LOAITIETKIEM.id = old.LTK));
	else 
		SET new.NgayCapNhap = old.NgayCapNhap;
	end if;
END $$
DELIMITER ;
DROP trigger before_upd_PHIEUGUITIEN