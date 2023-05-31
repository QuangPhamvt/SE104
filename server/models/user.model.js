import { mysql } from "./index.js"

export async function findUserModel(username) {
	return await mysql.query(
		`select *
        from NGUOIDUNG 
        where username = ?`,
		[username]
	)
}

export async function createUserModel(data) {
	const { username, TenNhom, password } = data
	return await mysql.query(
		`insert into NGUOIDUNG(username, MaNhom, password)
        values(?, (select id from NHOMNGUOIDUNG where TenNhom = ?), ?)`,
		[username, TenNhom, password]
	)
}
