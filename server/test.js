import { Router } from "express"
import { fakerVI } from "@faker-js/faker"
import { createCustomer, findCustomer } from "./models/khachhang.model.js"
import { mysql } from "./models/index.js"
import { createCustomerController } from "./controller/khachhang.controller.js"
import { customAlphabet } from "nanoid"
import { createDeposit } from "./models/phieuguitien.model.js"
const testRouter = Router()
const nanoid = customAlphabet("0123456789abcdef", 10)

function dataCustomer(index = 10) {
	let data = []
	for (let i = 0; i < index; i++) {
		data.push({
			HoTenKhachHang: fakerVI.person.fullName(),
			CMND: fakerVI.string.numeric(12),
			DiaChi: `${fakerVI.location.street()}, ${fakerVI.location.city()}`,
			Tuoi: `${fakerVI.number.int({ min: 18, max: 60 })}`,
			NgaySinh: fakerVI.date.birthdate(),
			SDT: fakerVI.phone.number(),
			GioiTinh: fakerVI.person.sex(),
		})
	}
	return data
}
async function dataDeposit(index) {
	let data = []
	const [customers] = await mysql.query(`select CMND from KHACHHANG`)
	const [LTK] = await mysql.query(`select TenLoaiTietKiem from LOAITIETKIEM`)
	for (let i = 0; i < index; i++) {
		data.push({
			CMND: customers[fakerVI.number.int({ min: 0, max: 9 })]["CMND"],
			TienGoc: fakerVI.number.int({ min: 1, max: 100 }) * 1000000,
			LTK: LTK[fakerVI.number.int({ min: 0, max: 2 })]["TenLoaiTietKiem"],
		})
	}
	return data
}

testRouter
	.post("/createCustomer", async (req, res, next) => {
		try {
			const customers = dataCustomer()
			for (const customer of customers) await createCustomer(customer)
			return res.json({
				message: "nice",
			})
		} catch (error) {
			next(error)
		}
	})
	.post("/createLTK", async (req, res, next) => {
		try {
			mysql.query(
				`INSERT INTO LOAITIETKIEM(id, TenLoaiTietKiem, KyHan, NgayApDung, LaiSuat, LaiSuatCu)
					VALUES(?, ?, ?, ?, ?, ?)`,
				[nanoid(), "6 Tháng", 180, "2021-8-05", 0.07, 0.55]
			)
			return res.json({
				message: "nice",
			})
		} catch (error) {
			next(error)
		}
	})
	.post("/createDeposit", async (req, res, next) => {
		try {
			console.log(await dataDeposit(10))
			for (const deposit of await dataDeposit(10)) {
				console.log(deposit)
				await createDeposit(deposit)
			}
			return res.json({
				message: "nice",
			})
		} catch (error) {
			next(error)
		}
	})
export default testRouter
