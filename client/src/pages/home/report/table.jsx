import { Card, Typography } from "@material-tailwind/react"
import { useSelector } from "react-redux"
import glass from "../../../asset/glassglass.avif"

const TABLE_HEAD = [
	"Loại Kỳ Hạn",
	"Ngày Báo Cáo",
	"Tổng Thu",
	"Tổng Chi",
	"Tổng Chênh Lệch",
]

function Table() {
	const data = useSelector((store) => store.report)
	const TABLE_ROWS = data.data.getReport
	return (
		<Card className="overflow-scroll h-[500px] w-full mt-2 border-2 shadow-xl ">
			{!data.success.getReport ? (
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
										className="text-center leading-none opacity-70 font-bold"
									>
										{head}
									</Typography>
								</th>
							))}
						</tr>
					</thead>
					<tbody className="">
						{TABLE_ROWS.map(
							(
								{
									LTK,
									NgayBaoCao,
									TongThu,
									TongChi,
									ChenhLech,
								},
								index
							) => {
								const isLast = index === TABLE_ROWS.length - 1
								const classes = isLast
									? "p-4"
									: "p-4 border-b border-blue-gray-50"

								const utcDate = new Date(NgayBaoCao)
								const date = utcDate.getUTCDate() + 1
								const month =
									utcDate.getUTCMonth() < 12
										? utcDate.getUTCMonth() + 1
										: 1
								const year = utcDate.getFullYear()
								const string = `${date}-${month}-${year}`
								return (
									<tr
										key={index}
										className=" hover:bg-blue-gray-100 border-t-2 hover:shadow-2xl"
									>
										<td className={classes}>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal text-center"
											>
												{LTK}
											</Typography>
										</td>
										<td
											className={`${classes} bg-blue-gray-50/50`}
										>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal text-center"
											>
												{string}
											</Typography>
										</td>
										<td className={classes}>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal text-center"
											>
												{TongThu}
											</Typography>
										</td>
										<td
											className={`${classes} bg-blue-gray-50/50`}
										>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-medium text-center"
											>
												{TongChi}
											</Typography>
										</td>
										<td className={classes}>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal text-center"
											>
												{ChenhLech}
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
