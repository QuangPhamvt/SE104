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
export async function updateDepositCustomerModel(data) {
	return mysql.query(
		`update PHIEUGUITIEN
		SET NgayDaoHan = current_timestamp()
		WHERE MaKhachHang = ?`,
		[data.id]
	)
}
// update xoa phieu cua nguoi dung
export async function updateDrawOut() {
	return mysql.query(
		`update PHIEUGUITIEN
        set Tien = 0, NgayDongSo = current_timestamp() 
        where id = ?`,
		[data]
	)
}

export async function findDepositModel(data) {
	const { page, limit } = data
	return mysql.query(
		`select 
			PGT.id, 
			LTK.TenLoaiTietKiem, LTK.LaiSuat,
			KH.HoTenKhachHang, KH.CMND, KH.DiaChi, 
			PGT.NgayMoSo, PGT.NgayDongSo, PGT.NgayDaoHan, 
			PGT.TienDu, PGT.TienGoc 
		from PHIEUGUITIEN PGT
		inner join KHACHHANG KH on PGT.MaKhachHang = KH.id
		inner join LOAITIETKIEM LTK on LTK.id = PGT.LTK
		order by NgayMoSo DESC
		limit ?, ?`,
		[(page - 1) * limit, parseInt(limit)]
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
