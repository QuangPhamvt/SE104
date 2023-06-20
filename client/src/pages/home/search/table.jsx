import { Card, Typography } from "@material-tailwind/react"
import { useSelector } from "react-redux"
import DialogForm from "./dialogTable"
import format from "date-fns/format"
import glass from "../../../asset/glassglass.avif"

const TABLE_HEAD = [
	"Mã Phiếu",
	"Loại Kỳ Hạn",
	"Lãi Suất",
	"Ngày Gửi",
	"Ngày Đáo Hạn",
	"Tiền Gốc",
	"Tiền Dư",
	"Ngày Đóng Sổ",
]
function Table() {
	const data = useSelector((store) => store.deposit)
	const TABLE_ROWS = data.data.postSearchDeposit
	return (
		<Card className="overflow-scroll h-[500px] w-full mt-2 border-2 shadow-xl ">
			{!data.success.postSearchDeposit ? (
				<img src={glass} alt="" className="h-80 w-80 ml-96 mt-20" />
			) : (
				<table className="w-full min-w-max table-auto text-left relative">
					<thead className=" sticky top-0">
						<tr>
							{TABLE_HEAD.map((head) => (
								<th
									key={head}
									className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
								>
									<Typography
										variant="h6"
										color="blue-gray"
										className="font-bold leading-none opacity-70 text-center"
									>
										{head}
									</Typography>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{TABLE_ROWS.map(
							(
								{
									id,
									TenLoaiTietKiem,
									LaiSuat,
									NgayMoSo,
									NgayDongSo,
									NgayDaoHan,
									TienDu,
									TienGoc,
								},
								index
							) => {
								const isLast = index === TABLE_ROWS.length - 1
								const classes = isLast
									? "p-4"
									: "p-4 border-b border-blue-gray-50"
								const NMS = format(
									new Date(NgayMoSo),
									"dd/MM/yyyy"
								)
								const NDH = format(
									new Date(NgayDaoHan),
									"dd/MM/yyyy"
								)
								const NDS = format(
									new Date(NgayDongSo),
									"dd/MM/yyyy"
								)

								return (
									<tr
										key={id}
										className="hover:bg-blue-gray-100"
									>
										<td
											className={`${classes} hover:cursor-pointer text-center`}
										>
											{/* <Typography
											variant="small"
											className="font-normal text-center"
										> */}
											<DialogForm id={id} />
											{/* </Typography> */}
										</td>
										<td
											className={`${classes} bg-blue-gray-50/50`}
										>
											<Typography
												variant="small"
												className="font-normal text-center"
											>
												{TenLoaiTietKiem}
											</Typography>
										</td>
										<td className={classes}>
											<Typography
												variant="small"
												className="font-normal text-center"
											>
												{LaiSuat}
											</Typography>
										</td>
										<td
											className={`${classes} bg-blue-gray-50/50`}
										>
											<Typography
												variant="small"
												className="font-medium text-center"
											>
												{NMS}
											</Typography>
										</td>
										<td className={{ classes }}>
											<Typography
												variant="small"
												className="font-medium text-center"
											>
												{NDH}
											</Typography>
										</td>
										<td
											className={`${classes} bg-blue-gray-50/50`}
										>
											<Typography
												variant="small"
												className="font-medium text-center"
											>
												{parseInt(TienGoc)}
											</Typography>
										</td>
										<td className={{ classes }}>
											<Typography
												variant="small"
												className="font-medium text-center"
											>
												{parseInt(TienDu)}
											</Typography>
										</td>
										<td
											className={`${classes} bg-blue-gray-50/50`}
										>
											<Typography
												variant="small"
												className="font-medium text-center"
											>
												{NgayDongSo ? NDS : "00-00-00"}
											</Typography>
										</td>
									</tr>
								)
							}
						)}
					</tbody>
				</table>
			)}
		</Card>
	)
}

export default Table
