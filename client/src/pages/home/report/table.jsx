import { Card, Typography } from "@material-tailwind/react"

const TABLE_HEAD = [
	"Mã Phiếu",
	"Loại Kỳ Hạn",
	"Ngày Gửi",
	"Ngày Đáo Hạn",
	"Tiền Gốc",
	"Tiền Dư",
]

const TABLE_ROWS = [
	{
		name: "John Michael",
		job: "Manager",
		date: "23/04/18",
	},
	{
		name: "Alexa Liras",
		job: "Developer",
		date: "23/04/18",
	},
	{
		name: "Laurent Perrier",
		job: "Executive",
		date: "19/09/17",
	},
	{
		name: "Michael Levi",
		job: "Developer",
		date: "24/12/08",
	},
	{
		name: "Richard Gran",
		job: "Manager",
		date: "04/10/21",
	},
]
function Table() {
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
					{TABLE_ROWS.map(({ name, job, date }, index) => {
						const isLast = index === TABLE_ROWS.length - 1
						const classes = isLast
							? "p-4"
							: "p-4 border-b border-blue-gray-50"

						return (
							<tr key={name}>
								<td className={classes}>
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal"
									>
										{name}
									</Typography>
								</td>
								<td className={`${classes} bg-blue-gray-50/50`}>
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal"
									>
										{job}
									</Typography>
								</td>
								<td className={classes}>
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal"
									>
										{date}
									</Typography>
								</td>
								<td className={`${classes} bg-blue-gray-50/50`}>
									<Typography
										as="a"
										href="#"
										variant="small"
										color="blue"
										className="font-medium"
									>
										Edit
									</Typography>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</Card>
	)
}

export default Table
