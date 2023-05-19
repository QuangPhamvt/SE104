import { Router } from "express";
import staffRouter from "./staff.route.js";
import adminRouter from "./admin.route.js";
import customerRouter from "./customer.route.js";
import savingAccountRouter from "./savingAccount.route.js";


const router = Router()

router.get("/", (req, res) => {
    res.json({
        message: "router"
    })
})
router.use("/staff", staffRouter)
router.use("/admin", adminRouter)
router.use("/customer", customerRouter)
router.use("/savingaccount", savingAccountRouter)

export default router