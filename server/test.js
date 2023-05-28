import { Router } from "express"
import { fakerVI } from "@faker-js/faker"
import { createCustomer, findCustomer } from "./models/khachhang.model.js"
import { mysql } from "./models/index.js"
const testRouter = Router()

export async function dataDeposit() {
	try {
		let customers = []
		for await (const customer of await findCustomer()) {
			customers.push(customer)
		}
		console.log(customers[0])
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
	} catch (error) {
		console.log(error.message)
	}
}

testRouter.get("/", async function (req, res) {
	try {
		await dataDeposit()
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
