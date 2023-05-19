import { Schema, model } from "mongoose";


const guiTienSchema = new Schema({
    MaSoTaiKhoan: {
        type: Schema.Types.ObjectId, ref: "SOTIETKIEM",
    },
    MaKhachHang: {
        type: Schema.Types.ObjectId, ref: "KHACHHANG",
    },
    NgayGui: {
        type: Date,
        default: () => Date.now(),
    },
    SoTienGui: {
        type: Number,
    }
})
const rutTienSchema = new Schema({
    MaSoTaiKhoan: {
        type: Schema.Types.ObjectId, ref: "SOTIETKIEM",
    },
    MaKhachHang: {
        type: Schema.Types.ObjectId, ref: "KHACHHANG",
    },
    NgayRut: {
        type: Date,
        default: () => Date.now(),
    },
    SoTienRut: {
        type: Number,
    }
})
export const GUITIEN = model("GUITIEN", guiTienSchema)
export const RUITIEN = model("RUTTIEN", rutTienSchema)

