import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { putDeleteDeposit } from "../../../store/deposit/depositThunk"

// eslint-disable-next-line react/prop-types
export default function DialogForm({ id }) {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(!open)
	const dispatch = useDispatch()
	const handleDeleteDeposit = () => {
		dispatch(putDeleteDeposit(id))
		setOpen(!open)
	}
	return (
		<>
			<Button onClick={handleOpen} variant="gradient">
				{id}
			</Button>
			<Dialog open={open} handler={handleOpen}>
				<DialogHeader>"Rút Tiền"</DialogHeader>
				<DialogBody divider>Bạn chắc chắn muốn rút chứ</DialogBody>
				<DialogFooter>
					<Button
						variant="text"
						color="red"
						onClick={handleOpen}
						className="mr-1"
					>
						<span>Hủy yêu cầu</span>
					</Button>
					<Button
						variant="gradient"
						color="green"
						onClick={handleDeleteDeposit}
					>
						<span>XÓA</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	)
}
