import { mysql } from "./index.js";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdef", 15)

export async function findCustomer(){
    return mysql.query(`select * from KHACHHANG`)
}
export function createCustomer({HoTenKhachHang, CMND, DiaChi}){
    return mysql.query(
        `insert into KHACHHANG values(?, ?, ?, ?)`
    , [nanoid(), HoTenKhachHang, CMND, DiaChi])
}

//tìm khách hàng
export async function findOneCustomer(CMND){
    return mysql.query(
        `select * from KHACHHANG KH where KH.CMND = ?`
    , [CMND])
}