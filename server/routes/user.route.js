import { Router } from "express";
import { customAlphabet } from "nanoid";
import { mysql } from "../models/index.js";
import bcrypt from "bcrypt"
const id = customAlphabet("1234567890abcdef", 15)

import { createUser } from "../controller/user.controller.js";

const userRouter = Router()

userRouter.get("/", async function(req, res){
    try {
        const salt= await bcrypt.genSalt(10)
        const password = await bcrypt.hash("123456", salt)
        console.log(password);
    } catch (error) {
        console.log(error.message);
    }
})

userRouter.post("/create", createUser)
export default userRouter