import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import * as dotenv from "dotenv"
dotenv.config()
import router from "./routes/index.js"
import bodyParser from "body-parser"
import mysql from "mysql2"

function errorHandle(error, req, res, next) {
	console.log(`error ${error.message}`)
	const status = error.status || 400
	return res.status(status).json({
		success: false,
		message: error.message,
	})
}

const PORT = 5000
const app = express()
app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
)
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api/v1", router)

app.use(errorHandle)

app.listen(PORT, "127.0.0.1", () => {
	console.log(`Server started on port ${PORT}`)
})
