import { Schema, model } from "mongoose"

const PHANQUYENSchema = new Schema({
    MaNhom: {
        type: Schema.Types.ObjectId, ref: "NHOMNGUOIDUNG",
    },
    MaChucNang:{
        type: Schema.Types.ObjectId, ref: "CHUCNANG",
    },
})

const CHUCNANGSchema = new Schema({
    TenChucNang: {
        type: String,
        maxLength: 30,
    },
    TenManHinhDuocLoad: {
        type: String,
        maxLength: 30,
    }
})

const NHOMNGUOIDUNGSchema = new Schema({
    TenNhom: {
        type: String,
        maxLength: 30,
    },
})

const NGUOIDUNGSChema = new Schema({
    username: {
        type: String,
        maxLength: 30,
        unique: true,
    },
    password: {
        type: String,
    },
    MaNhom: {
        type: Schema.Types.ObjectId, ref: "NHOMNGUOIDUNG",
    },
})

export const PHANQUYEN = model("PHANQUYEN", PHANQUYENSchema)
export const CHUCNANG = model("CHUCNANG", CHUCNANGSchema)
export const NHOMNGUOIDUNG = model("NHOMNGUOIDUNG", NHOMNGUOIDUNGSchema)
const NGUOIDUNG = model("NGUOIDUNG", NGUOIDUNGSChema)
export default NGUOIDUNG




