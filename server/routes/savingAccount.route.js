import { Router } from "express";
import jwt  from "jsonwebtoken";
import * as dotenv from "dotenv"
import { userVerify } from "../middleware/auth.middleware.js";
import { createAccount } from "../middleware/savingAccount.middleware.js";
import { LOAITIETKIEM } from "../models/SOTIETKIEM.model.js";
dotenv.config()
const doc = [
    {
        TenLoaiTietKiem: "Không Kỳ Hạn",
        KyHan: 0,
        LaiSuat: 0.005,
        SoNgayGuiDeDuocRut: 15,
    },
    {
        TenLoaiTietKiem: "3 Tháng",
        KyHan: 3,
        LaiSuat: 0.05,
        SoNgayGuiDeDuocRut: 90,
    },
    {
        TenLoaiTietKiem: "6 Tháng",
        KyHan: 6,
        LaiSuat: 0.055,
        SoNgayGuiDeDuocRut: 180,
    },
]
const savingAccountRouter = Router()
savingAccountRouter.post("/create", userVerify, createAccount)



savingAccountRouter.get("/", userVerify, (req, res) => {
    console.log(req.body)
    return res.json({
        message: "saving account"
    })
})

savingAccountRouter.get("/LTK", async(req, res) => {
    try {
    } catch (error) {
        res.json({message: error.message})
    }
})
export default savingAccountRouter