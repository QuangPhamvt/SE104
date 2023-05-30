import { mysql } from "../models/index.js"
import jwt from "jsonwebtoken"

export async function createUser(req, res) {
	const { username, password, TenNhom } = req.body
	try {
		const isExists = await mysql.query(
			`select username from NGUOIDUNG where username = ?`,
			[username]
		)
		if (!isExists || !password)
			return res.status(400).json({
				success: false,
				message: "Đã tồn tại nhân vật này",
			})

		await mysql.query(
			`
            insert into NGUOIDUNG(username, MaNhom, password) values( ?, 
                (
                    select id from NHOMNGUOIDUNG where TenNhom = ?
                ), ?)
            `,
			[username, TenNhom, password]
		)
		return res.status(200).json({
			success: true,
			message: "Tao thanh cong",
		})
	} catch (error) {
		console.log(error.message)
		return res.status(500).json({
			success: false,
			message: error.message,
		})
	}
}

export async function loginUser(req, res) {
	const { username, password } = req.body
	try {
		const [[data]] = await mysql.query(
			`select * from NGUOIDUNG where username = ?`,
			[username]
		)
		console.log(data)
		if (!data)
			return res.status(401).json({
				success: false,
				message: "ĐĂng nhập sai thông tin",
			})
		const token = jwt.sign(data.id, "CNPM")
		res.cookie("authToken", token, {
			maxAge: 360 * 24 * 60 * 60 * 100,
			httpOnly: true,
		})
		return res.status(200).json({
			success: true,
			message: "Đăng nhập thành công ",
		})
	} catch (error) {
		console.log(error.message)
		return res.status(500).json({
			success: false,
			message: error.message,
		})
	}
}
