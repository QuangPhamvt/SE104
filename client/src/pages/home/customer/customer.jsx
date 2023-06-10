import { Button, Input, Option, Select } from "@material-tailwind/react"

const CustomerCard = () => {
	return (
		<main className="  h-full flex flex-col items-center gap-6">
			<h1 className="mt-[40px] font-dancing text-primary select-none">
				Khách Hàng
			</h1>
			<form
				action=""
				className=" border-2 h-[400px] w-[800px] flex flex-col gap-4 p-11 rounded-3xl bg-[#D7F9FA] hover:shadow-lg"
			>
				<div className="w-full flex  items-center">
					<label htmlFor="LTK" className=" w-60 text-xl font-bold">
						Họ Tên
					</label>
					<div className="w-72">
						<Input
							type="text"
							variant="outlined"
							label="Ngày sinh"
						/>
					</div>
				</div>

				<div className="w-full flex  items-center">
					<label
						htmlFor="Customer"
						className=" w-60 text-xl font-bold"
					>
						Chứng Minh Nhân Dân
					</label>
					<div>
						<Input variant="outlined" label="CMND" type="text" />
					</div>
				</div>
				<div className="flex flex-row flex-wrap gap-y-4 gap-x-12 mt-2">
					<div className="w-[320px] flex flex-row items-center justify-between">
						<label htmlFor="Money" className=" w-[400px] font-bold">
							Địa Chỉ
						</label>
						<div>
							<Input
								variant="outlined"
								label="Address"
								type="text"
							/>
						</div>
					</div>

					<div className="w-[320px] flex flex-row items-center">
						<label htmlFor="Money" className=" w-60 font-bold">
							Tuổi
						</label>
						<div>
							<Input variant="outlined" label="Age" type="text" />
						</div>
					</div>

					<div className="w-[320px] flex flex-row items-center">
						<label htmlFor="Money" className=" w-60 font-bold">
							Ngày Sinh
						</label>
						<div>
							<Input
								variant="outlined"
								label="BirthDay"
								type="date"
							/>
						</div>
					</div>

					<div className="w-[320px] flex flex-row items-center">
						<label htmlFor="Money" className=" w-60 font-bold">
							Số Điện Thoại
						</label>
						<div>
							<Input variant="outlined" label="SDT" type="text" />
						</div>
					</div>

					<div className="w-[320px] flex flex-row items-center">
						<label htmlFor="Money" className=" w-60 font-bold">
							Giới tính
						</label>
						<div>
							<Select variant="standard" label="Giới tính">
								<Option>male</Option>
								<Option>female</Option>
							</Select>
						</div>
					</div>
				</div>

				<div className="flex flex-row-reverse gap-5">
					<Button variant="outlined" color="red">
						HỦY
					</Button>
					<Button variant="gradient">XÁC NHẬN</Button>
				</div>
			</form>
		</main>
	)
}

export default CustomerCard
