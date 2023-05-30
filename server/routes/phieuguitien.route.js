import { Router } from "express"
import {
	createDepositController,
	deleteDepositController,
	findDepositController,
	findDepositCustomerController,
	updateDepositController,
} from "../controller/phieuguitien.controller.js"

const phieuguitienRouter = Router()

// Lấy tất cả phiếu tồn tại
phieuguitienRouter.get("/", findDepositController)
// cập nhập lại giá trị
phieuguitienRouter.get("/update", updateDepositController)
// TẠo 1 phiếu gửi tiền
phieuguitienRouter.post("/create", createDepositController)
//Rut tiền
phieuguitienRouter.put("/drawout/:id", deleteDepositController)
// Lấy các phiếu của 1 người
phieuguitienRouter.get("/:CMND", findDepositCustomerController)

export default phieuguitienRouter
