import NGUOIDUNG from "../models/PHANQUYEN.model.js";
import jwt from "jsonwebtoken"



export async function userVerify(req, res, next) {
    try {
        const token = jwt.verify(req.cookies["authToken"], process.env.JWT_SERCERTKEY)
        console.log(token);
        const user = await NGUOIDUNG.findById(token)
        console.log(user);
        if(user){
            console.log(1);
            return next()
        }
        return res.json({
            message: "Không có quyền truy câp"
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}
