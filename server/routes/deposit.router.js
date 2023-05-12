import { Router } from "express";
import customers from "../models/customers.model.js"
import savingaccounts from "../models/savingAccounts.model.js"
import deposits from "../models/deposit.model.js";


const deposit = Router()


deposit.get("/", (req, res) => {
    res.json({
        message: "deposit"
    })
})

deposit.post("/", async (req, res) => {
    const { customerID, savingAccountID, money } = req.body
    try {
        const data = await deposits.create({
            customerID: await customers.findOne({ _id:customerID }),
            savingaccountID: await savingaccounts.findOneAndUpdate({ _id: savingAccountID }, { $inc:{ "money": money } }, { new: true }),
            money,
        })
        res.json({
            data
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
})


export default deposit



