import { Schema, model } from "mongoose"


const LTKSchema = new Schema({
    TenLoaiTietKiem: {
        type: String,
        unique: true,
    },
    KyHan: {
        type: Number,
        required: true,
    },
    LaiSuat: {
        type: Number,
        required: true,
    },
    SoNgayGuiDeDuocRut: {
        type: Number,
        required: true,
    }
}) 

const schema = new Schema({
    LoaiTietKiem: {
        type: Schema.Types.ObjectId, ref: "LOAITIETKIEM"
    },
    MaKhachHang: {
        type: Schema.Types.ObjectId, ref: "KHACHHANG",
    },
    SoTienGui: {
        type: Number,
    },
    NgayMoSo: {
        type: Date,
        default: () => Date.now(),
    },
    NgayDongSo: {
        type: Date,
    },
})

export const LOAITIETKIEM = model("LOAITIETKIEM", LTKSchema)
const SOTIETKIEM = model("SOTIETKIEM", schema)
export default SOTIETKIEM 
