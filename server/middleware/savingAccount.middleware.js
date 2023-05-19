import KHACHHANG from "../models/KHACHHANG.model.js"
import SOTIETKIEM, { LOAITIETKIEM } from "../models/SOTIETKIEM.model.js"


export async function createAccount(req, res){
    const {
        SoTienGui,
        LoaiTietKiem,
    } = req.body
    const { HoTenKhachHang, CMND, DiaChi } = req.body.KHACHHANG
    try {
        //Kiem tra KHACH HANG 
        let user = await KHACHHANG.findOne({CMND})
        const LTK = await LOAITIETKIEM.findOne({TenLoaiTietKiem: LoaiTietKiem})
        if(!user){
           user = await KHACHHANG.create({HoTenKhachHang, DiaChi, CMND,})
        }

        //Tao so tiet kiem
        await SOTIETKIEM.create({
            MaKhachHang: user,
            SoTienGui,
            LoaiTietKiem: LTK,
        })
        res.json({
            message: "Tao xong"
        })
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}