import { Schema, model } from "mongoose";


const schema = new Schema({
    HoTenKhachHang: {
        type: String,
        maxLength: 30,
    },
    CMND: {
        type: String,
        maxLength: 30,
    },
    DiaChi: {
        type: String,
        maxLength: 30,
    }
})

const KHACHHANG = model("KHACHHANG", schema)
export default KHACHHANG
