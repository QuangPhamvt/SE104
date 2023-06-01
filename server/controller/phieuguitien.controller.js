import { mysql } from "../models/index.js"
import {
	createDeposit,
	findDepositCustomerModel,
	findDepositModel,
	updateDepositCustomerModel,
	updateDrawOut,
} from "../models/phieuguitien.model.js"

// lấy tất cả phiếu tồn tại
export async function findDepositController(req, res) {
	const { page, limit } = req.query
	try {
		let data = []
		if (!page || !limit) {
			data = await findDepostModel(0, 5)
		} else data = await findDepostModel(page, limit)
		return res.status(200).json({
			success: true,
			data: data[0],
			message: "phieu gui tien",
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		})
	}
}

// tìm tất cả phiếu của một người
export async function findDepositCustomerController(req, res, next) {
	const { CMND } = req.params
	try {
		const [data] = await findDepositCustomerModel(CMND)
		if (!data)
			return res.status(400).json({
				success: false,
				message: "Không tồn tại bất cứ phiếu nào",
			})
		const total = data.reduce(
			(total, currentValue) => total + parseInt(currentValue["TienDu"]),
			0
		)
		return res.status(200).json({
			success: true,
			data,
			SoTienGui: total,
			SoLuong: data.length,
			message: "oke oke",
		})
	} catch (error) {
		next(error)
	}
}

// tạo phiếu
export async function createDepositController(req, res, next) {
	try {
		const [data] = await createDeposit(req.body)
		if (!data)
			return res.json({
				success: false,
				message: "Không tồn tại người này, vui lòng tạo lại",
			})
		return res.status(200).json({
			success: true,
			data,
			message: "oke oke",
		})
	} catch (error) {
		next(error)
	}
}
// cập nhập lại tiền cho 1 người
export async function updateDepositController(req, res, next) {
	const id = req.params.id
	try {
		await updateDepositCustomerModel(id)
		return res.status(200).json({
			success: true,
			message: "đã cập nhạp thành công",
		})
	} catch (error) {
		next(error)
	}
}

// Rút tiền

export async function deleteDepositController(req, res, next) {
	const { id } = req.params
	try {
		await updateDrawOut(id)
		return res.json({
			success: true,
			message: "oke",
		})
	} catch (error) {
		next(error)
	}
}
