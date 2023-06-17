import { Card, Typography } from "@material-tailwind/react"
import { useSelector } from "react-redux"
import DialogForm from "./dialogTable"

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
	const TABLE_ROWS = useSelector((store) => store.deposit.data)
	console.log(TABLE_ROWS)
	return (
		<Card className="overflow-scroll h-[500px] w-full mt-2 border-2 shadow-xl ">
			<table className="w-full min-w-max table-auto text-left relative">
				<thead className=" sticky top-0">
					<tr>
						{TABLE_HEAD.map((head) => (
							<th
								key={head}
								className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
							>
								<Typography
									variant="small"
									color="blue-gray"
									className="font-normal leading-none opacity-70"
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
							let NMS = new Date(NgayMoSo)
							let date = NMS.getUTCDate()
							let month =
								NMS.getUTCMonth() < 12
									? NMS.getUTCMonth() + 1
									: 1
							let year = NMS.getFullYear()
							NMS = `${date + 1}-${month}-${year}`

							let NDH = new Date(NgayDaoHan)
							date = NDH.getUTCDate()
							month =
								NDH.getUTCMonth() < 12
									? NDH.getUTCMonth() + 1
									: 1
							year = NDH.getFullYear()
							NDH = `${date + 1}-${month}-${year}`

							let NDS = new Date(NgayDongSo)
							date = NDS.getUTCDate()
							month =
								NDS.getUTCMonth() < 12
									? NDS.getUTCMonth() + 1
									: 1
							year = NDS.getFullYear()
							NDS = `${date + 1}-${month}-${year}`

							return (
								<tr key={id} className="hover:text-blue-200">
									<td
										className={`${classes} hover:cursor-pointer`}
									>
										<Typography
											variant="small"
											className="font-normal"
										>
											<DialogForm id={id} />
										</Typography>
									</td>
									<td
										className={`${classes} bg-blue-gray-50/50`}
									>
										<Typography
											variant="small"
											className="font-normal"
										>
											{TenLoaiTietKiem}
										</Typography>
									</td>
									<td className={classes}>
										<Typography
											variant="small"
											className="font-normal"
										>
											{LaiSuat}
										</Typography>
									</td>
									<td
										className={`${classes} bg-blue-gray-50/50`}
									>
										<Typography
											variant="small"
											className="font-medium"
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
											className="font-medium"
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
											className="font-medium"
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
		</Card>
	)
}

export default Table
