import {Router} from "express";
import customers from "../models/customers.model.js";
import savingaccounts from "../models/savingAccounts.model.js";
import { typesavings } from "../models/savingAccounts.model.js";

const savingAccount = Router()

savingAccount.get("/", (req, res) => {
    res.json({
        message: 'savingaccount'
    })
})
savingAccount.get("/type", async(req, res) => {
    try {
        await typesavings.create([
            {
                nameType: 'Không kì hạn',
                term: null,
                rate: 0.005,
            },
            {
                nameType: '3 tháng',
                term: 3,
                rate: 0.05,
            },
            {
                nameType: '6 Tháng',
                term: 6,
                rate: 0.055,
            }
        ])
        res.json({
            success: true,
        })
    } catch (error) {
        res.json({
            message: error.message,
        })
    }
})



savingAccount.post("/", async (req, res) => {
    const { money, nameType, CMND } = req.body
    try {
        const customerID = await customers.findOne({ CMND })
        const typeSavingID = await typesavings.findOne({ nameType })
        const data = await savingaccounts.create({
            customerID,
            typeSavingID,
            money,
        })
        res.status(200).json({
            data
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
})


export default savingAccount
