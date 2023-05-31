import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import * as dotenv from "dotenv"
dotenv.config()
import router from "./routes/index.js"
import mysql from "mysql2"

function errorHandle(error, req, res, next) {
	console.log(`error ${error.message}`)
	const status = error.status || 400
	res.status(status).json({
		success: false,
		message: error.message,
	})
}

const PORT = 5000
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(
	cors({
		origin: "http://127.0.0.1:5173",
	})
)

app.use("/api/v1", router)

app.use(errorHandle)

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
})
