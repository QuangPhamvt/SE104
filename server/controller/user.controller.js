import { mysql } from "../models/index.js"
import { customAlphabet } from "nanoid"
import bcrypt from "bcrypt"
const id = customAlphabet("1234567890abcdef", 15)

export async function createUser(req, res){
    const {username, password, TenNhom} = req.body
    try {
        const isExists = await mysql.query(
            `select username from NGUOIDUNG where username = ?`
        , [username])
        if(!isExists || !password) 
            return res.status(400).json({
                success: false,
                message: 'Đã tồn tại nhân vật này',
            })

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        await mysql.query(
            `
            insert into NGUOIDUNG values(?, ?, 
                (
                    select id from NHOMNGUOIDUNG where TenNhom = ?
                ), ?)
            `
        , [id(), username, TenNhom, hashPassword ])
        return res.status(200).json({
            success: true,
            message: "Tao thanh cong",
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}