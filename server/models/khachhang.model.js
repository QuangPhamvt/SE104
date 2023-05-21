import { mysql } from "./index.js";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdef", 15)

export async function findCustomer(){
    const [data] = await mysql.query(
        `select * from KHACHHANG`
    )
    return data
}
export function createCustomer(data){
    const {
        HoTenKhachHang,
        CMND,
        DiaChi,
    } = data
    const id = nanoid()
    return mysql.query(
        `insert into KHACHHANG values(?, ?, ?, ?)`
    , [id, HoTenKhachHang, CMND, DiaChi])
}

export async function findOneCustomer(CMND){
    const [data]= await mysql.query(
        `select * from KHACHHANG KH where KH.CMND = ?`
    , [CMND])
    return data
}