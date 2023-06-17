import { Router } from "express"
import phieuguitienRouter from "./phieuguitien.route.js"
import khachhangRouter from "./khachhang.route.js"
import userRouter from "./user.route.js"
import testRouter from "../test.js"
import baocaoRouter from "./baocao.route.js"

const router = Router()

router.get("/", (req, res) => {
	res.json({
		message: "router",
	})
})
router.use("/deposit", phieuguitienRouter)
router.use("/customer", khachhangRouter)
router.use("/report", baocaoRouter)
router.use("/user", userRouter)
router.use("/test", testRouter)

export default router
