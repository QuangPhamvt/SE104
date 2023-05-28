import {
	createCustomer,
	findCustomer,
	findOneCustomer,
} from "../models/khachhang.model.js"

export async function createCustomerController(req, res) {
	const data = req.body
	try {
		await createCustomer(data)
		return res.status(200).json({
			success: true,
			message: "Tao Thanh Cong Tai Khoan",
		})
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		})
	}
}

export async function findCustomerController(req, res) {
	const { id } = req.params
	try {
		const [data] = await findOneCustomer(id)
		console.log(data)
		res.json({
			success: true,
			data,
		})
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		})
	}
}
