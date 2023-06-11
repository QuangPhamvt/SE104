import { Select, Option, Input, Button } from "@material-tailwind/react"

function DepositForm() {
	return (
		<form
			action=""
			className=" border-2 h-[400px] w-[800px] flex flex-col gap-12 p-11 rounded-3xl bg-[#D7F9FA] hover:shadow-lg"
		>
			<div className="w-full flex items-center">
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
				<label htmlFor="Customer" className=" w-60 text-xl font-bold">
					Người gửi
				</label>
				<div>
					<Input variant="outlined" label="Người gửi" type="text" />
				</div>
			</div>

			<div className="w-full flex items-center">
				<label htmlFor="Money" className=" w-60 text-xl font-bold">
					Số Tiền gửi
				</label>
				<div>
					<Input variant="outlined" label="Số tiền" type="number" />
				</div>
			</div>

			<div className="flex flex-row-reverse gap-5">
				<Button variant="outlined" color="red">
					HỦY
				</Button>
				<Button variant="gradient">XÁC NHẬN</Button>
			</div>
		</form>
	)
}

export default DepositForm
