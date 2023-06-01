import { mysql } from "./index.js"
import { findOneCustomer } from "./khachhang.model.js"
import { customAlphabet } from "nanoid"
const nanoid = customAlphabet("123456789abcdef", 10)

export async function createDeposit({ CMND, TienGoc, LTK }) {
	const [[KH]] = await findOneCustomer(CMND)
	console.log(KH.id)
	const [[ltkId]] = await mysql.query(
		`select id 
        from LOAITIETKIEM 
        where TenLoaiTietKiem = ?`,
		[LTK]
	)
	console.log(ltkId.id)
	if (!KH || !ltkId) return []
	return mysql.query(
		`insert into PHIEUGUITIEN(id, LTK, MaKhachHang, TienGoc, TienDu, NgayMoSo ) 
		values (?, ?, ?, ?, ?, ? )`,
		[nanoid(), ltkId.id, KH.id, TienGoc, TienGoc, new Date()]
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
export async function updateDrawOut(data) {
	console.log(data)
	return mysql.query(
		`update PHIEUGUITIEN
        set TienDu = 0, NgayDongSo = current_date() 
        where id = ?`,
		[data]
	)
}

//Tìm kiếm 1 trang phiếu
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
