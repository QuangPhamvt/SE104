import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import {
	Typography,
	Navbar,
	Card,
	List,
	ListItem,
} from "@material-tailwind/react"
import { BsFillPersonFill } from "react-icons/bs"
import Footer from "./footer"
const array = [
	{ name: "Phiếu Gửi Tiền", redirect: "deposit" },
	{ name: "Customer", redirect: "customer" },
	{ name: "Report", redirect: "report" },
	{ name: "Search", redirect: "search" },
]

const Navigation = () => {
	const navigate = useNavigate()
	const isVerify = useSelector((store) => store.auth.success)
	const [isShow, setIsShow] = useState(false)
	const refOne = useRef(null)

	useEffect(() => {
		if (!isVerify) return navigate("/")
	}, [])
	useEffect(() => {
		function closeDropDown(e) {
			if (!refOne.current.contains(e.target)) setIsShow(false)
		}
		document.body.addEventListener("click", closeDropDown)
		return () => document.body.removeEventListener("click", closeDropDown)
	}, [])
	return (
		<>
			<Navbar className=" relative mx-auto grid grid-cols-12 z-50">
				<div className="text-black col-span-5 text-center flex flex-row items-center">
					<span className="text-4xl font-bold font-dancing italic">
						Mami Nanami
					</span>
				</div>
				<ul className="flex flex-row gap-14 justify-end col-span-6 items-center">
					{array.map((state, index) => (
						<li key={index}>
							<NavLink
								to={state.redirect}
								className={({ isActive }) =>
									isActive ? `text-blue-800` : "text-black "
								}
							>
								<Typography variant="h4">
									{state.name}
								</Typography>
							</NavLink>
						</li>
					))}
				</ul>
				<div className="col-span-1 m-auto relative z-50" ref={refOne}>
					<button onClick={() => setIsShow((prev) => !prev)}>
						<BsFillPersonFill className="bg-black text-4xl rounded-full" />
					</button>
					{isShow && (
						<Card className="absolute top-10 -left-24 w-[260px] h-[200px] border-2 border-gray-200 p-4 shadow-2xl shadow-blue-gray-900/5 z-50">
							<List className="w-52">
								<ListItem>Profile</ListItem>
								<ListItem>Settings</ListItem>
								<ListItem>Log Out</ListItem>
							</List>
						</Card>
					)}
				</div>
			</Navbar>
			<Outlet />
			<Footer />
		</>
	)
}

export default Navigation
