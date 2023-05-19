import { Router } from "express";
import NGUOIDUNG, { NHOMNGUOIDUNG } from "../models/PHANQUYEN.model.js";
import  argon2  from "argon2";
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()

const adminRouter = Router()

adminRouter.get("/", async (req, res) => {
    res.json({
        message: "admin"
    })
})
const doc = {
    username: "quangphamvt",
    password: "123456",
    TenNhom: "staff",
}
//tạo người dùng 
adminRouter.post("/register", async (req, res) => {
    const { username, password, TenNhom } = req.body
    try {
        if( await NGUOIDUNG.findOne({username}))
            return res.status(401).json({success: false, message: "username exists"})
        const hashPassword = await argon2.hash(password)
        const user = await NGUOIDUNG.create({
            username,
            password: hashPassword,
            MaNhom: await NHOMNGUOIDUNG.findOne({ TenNhom })
        })
        const authToken = jwt.sign(user._id.toJSON(), process.env.JWT_SERCERTKEY)
        res.cookie("authToken", authToken, {maxAge: 360*60*60*60*100, httpOnly: true,})
        res.json({success: true, message: "Đăng ký thành công"})
    } catch (error) {
        res.json({success: false, message: error.message,})
    }
})
export default adminRouter