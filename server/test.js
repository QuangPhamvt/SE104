import { Router } from "express"
import { fakerVI } from "@faker-js/faker"
import { createCustomer, findCustomer } from "./models/khachhang.model.js"
import { mysql } from "./models/index.js"
const testRouter = Router()

export async function dataDeposit(index) {
	try {
		for (let i = 0; i < index; i++) {
			await mysql.query(
				`
				INSERT INTO PHIEUGUITIEN(LTK, MaKhachHang, TienGoc, NgayMoSo ) VALUE(?, ?, ?, ?);
				`,
				[
					fakerVI.number.int({ min: 1, max: 3 }),
					fakerVI.number.int({ min: 1, max: 200 }),
					fakerVI.number.int({ min: 1, max: 50 }) * 1000000,
					fakerVI.date.between({
						from: "2018-01-01T00:00:00.000Z",
						to: "2022-01-22T00:00:00.000Z",
					}),
				]
			)
		}
	} catch (error) {
		console.log(error.message)
	}
}
export async function dataCustomer() {
	try {
		for (let i = 0; i < 100; i++) {
			await createCustomer({
				HoTenKhachHang: fakerVI.person.fullName(),
				CMND: fakerVI.string.numeric(12),
				DiaChi: fakerVI.location.city(),
			})
		}
		for (let i = 1; i <= 200; i++) {
			await mysql.query(
				`UPDATE KHACHHANG 
				SET DiaChi = ?, Tuoi = ?, NgaySinh = ?, SDT = ?, GioiTinh = ?
				where id = ? `,
				[
					`${fakerVI.location.streetAddress()},  ${fakerVI.location.city()}`,
					fakerVI.number.int({ min: 18, max: 40 }),
					fakerVI.date.birthdate(),
					fakerVI.phone.number(),
					fakerVI.person.sex(),
					i,
				]
			)
		}
	} catch (error) {
		console.log(error.message)
	}
}

testRouter.get("/", async function (req, res) {
	try {
		return res.json({
			success: true,
			data: [],
			message: "nice",
		})
	} catch (error) {
		return res.json({
			success: false,
			message: error.message,
		})
	}
})

export default testRouter
