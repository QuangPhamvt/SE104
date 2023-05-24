import { createDeposit, findDepositCustomerModel } from "../models/phieuguitien.model.js"

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