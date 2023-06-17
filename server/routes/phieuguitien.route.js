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

const phieuguitienRouter = Router()
//middleware
phieuguitienRouter.use(verifyMiddleware)
// Lấy tất cả phiếu tồn tại
phieuguitienRouter.get("/", findDepositController)
// cập nhập lại giá trị
phieuguitienRouter.get("/update/:id", updateDepositController)
// Lấy các phiếu của 1 người
phieuguitienRouter.get("/:CMND", findDepositCustomerController)
// TẠo 1 phiếu gửi tiền
phieuguitienRouter.post("/create", createDepositController)
// Lấy các phiếu theo search
phieuguitienRouter.post("/search", findDepositSearchController)
//Rut tiền
phieuguitienRouter.put("/drawout/:id", deleteDepositController)
// Lấy phiếu thỏa điều kiện

export default phieuguitienRouter
