import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Input,
	Radio,
	Typography,
} from "@material-tailwind/react"
import Table from "./table"
import useForm from "../../../hooks/useForm"
import { useDispatch } from "react-redux"
import { postSearchDeposit } from "../../../store/deposit/depositThunk"
const array = ["Không Kỳ Hạn", "3 Tháng", "6 Tháng"]
function Search() {
	const dispatch = useDispatch()
	const [input, handleChange, handleSubmit, reset] = useForm(
		{
			LTK: "",
			CMND: "",
			NgayMoSo: "",
		},
		(input) => {
			dispatch(postSearchDeposit(input))
		}
	)
	return (
		<div className="flex flex-col items-center bg-[#C1EAF2] border-x-2">
			<Card className="mt-10 w-3/4 items-center">
				<CardHeader className="w-52 text-center">
					<Typography variant="h2">Tìm Kiếm</Typography>
				</CardHeader>
				<CardBody className="w-full">
					<form
						action=""
						className="flex flex-col gap-y-8"
						onSubmit={handleSubmit}
					>
						<div className="flex flex-row justify-start gap-16">
							<label className="w-40">Loại Kỳ Hàn</label>
							<div
								className="w-[600px] flex flex-row gap-x-10"
								onChange={handleChange}
							>
								{array.map((state, index) => (
									<Radio
										key={index}
										id={index}
										name="LTK"
										value={state}
										label={state}
									/>
								))}
							</div>
						</div>
						<div className="flex flex-row justify-start gap-16">
							<label htmlFor="" className="w-40">
								Khách Hàng
							</label>
							<div className="w-[600px]">
								<Input
									label="Khách Hàng"
									variant="outlined"
									type="text"
									name="CMND"
									value={input.CMND}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="flex flex-row justify-start gap-16">
							<label htmlFor="" className="w-40">
								Ngày gửi
							</label>
							<div className="w-[600px]">
								<Input
									label="Khách Hàng"
									variant="outlined"
									type="date"
									name="NgayMoSo"
									value={input.NgayMoSo}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="flex flex-row justify-end gap-x-8 mr-8">
							<Button variant="gradient" type="submit">
								Xác Nhận
							</Button>
							<Button
								variant="outlined"
								color="red"
								onClick={reset}
							>
								Huy
							</Button>
						</div>
					</form>
				</CardBody>
			</Card>
			<div className=" w-4/5 h-[600px] my-4 flex flex-col justify-center ">
				<Typography
					variant={"h3"}
					className="text-center underline underline-offset-8 font-dancing font-thin"
				>
					Danh sách phiếu gửi tiền
				</Typography>
				<Table />
			</div>
		</div>
	)
}

export default Search
