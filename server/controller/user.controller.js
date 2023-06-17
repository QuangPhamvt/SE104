import { mysql } from "../models/index.js"
import jwt from "jsonwebtoken"
import { createUserModel, findUserModel } from "../models/user.model.js"

//get token
export async function getToken(req, res, next) {
	try {
		return res.status(200).json({
			success: true,
			message: "nice!",
		})
	} catch (error) {
		console.log(error.message)
	}
}

//TẠO NGƯỜI SỬ DỤNG
export async function createUser(req, res, next) {
	const { username, password, TenNhom } = req.body
	try {
		const [isExists] = await findUserModel(username)
		console.log(isExists)
		if (isExists === [] || !password)
			return res.status(400).json({
				success: false,
				message: "Đã tồn tại nhân vật này",
			})
		await createUserModel({ username, password, TenNhom })
		return res.status(200).json({
			success: true,
			message: "Tao thanh cong",
		})
	} catch (error) {
		next(error)
	}
}

//Đăng nhập vào hệ thống
export async function loginUser(req, res, next) {
	const { username, password } = req.body
	try {
		const [[data]] = await findUserModel(username)
		console.log(data.id)
		if (!data || password != data.password)
			return res.status(401).json({
				success: false,
				message: "ĐĂng nhập sai thông tin",
			})
		const token = jwt.sign({ username, password }, "CNPM")
		res.cookie("authToken", token, {
			maxAge: 360 * 24 * 60 * 60 * 100,
			httpOnly: true,
		})
		return res.status(200).json({
			success: true,
			message: "Đăng nhập thành công ",
		})
	} catch (error) {
		next(error)
	}
}

export async function logoutUser(req, res, next) {
	res.clearCookie("authToken").status(200).json({
		success: false,
		message: "not having token",
	})
}
