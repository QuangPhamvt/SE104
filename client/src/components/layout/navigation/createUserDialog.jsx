import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Dialog,
	Input,
	Typography,
} from "@material-tailwind/react"

import { Fragment, useState } from "react"

function CreateUserDialog({ name }) {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen((cur) => !cur)

	return (
		<Fragment>
			<Typography onClick={handleOpen} variant="h6" className="w-full">
				{name}
			</Typography>
			<Dialog
				size="xs"
				open={open}
				handler={handleOpen}
				className="bg-transparent shadow-none"
			>
				<Card className="mx-auto w-full max-w-[24rem]">
					<CardHeader
						variant="gradient"
						className="mb-4 grid h-28 place-items-center bg-blue-100"
					>
						<Typography variant="h3" color="white">
							Tạo Tài Khoản
						</Typography>
					</CardHeader>
					<CardBody className="flex flex-col gap-4">
						<Input label="Email" size="lg" />
						<Input label="Password" size="lg" />
					</CardBody>
					<CardFooter className="pt-0">
						<Button
							variant="gradient"
							onClick={handleOpen}
							fullWidth
						>
							Sign In
						</Button>
						<Typography
							variant="small"
							className="mt-6 flex justify-center"
						>
							Don&apos;t have an account?
							<Typography
								variant="small"
								color="blue"
								className="ml-1 font-bold"
								onClick={handleOpen}
							>
								Sign up
							</Typography>
						</Typography>
					</CardFooter>
				</Card>
			</Dialog>
		</Fragment>
	)
}

export default CreateUserDialog
