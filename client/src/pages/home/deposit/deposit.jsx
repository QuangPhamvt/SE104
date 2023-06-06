import {
	Select,
	Option,
	Card,
	CardBody,
	CardHeader,
	Typography,
	Button,
	Input,
} from "@material-tailwind/react"

function DepositCard() {
	return (
		<main className=" col-span-2 h-full flex flex-col items-center gap-6">
			<h1 className="mt-[40px] font-dancing text-primary select-none">
				Phiếu Gửi Tiền
			</h1>
			<form
				action=""
				className=" border-2 h-[400px] w-[800px] flex flex-col gap-12 p-11 rounded-3xl bg-[#D7F9FA] hover:shadow-lg"
			>
				<div className="w-full flex  items-center">
					<label htmlFor="LTK" className=" w-60 text-xl font-bold">
						Mã Loại Tiết Kiệm
					</label>
					<div className="w-72">
						<Select variant="outlined" label="Mã loại">
							<Option>Không Kỳ Hạn</Option>
							<Option>3 Tháng</Option>
							<Option>6 Tháng</Option>
						</Select>
					</div>
				</div>

				<div className="w-full flex  items-center">
					<label
						htmlFor="Customer"
						className=" w-60 text-xl font-bold"
					>
						Người gửi
					</label>
					<div>
						<Input
							variant="outlined"
							label="Người gửi"
							type="text"
						/>
					</div>
				</div>

				<div className="w-full flex flex-row items-center">
					<label htmlFor="Money" className=" w-60 text-xl font-bold">
						Số Tiền gửi
					</label>
					<div>
						<Input
							variant="outlined"
							label="Số tiền"
							type="number"
						/>
					</div>
				</div>

				<div className="flex flex-row-reverse gap-5">
					<Button variant="outlined" color="red">
						HỦY
					</Button>
					<Button variant="gradient">XÁC NHẬN</Button>
				</div>
			</form>
			<Card className="mt-10 w-[800px] h-[200px] bg-[#D7F9FA] hover:shadow-xl items-center">
				<CardHeader className=" text-center w-52">
					<h2 className=" font-bold font-nunito">KHÁCH HÀNG</h2>
				</CardHeader>
				<CardBody className="flex flex-col gap-4 pt-2 w-full">
					<Typography className="font-bold">
						Họ Tên Khách Hàng:{" "}
					</Typography>
					<Typography>Ngày tháng năm sinh:</Typography>
					<Typography>Chứng Minh Nhân Dân: </Typography>
					<Typography>Địa Chỉ: </Typography>
				</CardBody>
			</Card>
		</main>
	)
}

export default DepositCard
