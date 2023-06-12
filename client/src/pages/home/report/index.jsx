import {
	Card,
	CardBody,
	CardHeader,
	Input,
	Option,
	Select,
	Typography,
} from "@material-tailwind/react"
import Table from "./table"
function Report() {
	return (
		<div className="flex flex-col items-center bg-[#C1EAF2]">
			<Card className="mt-10 w-3/4 items-center">
				<CardHeader className=" w-96 text-center">
					<Typography variant="h2">Báo cáo doanh số</Typography>
				</CardHeader>
				<CardBody className="w-full">
					<form action="" className="flex flex-col gap-y-8">
						<div className="flex flex-row justify-start gap-16">
							<label className="w-40">Loại Kỳ Hàn</label>
							<div className="w-72">
								<Select variant="outlined" label="loại kỳ hạn">
									<Option>Không Kỳ Hạn</Option>
									<Option>3 Tháng</Option>
									<Option>6 Tháng</Option>
								</Select>
							</div>
						</div>
						<div className="flex flex-row justify-start gap-16">
							<label htmlFor="" className="w-40">
								Ngày gửi
							</label>
							<div className="w-72">
								<Input
									label="Khách Hàng"
									variant="outlined"
									type="date"
								/>
							</div>
						</div>
					</form>
				</CardBody>
			</Card>
			<div className=" w-4/5 h-[600px] my-4 flex flex-col justify-center ">
				<Typography
					variant={"h3"}
					className="text-center underline underline-offset-8 font-dancing font-thin"
				>
					Danh Sách ngày báo cáo
				</Typography>
				<Table />
			</div>
		</div>
	)
}

export default Report
