import {
	Button,
	Card,
	CardBody,
	Dialog,
	DialogBody,
	DialogFooter,
	DialogHeader,
	Input,
	Typography,
} from "@material-tailwind/react"

import { Fragment, useState } from "react"
import useForm from "../../../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { postCreateUser } from "../../../../store/auth/userThunk"
function CreateUserDialog({ name }) {
	const dispatch = useDispatch()
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen((cur) => !cur)
	const success = useSelector((store) => store.auth.success.postCreateUser)
	const message = useSelector((store) => store.auth.message.postCreateUser)

	const [input, handleChange, handleSubmit] = useForm(
		{
			username: "",
			password: "",
			TenNhom: "",
		},
		(object) => {
			console.log(object)
			dispatch(postCreateUser(object))
		}
	)

	return (
		<Fragment>
			<Typography
				onClick={handleOpen}
				variant="h6"
				className="w-full h-full p-2"
			>
				{name}
			</Typography>
			<Dialog
				size="xs"
				open={open}
				handler={handleOpen}
				className="bg-transparent shadow-none"
			>
				<Card className="mx-auto max-w-[24rem] h-[400px] flex flex-col items-center">
					<Typography variant="h3" color="blue-gray" className="mt-4">
						Sign Up
					</Typography>
					<CardBody>
						<form
							className="mt-8 mb-2 w-80"
							onSubmit={handleSubmit}
							id="form"
							onKeyDown={(event) => {
								if (event.key === "Tab") {
									event.stopPropagation()
									console.log("Tab")
								}
							}}
						>
							<div className="mb-4 flex flex-col gap-6">
								<Input
									size="lg"
									label="Username"
									name={"username"}
									value={input.username || ""}
									onChange={handleChange}
								/>
								<Input
									type="password"
									size="lg"
									label="Password"
									name={"password"}
									value={input.password || ""}
									onChange={handleChange}
								/>
								<Input
									type="text"
									size="lg"
									label="Tên Nhóm"
									name={"TenNhom"}
									value={input.TenNhom || ""}
									onChange={handleChange}
								/>
							</div>
							<Button
								className={`mt-6  ${
									success ? "" : " border-red-200 border-4"
								}`}
								fullWidth
								type="submit"
							>
								Register
							</Button>
							{success ? (
								<span className="text-blue-300">
									Tạo Thành Công
								</span>
							) : (
								<span className="text-red-300">Thất bại</span>
							)}
						</form>
					</CardBody>
				</Card>
			</Dialog>
		</Fragment>
	)
}

export default CreateUserDialog
