import { mysql } from "./index.js";
import { findOneCustomer } from "./khachhang.model.js";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet('123456789abcdef', 15)

export async function createDeposit(body){
    const {
        CMND,
        TienGoc,
        LTK,
    } = body 
    const [KH] = await findOneCustomer(CMND)
    console.log(KH);
    const [[ltkId]]= await mysql.query(
        `select * from LOAITIETKIEM where TenLoaiTietKiem = ?`
    , [LTK])
    if (!KH || !ltkId) return []
    return await mysql.query(
        `insert into PHIEUGUITIEN(
            id, Tien, TienGoc, LTK, MaKhachHang
        ) values (?, ?, ?, ?, ?)`
    , [nanoid(), TienGoc, TienGoc, ltkId.id, KH.id])
    
}

export async function updateDrawOut(data){
    await mysql.query(
        `update PHIEUGUITIEN
        set Tien = 0 ,NgayDongSo = current_timestamp() 
        where id = ?`
    , [data])
}