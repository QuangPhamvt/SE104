import { Router } from "express";
import argon2 from 'argon2'
import customers from "../models/customers.model.js";


const customer = Router()



customer.get("/", (req, res) => {
    res.json({
        message: 'customer'
    })
})

//create customer 
customer.post("/register",async (req, res) => {
    const { fullName, CMND, password, address } = req.body
    try {
        const customer = await customers.findOne({ CMND })
        if(!customer){
            await customers.create({
                fullName,
                CMND,
                password: await argon2.hash(password),
                address,
            })
            
            return res.status(200).json({
                sucess: true,
                message: 'Tao tài khoản thành công'
            })
        }
        res.status(400).json({
            sucess: false,
            message: 'Tồn tại khách hàng có số CMND như vậy'
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: error.message
        })
    }
})

export default customer
