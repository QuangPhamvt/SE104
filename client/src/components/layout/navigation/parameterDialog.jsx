import {
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
	DialogHeader,
	Typography,
} from "@material-tailwind/react"
import { Fragment, useState } from "react"

function ParameterDialog({ name }) {
	console.log(name)
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(!open)
	return (
		<Fragment>
			<Typography onClick={handleOpen} variant="h6" className="w-full">
				{name}
			</Typography>
			<Dialog open={open}>
				<DialogHeader>Its a simple dialog.</DialogHeader>
				<DialogBody divider>
					The key to more success is to have a lot of pillows. Put it
					this way, it took me twenty five years to get these plants,
					twenty five years of blood sweat and tears, and I&apos;m
					never giving up, I&apos;m just getting started. I&apos;m up
					to something. Fan luv.
				</DialogBody>
				<DialogFooter>
					<Button
						variant="text"
						color="red"
						onClick={handleOpen}
						className="mr-1"
					>
						<span>Cancel</span>
					</Button>
					<Button
						variant="gradient"
						color="green"
						onClick={handleOpen}
					>
						<span>Confirm</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</Fragment>
	)
}

export default ParameterDialog
