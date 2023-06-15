import { Router } from "express"
import {
	createDepositController,
	deleteDepositController,
	findDepositController,
	findDepositCustomerController,
	findDepositSearchController,
	updateDepositController,
} from "../controller/phieuguitien.controller.js"

const phieuguitienRouter = Router()

// Lấy tất cả phiếu tồn tại
phieuguitienRouter.get("/", findDepositController)
// cập nhập lại giá trị
phieuguitienRouter.get("/update/:id", updateDepositController)
// TẠo 1 phiếu gửi tiền
phieuguitienRouter.post("/create", createDepositController)
//Rut tiền
phieuguitienRouter.put("/drawout/:id", deleteDepositController)
// Lấy các phiếu theo search
phieuguitienRouter.post("/search", findDepositSearchController)
// Lấy các phiếu của 1 người
phieuguitienRouter.get("/:CMND", findDepositCustomerController)
// Lấy phiếu thỏa điều kiện

export default phieuguitienRouter
