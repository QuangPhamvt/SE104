CREATE DATABASE IF NOT EXISTS CNPM;
use CNPM;
-- Tạo bảng Khách hàng
create table IF NOT EXISTS KHACHHANG(
	id varchar(15) primary key,
    HoTenKhachHang varchar(30) not null,
    CMND varchar(30) unique,
    DiaChi varchar(30) not null
);
-- Tạo bảng loại tiết kiệm
create table IF NOT EXISTS LOAITIETKIEM(
	id varchar(15) primary key,
    TenLoaiTietKiem varchar(30) not null,
	KyHan int not null,
    LaiSuat double not null 
);

-- Tạo bảng phiếu gửi tiền
create table IF NOT EXISTS PHIEUGUITIEN(
	id varchar(15) primary key,
    LTK varchar(15),
    MaKhachHang varchar(15),
    Tien bigint,
    TienGoc bigint,
    NgayMoSo datetime default current_timestamp,
    NgayDongSo datetime,
    NgayCapNhap datetime default current_timestamp
);
-- Tạo bảng báo cáo doanh số 
create table IF NOT EXISTS BAOCAODOANHSO(
	id varchar(15) primary key,
    LTK varchar(15),
    NgayBaoCao datetime default current_timestamp,
    TongThu double,
    TongChi double,
    ChenhLech double
);
-- Tạo bảng Tham số 
create table IF NOT EXISTS THAMSO(
	SoTienGuiBanDauToiThieu float,
    CachTinhTienLai float
);
-- Tạo bảng Chức năng
create table IF NOT EXISTS CHUCNANG(
	id varchar(15) primary key,
    MaNhom varchar(15),
    MaChucNang varchar(15),
    TenChucNang varchar(30) not null,
    TenManHinhDuocLoad varchar(30) not null
);
-- TẠo bảng NHÓM NGƯỜI DUNG
create table IF NOT EXISTS NHOMNGUOIDUNG(
	id varchar(15) primary key,
    TenNhom varchar(30) not null
);
-- TẠo bảng người dùng
create table if not exists NGUOIDUNG(
	username varchar(15) primary key,
    MaNhom varchar(15) not null,
    password varchar(255) not null
    
);
-- CONSTAINT
alter table PHIEUGUITIEN
add foreign key (MaKhachHang) references KHACHHANG(id),
add foreign key (LTK) references LOAITIETKIEM(id);

alter table BAOCAODOANHSO
add foreign key (LTK) references LOAITIETKIEM(id);
-- LOAITIETKIEM
insert into LOAITIETKIEM values("b59bb3566a39833", "Không Kỳ Hạn", 15, 0.005);
insert into LOAITIETKIEM values("c8b3d0f311ebbb4", "3 Tháng", 90, 0.05);
insert into LOAITIETKIEM values("dc3f9c2613c58af", "6 Tháng", 180, 0.055);

-- KHACHHANG
insert into KHACHHANG values("d4eaa5a86243f2a", "Phạm Minh Quang", "077203006528", "Hồ Chí Minh");
insert into KHACHHANG values("49c4acd3ad1e86e", "Phạm Đoàn Minh Thư", "077203002309", "Hồ Chí Minh");
insert into KHACHHANG values("34e69157caa88e9", "Nguyễn Văn A", "077203006525", "Hồ Chí Minh");

-- PHIEUGUITIEN
insert into PHIEUGUITIEN values("887f9a6f87f2d7a", "b59bb3566a39833","34e69157caa88e9", 1000000, 1000000, "2023-05-24 21:25:25", null, "2023-05-24 21:25:25");
select * from LOAITIETKIEM;
select * from KHACHHANG;
select * from PHIEUGUITIEN;







