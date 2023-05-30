import { Router } from "express"
import { customAlphabet } from "nanoid"
import { mysql } from "../models/index.js"

import { createUser, loginUser } from "../controller/user.controller.js"
import verifyMiddleware from "../middleware/vetify.js"

const userRouter = Router()

userRouter.get("/", verifyMiddleware, async function (req, res) {
	try {
		console.log(req.body.user)
		return res.status(200).json({
			message: "nice!",
		})
	} catch (error) {
		console.log(error.message)
	}
})

userRouter.post("/create", createUser)
userRouter.post("/login", loginUser)
export default userRouter
