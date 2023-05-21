import { Router } from "express";
import { customAlphabet } from "nanoid";
import { mysql } from "../models/index.js";
import { createCustomer, findCustomer, findOneCustomer } from "../models/khachhang.model.js";


const khachhangRouter = Router()


khachhangRouter
// TẠo này khoảng khách hàng
    .post("/create", async(req, res) => {
        const data = req.body
        try {
            await createCustomer(data) 
            return res.status(200).json({
                success: true,
                message: "Tạo Thành Công Tài Khoản",
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            })
        }
    })
    //Lấy tài khoản
    .get("/:id", async(req, res)=>{
        const { id } = req.params
        console.log(id);
        try {
            const data = await findOneCustomer(id)
            console.log(data);
            res.json({
                success: true,
                data,
            })
        } catch (error) {
            res.json({
                success: false,
                message: error.message,
            })
        }
    })
export default khachhangRouter