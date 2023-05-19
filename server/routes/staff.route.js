import { Router } from "express";
import argon2 from "argon2"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
import NGUOIDUNG from "../models/PHANQUYEN.model.js";

const staffRouter = Router()


staffRouter.get("/", (req, res) => {
    res.json({
        message: "staff"
    })
})
// Đăng NHập 
staffRouter.post("/login", async (req, res) => {
    const { username, password } = req.body
    const user = await NGUOIDUNG.findOne({username})
    try {
        if(!user)
            return res.status(401).json({
                success: false,
                message: "Người dùng không tồn tại"
            })
        else if(await argon2.verify(user.password, password)){
            const authToken = jwt.sign(user._id.toJSON(), process.env.JWT_SERCERTKEY)
            res.cookie("authToken", authToken,{maxAge: 360*60*60*100, httpOnly: true})
            return res.status(200).json({success: true, message: "ĐĂNG NHẬP THÀNH CÔNG"})
        }else
            return res.json({success: false, message: "Sai password"})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
})
// Tạo phiếu 



export default staffRouter