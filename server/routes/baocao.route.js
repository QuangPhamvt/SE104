import { Router } from "express"
import {
	findAllReportConller,
	findReportController,
} from "../controller/baocao.controller.js"

const baocaoRouter = Router()
baocaoRouter.get("/", findAllReportConller).post("/", findReportController)
export default baocaoRouter
