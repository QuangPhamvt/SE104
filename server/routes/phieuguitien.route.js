import { Router } from "express"
import {
	createDepositController,
	deleteDepositController,
	findDepositController,
	findDepositCustomerController,
	findDepositSearchController,
	updateDepositController,
} from "../controller/phieuguitien.controller.js"
import verifyMiddleware from "../middleware/vetify.js"
import { permission } from "../middleware/permissions.js"

const phieuguitienRouter = Router()
//middleware
phieuguitienRouter
	.use(verifyMiddleware)
	.use("/update", permission)
	// Lấy tất cả phiếu tồn tại
	.get("/", permission, findDepositController)
	// Lấy các phiếu của 1 người
	.get("/:CMND", findDepositCustomerController)
	// cập nhập lại giá trị
	.get("/update/:id", updateDepositController)
	// TẠo 1 phiếu gửi tiền
	.post("/create", permission, createDepositController)
	// Lấy các phiếu theo search
	.post("/search", permission, findDepositSearchController)
	//Rut tiền
	.put("/drawout/:id", permission, deleteDepositController)

export default phieuguitienRouter
