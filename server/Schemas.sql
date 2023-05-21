use CNPM;
create table KHACHHANG(
	id varchar(30) primary key,
    HoTenKhachHang varchar(30) not null,
    CMND varchar(15) unique,
    DiaChi varchar(30)
);

create table LOAITIETKIEM(
	id varchar(30) primary key,
    TenLoaiTietKiem varchar(15) not null,
	KyHan int,
    LaiSuat double
);

create table PHIEUGUITIEN(
	id varchar(30) primary key,
    Tien bigint,
    TienGoc bigint,
    LTK varchar(30),
    MaKhachHang varchar(30),
    NgayMoSo datetime default current_timestamp,
    NgayDongSo date,
    NgayCapNhap datetime default current_timestamp,
    constraint 
			foreign key (LTK) references LOAITIETKIEM(id),
			foreign key (MaKhachHang) references KHACHHANG(id)
);

-- LOAITIETKIEM
insert into LOAITIETKIEM values("b59bb3566a39833", "Không Kỳ Hạn", 15, 0.005);
insert into LOAITIETKIEM values("c8b3d0f311ebbb4", "3 Tháng", 90, 0.05);
insert into LOAITIETKIEM values("dc3f9c2613c58af", "6 Tháng", 180, 0.055);

-- KHACHHANG
insert into KHACHHANG values("d4eaa5a86243f2a", "Phạm Minh Quang", "077203006528", "Hồ Chí Minh");
insert into KHACHHANG values("49c4acd3ad1e86e", "Phạm Đoàn Minh Thư", "077203002309", "Hồ Chí Minh");
select * from LOAITIETKIEM;
select * from KHACHHANG;
select * from PHIEUGUITIEN;

-- Trigger 
-- update khi đến ngày tính lãi 
DELIMITER $$
CREATE TRIGGER before_upd_PHIEUGUITIEN
BEFORE UPDATE ON CNPM.PHIEUGUITIEN 
FOR EACH ROW
BEGIN
    DECLARE days int default (select timestampdiff(day, old.NgayCapNhap, current_timestamp));
    DECLARE kyhan int default (select KyHan from LOAITIETKIEM where LOAITIETKIEM.id = new.LTK);
    DECLARE data int default old.Tien;
    if days >= 5 then
		SET new.Tien = data*(1 + (select LaiSuat from LOAITIETKIEM where LOAITIETKIEM.id = old.LTK));
	else 
		SET new.NgayCapNhap = old.NgayCapNhap;
	end if;
END $$
DELIMITER ;
DROP trigger before_upd_PHIEUGUITIEN




