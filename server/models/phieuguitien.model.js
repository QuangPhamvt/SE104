import { mysql } from "./index.js"
import { findOneCustomer } from "./khachhang.model.js"
import { customAlphabet } from "nanoid"
const nanoid = customAlphabet("123456789abcdef", 15)

export async function createDeposit({ CMND, TienGoc, LTK }) {
	const [[KH]] = await findOneCustomer(CMND)
	const [[ltkId]] = await mysql.query(
		`select id 
        from LOAITIETKIEM 
        where TenLoaiTietKiem = ?`,
		[LTK]
	)
	if (!KH || !ltkId) return []
	return mysql.query(
		`insert into PHIEUGUITIEN(LTK, MaKhachHang, TienGoc, TienDu, NgayMoSo ) values (?, ?, ?, ?, ? )`,
		[ltkId.id, KH.id, TienGoc, TienGoc, new Date()]
	)
}

export async function updateDrawOut(data) {
	return mysql.query(
		`update PHIEUGUITIEN
        set Tien = 0, NgayDongSo = current_timestamp() 
        where id = ?`,
		[data]
	)
}

export async function findDepositCustomerModel(CMND) {
	return mysql.query(
		`select * from KHACHHANG KH
        inner join PHIEUGUITIEN PGT
        on KH.id = PGT.MaKhachHang
        where KH.CMND = ?`,
		[CMND]
	)
}
