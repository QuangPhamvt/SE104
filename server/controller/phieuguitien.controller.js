import { mysql } from "../models/index.js"
import { createDeposit, findDepositCustomerModel, updateDrawOut } from "../models/phieuguitien.model.js"

// lấy tất cả phiếu tồn tại
export async function findDepositController(req, res){
    try {
        const [data] = await mysql.query(
            `select 
                PGT.id, LTK.TenLoaiTietKiem, 
                LTK.LaiSuat, HoTenKhachHang, 
                CMND, DiaChi, NgayMoSo, NgayDongSo, 
                NgayCapNhap, Tien, TienGoc 
            from PHIEUGUITIEN PGT
            inner join KHACHHANG KH on KH.id = PGT.MaKhachHang
            inner join LOAITIETKIEM LTK on LTK.id = PGT.LTK`
        )
        return res.status(200).json({
            success: true,
            data,
            message: 'phieu gui tien',
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        }) 
    }
}

// tìm tất cả phiếu của một người
export async function findDepositCustomerController(req, res){
    const { CMND } = req.params
    try {
        const [data] = await findDepositCustomerModel(CMND)
        if(!data)
            return res.status(400).json({
                success: false,
                message: "Không tồn tại bất cứ phiếu nào"
            })
        return res.status(200).json({
            success: true,
            data,
            message: 'oke oke',
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        }) 
    }
}

// tạo phiếu
export async function createDepositController(req, res){
    try {
        const [data] = await createDeposit(req.body)
        if(!data) return res.json({
            success: false,
            message: "Không tồn tại người này, vui lòng tạo lại",
        })
        return res.status(200).json({
            success: true,
            data,
            message: 'oke oke'
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        }) 
    }
}
// cập nhập lại tiền cho 1 người
export async function updateDepositController(req, res){
    try {
        await mysql.query(
            `update PHIEUGUITIEN
            SET NgayCapNhap = ?`
            , [new Date()])
        return res.status(200).json({
            success: true,
            message: 'đã cập nhạp thành công'
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error.message,
        })
    }
}

// Rút tiền
export async function deleteDepositController(req, res){
    const { id } = req.params
    try {
        await updateDrawOut(id)
        return res.json({
            success: true,
            message: 'oke',
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error.message,
        })
    }
}