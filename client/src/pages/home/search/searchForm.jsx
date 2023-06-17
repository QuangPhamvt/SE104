import {
	Card,
	CardBody,
	CardHeader,
	Typography,
	Button,
	Input,
	Radio,
} from "@material-tailwind/react"
import { useDispatch } from "react-redux"
import { postSearchDeposit } from "../../../store/deposit/depositThunk"
import useForm from "../../../hooks/useForm"

const array = ["Không Kỳ Hạn", "3 Tháng", "6 Tháng"]
const array_form = [
	{ label: "Khách Hàng", type: "text", name: "HoTenKhachHang" },
	{ label: "Số Điện Thoại", type: "number", name: "SDT" },
	{ label: "CMND/CCCD", type: "text", name: "CMND" },
	{ label: "Ngày Gửi", type: "date", name: "NgayMoSo" },
]
function SearchForm() {
	const dispatch = useDispatch()
	const [input, handleChange, handleSubmit, reset] = useForm(
		{
			LTK: "",
			HoTenKhachHang: "",
			SDT: "",
			CMND: "",
			NgayMoSo: "",
		},
		(object) => {
			console.log(object)
			dispatch(postSearchDeposit(object))
		}
	)
	return (
		<Card className="mt-10 w-3/4 items-center">
			<CardHeader className="w-52 text-center">
				<Typography variant="h2">Tìm Kiếm</Typography>
			</CardHeader>
			<CardBody className="w-full">
				<form className="flex flex-col gap-y-8" onSubmit={handleSubmit}>
					<div className="flex flex-row justify-start gap-16">
						<label className=" w-40 text-justify pt-2">
							Loại Tiết Kiệm
						</label>
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
					{array_form.map((state, index) => {
						return (
							<div
								className="flex flex-row justify-start gap-16"
								key={index}
							>
								<label htmlFor="" className="w-40 ">
									{state.label}
								</label>
								<div className="w-[600px]">
									<Input
										label={state.label}
										variant="outlined"
										type={state.type}
										name={state.name}
										value={input[state.name]}
										onChange={handleChange}
									/>
								</div>
							</div>
						)
					})}
					<div className="flex flex-row justify-end gap-x-8 mr-8">
						<Button variant="gradient" type="submit">
							Xác Nhận
						</Button>
						<Button
							variant="outlined"
							color="red"
							onClick={reset}
							type="reset"
						>
							Huy
						</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)
}

export default SearchForm
