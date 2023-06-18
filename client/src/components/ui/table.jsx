import { Card, Typography } from "@material-tailwind/react"
import { useSelector } from "react-redux"

export default function Table(props) {
	const data = useSelector((store) => store.deposit.data)
	// eslint-disable-next-line react/prop-types
	const TABLE_HEAD = props?.["head"] || []
	const TABLE_ROWS = data || []
	return (
		<Card className="overflow-scroll h-[400px] w-[350px] rounded-xl overflow-x-hidden border-2 ">
			<table className="w-full min-w-max table-auto text-left relative">
				<thead className=" sticky top-0 border-b-2 opacity-95 bg-white">
					<tr className="">
						{TABLE_HEAD.map((head) => (
							<th
								key={head}
								className="border-b-2  bg-blue-gray-50 p-4"
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
					{TABLE_ROWS.map(({ id, TienGoc, NgayDaoHan }, index) => {
						const isLast = index === TABLE_ROWS.length - 1
						const classes = isLast
							? "p-4"
							: "p-4 border-b border-blue-gray-50"

						const utcDate = new Date(NgayDaoHan)
						const date = utcDate.getUTCDate() + 1
						const month =
							utcDate.getUTCMonth() < 12
								? utcDate.getUTCMonth() + 1
								: 1
						const year = utcDate.getFullYear()
						const string = `${date}-${month}-${year}`
						return (
							<tr key={id}>
								<td className={classes}>
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal"
									>
										{index + 1}
									</Typography>
								</td>
								<td className={classes}>
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal"
									>
										{parseFloat(TienGoc)}
									</Typography>
								</td>
								<td className={classes}>
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal text-center"
									>
										{string}
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
