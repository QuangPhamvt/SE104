import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Input,
	Radio,
	Button,
} from "@material-tailwind/react"
import useForm from "../../../hooks/useForm"
import { getReport } from "../../../store/report/reportThunk"
import { useDispatch } from "react-redux"

const array = ["Không Kỳ Hạn", "3 Tháng", "6 Tháng"]
function ReportForm() {
	const dispatch = useDispatch()
	const [input, handleChange, handleSubmit, reset] = useForm(
		{
			LTK: "",
			NgayBaoCao: "",
		},
		(object) => {
			dispatch(getReport(object))
		}
	)
	return (
		<Card className="mt-10 w-3/4 items-center">
			<CardHeader className=" w-96 text-center">
				<Typography variant="h2">Báo cáo doanh số</Typography>
			</CardHeader>
			<CardBody className="w-full">
				<form className="flex flex-col gap-y-8" onSubmit={handleSubmit}>
					<div className="flex flex-row justify-start gap-16">
						<label className="w-40 pt-2">Loại Kỳ Hàn</label>
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
							Ngày gửi
						</label>
						<div className="w-72">
							<Input
								label="Khách Hàng"
								variant="outlined"
								type="date"
								name="NgayBaoCao"
								value={input.NgayBaoCao}
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

export default ReportForm
