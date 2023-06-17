import { Router } from "express"
import { mysql } from "../models/index.js"
import { permission } from "../middleware/permissions.js"
import verifyMiddleware from "../middleware/vetify.js"

const thamsoRouter = Router()

thamsoRouter.put(
	"/STTT",
	verifyMiddleware,
	permission,
	async function (req, res, next) {
		const { STTT } = req.body
		try {
			await mysql.query(`update THAMSO SET SoTienGuiBanDauToiThieu = ?`, [
				STTT,
			])
			return res.status(200).json({
				success: true,
				message: "nice",
			})
		} catch (error) {
			next(error)
		}
	}
)

export default thamsoRouter
