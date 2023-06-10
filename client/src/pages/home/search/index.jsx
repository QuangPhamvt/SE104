import {
	Card,
	CardBody,
	CardHeader,
	Option,
	Select,
	Typography,
} from "@material-tailwind/react"
function Search() {
	return (
		<div className="flex flex-col items-center bg-red-200">
			<Card className="mt-10 w-3/4 items-center">
				<CardHeader className="w-52 text-center">
					<Typography variant="h2">Tìm Kiếm</Typography>
				</CardHeader>
				<CardBody className="w-full">
					<form action="">
						<div>
							<label>Loại Kỳ Hàn</label>
							<Select variant="outlined" label="loại kỳ hạn">
								<Option>Không Kỳ Hạn</Option>
								<Option>3 Tháng</Option>
								<Option>6 Tháng</Option>
							</Select>
						</div>
					</form>
				</CardBody>
			</Card>
		</div>
	)
}

export default Search
