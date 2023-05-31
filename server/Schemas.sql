DROP DATABASE IF EXISTS CNPM;
CREATE DATABASE IF NOT EXISTS CNPM;
USE CNPM;

DROP TABLE IF EXISTS    `PHIEUGUITIEN`,
                        `BAOCAODOANHSO`,
                        `LOAITIETKIEM`,
                        `KHACHHANG`,
                        `THAMSO`,
                        `NGUOIDUNG`,
                        `CHUCNANG`,
                        `NHOMNGUOIDUNG`;


-- Tạo bảng Khách hàng
CREATE TABLE `KHACHHANG`(
	`id`                VARCHAR(10)                 NOT NULL,
    `HoTenKhachHang`    VARCHAR(30)                 NOT NULL,
    `CMND`              VARCHAR(30)                 UNIQUE,
    `DiaChi`            VARCHAR(30)                 NOT NULL,
    `Tuoi`              INT                         NOT NULL,
	`NgaySinh`          DATE                        NOT NULL,
	`SDT`               VARCHAR(30)                 UNIQUE,
	`GioiTinh`          ENUM('male', 'female')      NOT NULL,
    PRIMARY KEY (`id`)
);


-- Tạo bảng loại tiết kiệm
CREATE TABLE `LOAITIETKIEM`(
	`id`                VARCHAR(10)     NOT NULL,
    `TenLoaiTietKiem`   VARCHAR(30)     NOT NULL,
	`KyHan`             INT             NOT NULL,
    `NgayApDung`        DATE            NOT NULL,
    `LaiSuat`           DECIMAL(60,5)   NOT NULL,
    `LaiSuatCu`         DECIMAL(60,5)   NOT NULL,
    PRIMARY KEY (`id`)
);


-- Tạo bảng phiếu gửi tiền
CREATE TABLE `PHIEUGUITIEN`(
	`id`                VARCHAR(10)     NOT NULL,
    `LTK`               VARCHAR(10)     NOT NULL,
    `LaiSuat`           DECIMAL(60,5)   NOT NULL,
    `MaKhachHang`       VARCHAR(10)     NOT NULL,
    `TienGoc`           DECIMAL(60,5)   NOT NULL,
    `TienDu`            DECIMAL(60,5)   NOT NULL,
    `NgayMoSo`          DATE            DEFAULT (CURRENT_DATE),
    `NgayDongSo`        DATE,
    `NgayDaoHan`        DATE            NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`LTK`)         REFERENCES  `LOAITIETKIEM`(`id`),
    FOREIGN KEY (`MaKhachHang`) REFERENCES `KHACHHANG`(`id`)
);
-- Tạo bảng báo cáo doanh số 
CREATE TABLE `BAOCAODOANHSO`(
	`id`            VARCHAR(10)         NOT NULL,
    `LTK`           VARCHAR(10)         NOT NULL,
    `NgayBaoCao`    DATE                DEFAULT (CURRENT_DATE),
    `TongThu`       DECIMAL(60,5)       DEFAULT 0,
    `TongChi`       DECIMAL(60,5)       DEFAULT 0,
    `ChenhLech`     DECIMAL(60,5)       DEFAULT 0,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`LTK`) REFERENCES `LOAITIETKIEM`(`id`)
);
-- Tạo bảng Tham số 
CREATE TABLE `THAMSO`(
	`SoTienGuiBanDauToiThieu`   float,
    `CachTinhTienLai`           float
);
-- Tạo bảng Chức năng
CREATE TABLE `CHUCNANG`(
	`id` int primary key auto_increment,
    `MaNhom` int,
    `MaChucNang` int,
    `TenChucNang` varchar(30) not null,
    `TenManHinhDuocLoad` varchar(30) not null
);
-- TẠo bảng NHÓM NGƯỜI DUNG
CREATE TABLE `NHOMNGUOIDUNG`(
	`id` int primary key auto_increment,
    `TenNhom` varchar(30) not null
);
-- TẠo bảng người dùng
CREATE TABLE`NGUOIDUNG`(
	`id` int primary key auto_increment,
	`username` varchar(15) unique,
    `MaNhom` int not null,
    `password` varchar(255) not null
);


















