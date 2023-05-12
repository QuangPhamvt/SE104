import { Router } from "express";
import customer from "./customers.route.js"
import savingAccount from "./savingAccount.route.js"
import deposit from "./deposit.router.js";

const router = Router()
router.use("/customers", customer)
router.use("/savingaccount", savingAccount)
router.use("/deposit", deposit)

export default router
