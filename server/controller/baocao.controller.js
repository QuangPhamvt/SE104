import { findAllReportModel } from "../models/baocao.model.js"
import { mysql } from "../models/index.js"

export async function findAllReportConller(req, res, next) {
	try {
		const [data] = await findAllReportModel()
		return res.status(200).json({
			success: true,
			data,
			message: "Lấy dữ liệu thành công",
		})
	} catch (error) {
		next(error)
	}
}
export async function findReportController(req, res, next) {
	const body = req.body
	try {
		const stringNull = " is not null"
		const array = Object.values(body)
		const query = `
			select 
				LTK.TenLoaiTietKiem as LTK, 
				NgayBaoCao, TongThu, 
				TongChi, ChenhLech 
			from BAOCAODOANHSO BCDS
			inner join LOAITIETKIEM LTK on LTK.id = BCDS.LTK
			where 
				LTK.TenLoaiTietKiem ${body?.LTK ? " = ?" : stringNull} and
				BCDS.NgayBaoCao ${body?.NgayBaoCao ? " = ?" : stringNull}
			`
		const [data] = await mysql.query(query, array)
		return res.status(200).json({
			success: true,
			data,
			message: "Lay thanh cong",
		})
	} catch (error) {
		next(error)
	}
}
