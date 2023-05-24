import { Router } from "express";
import { mysql } from "../models/index.js";
import { customAlphabet } from "nanoid";
import { createDeposit, findDepositCustomerModel, updateDrawOut } from "../models/phieuguitien.model.js";
import { createDepositController, findDepositCustomerController } from "../controller/phieuguitien.controller.js";
const nanoid = customAlphabet("1234567890abcdef", 15)


const phieuguitienRouter = Router()


phieuguitienRouter.get("/", async(req, res) => {
    try {
        const [data] = await mysql.query(
            `select * from PHIEUGUITIEN`
        )
        return res.json({
            message: "phieuguitien",
            data: data
        })
    } catch (error) {
        res.json({
            message: error.message,
        })
    }
})
// Lấy các phiếu của 1 người
phieuguitienRouter.get("/:CMND", findDepositCustomerController)
// TẠo 1 phiếu gửi tiền
phieuguitienRouter.post("/create", createDepositController)

// cập nhập lại giá trị
phieuguitienRouter.get("/update", async(req, res) => {
    try {
        const data = await mysql.query(
            'update PHIEUGUITIEN SET NgayCapNhap = ?'
        , [new Date()])
        res.json({
            message: "Oke ne"
        })
    } catch (error) {
        res.json({
            message: error.message,
        })
    }
})


//Rut tiền
phieuguitienRouter.put("/drawout/:id", async (req, res) => {
    const { id } = req.params
    try {
        await updateDrawOut(id)
        return res.json({
            message: 'oke'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
})

export default phieuguitienRouter


