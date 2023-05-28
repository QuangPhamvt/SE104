import { Router } from "express"
import { customAlphabet } from "nanoid"
import { mysql } from "../models/index.js"
import {
	createCustomer,
	findCustomer,
	findOneCustomer,
} from "../models/khachhang.model.js"
import {
	createCustomerController,
	findCustomerController,
} from "../controller/khachhang.controller.js"

const khachhangRouter = Router()

khachhangRouter
	// TẠo này khoảng khách hàng
	.post("/create", createCustomerController)
	//Lấy tài khoản
	.get("/:id", findCustomerController)

export default khachhangRouter
