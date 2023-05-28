CREATE DATABASE IF NOT EXISTS CNPM;
use CNPM;
-- Tạo bảng Khách hàng
create table IF NOT EXISTS `KHACHHANG`(
	`id` int primary key auto_increment,
    `HoTenKhachHang` varchar(30) not null,
    `CMND` varchar(30) unique,
    `DiaChi` varchar(30) not null
);
-- Tạo bảng loại tiết kiệm
create table IF NOT EXISTS `LOAITIETKIEM`(
	`id` int primary key auto_increment,
    `TenLoaiTietKiem` varchar(30) not null,
	`KyHan` int not null,
    `NgayApDung` datetime,
    `LaiSuat` decimal(60,30) not null,
    `LaiSuatCu` decimal(60,30)
);
alter table `LOAITIETKIEM`
modify column `LaiSuat` decimal(60,30),
modify column `LaiSuatCu` decimal(60,30),
modify column `NgayApDung` datetime;

-- Tạo bảng phiếu gửi tiền
create table IF NOT EXISTS `PHIEUGUITIEN`(
	`id` int primary key auto_increment,
    `LTK` int,
    `LaiSuat` decimal(60,30),
    `MaKhachHang` int,
    `TienGoc` decimal(60,30),
    `TienDu` decimal(60,30),
    `NgayMoSo` datetime default current_timestamp,
    `NgayDongSo` datetime,
    `NgayDaoHan` datetime
);
-- Tạo bảng báo cáo doanh số 
create table IF NOT EXISTS `BAOCAODOANHSO`(
	`id` int primary key auto_increment,
    `LTK` int,
    `NgayBaoCao` datetime default current_timestamp,
    `TongThu` decimal(60,30),
    `TongChi` decimal(60,30),
    `ChenhLech`decimal(60,30)
);
-- Tạo bảng Tham số 
create table IF NOT EXISTS `THAMSO`(
	`SoTienGuiBanDauToiThieu` float,
    `CachTinhTienLai` float
);
-- Tạo bảng Chức năng
create table IF NOT EXISTS `CHUCNANG`(
	`id` int primary key auto_increment,
    `MaNhom` int,
    `MaChucNang` int,
    `TenChucNang` varchar(30) not null,
    `TenManHinhDuocLoad` varchar(30) not null
);
-- TẠo bảng NHÓM NGƯỜI DUNG
create table IF NOT EXISTS `NHOMNGUOIDUNG`(
	`id` int primary key auto_increment,
    `TenNhom` varchar(30) not null
);
-- TẠo bảng người dùng
create table if not exists `NGUOIDUNG`(
	`id` int primary key auto_increment,
	`username` varchar(15) unique,
    `MaNhom` int not null,
    `password` varchar(255) not null
    
);
-- CONSTAINT
alter table `PHIEUGUITIEN`
add foreign key (`MaKhachHang`) references KHACHHANG(id),
add foreign key (`LTK`) references LOAITIETKIEM(id),
modify column `TienDu` decimal(60,30),
modify column `TienGoc` decimal(60,30),
modify column `LaiSuat` decimal(60,30);

alter table `BAOCAODOANHSO`
add foreign key (`LTK`) references LOAITIETKIEM(id),
modify column `TongChi` decimal(60,30),
modify column `TongThu` decimal(60,30),
modify column `ChenhLech` decimal(60,30);


INSERT INTO `PHIEUGUITIEN`(`LTK`, `MaKhachHang`, `TienGoc`, `NgayMoSo` ) VALUE(1, 2, 100000, "2023-04-25");
UPDATE `CNPM`.`PHIEUGUITIEN` SET `NgayDaoHan` =  current_timestamp;



DELETE FROM `CNPM`.`KHACHHANG`;
DELETE FROM `CNPM`.`PHIEUGUITIEN`;
select * from `LOAITIETKIEM`;
select * from `KHACHHANG`;
select * from `PHIEUGUITIEN`;
select * from `BAOCAODOANHSO`;
select * from `NHOMNGUOIDUNG`;
select * from `NGUOIDUNG`;








