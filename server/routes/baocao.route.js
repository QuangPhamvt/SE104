import { Router } from "express"
import {
	findAllReportConller,
	findReportController,
} from "../controller/baocao.controller.js"
import verifyMiddleware from "../middleware/vetify.js"
import { permission } from "../middleware/permissions.js"

const baocaoRouter = Router()
baocaoRouter
	.use(verifyMiddleware)
	.use(permission)
	.get("/", findAllReportConller)
	.post("/", findReportController)
export default baocaoRouter
