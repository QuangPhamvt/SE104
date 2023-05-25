import { Router } from "express";
import phieuguitienRouter from "./phieuguitien.route.js";
import khachhangRouter from "./khachhang.route.js";
import userRouter from "./user.route.js"

const router = Router()

router.get("/", (req, res) => {
    res.json({
        message: "router"
    })
})
router.use("/deposit", phieuguitienRouter)
router.use("/customer", khachhangRouter)
router.use("/user", userRouter)

export default router