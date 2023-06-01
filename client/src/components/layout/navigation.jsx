import { NavLink, Outlet, useNavigate } from "react-router-dom"

import Footer from "./footer"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { BsFillPersonFill } from "react-icons/bs"

const Navigation = () => {
	const navigate = useNavigate()
	const isVerify = useSelector((store) => store.auth.success)
	console.log(isVerify)
	useEffect(() => {
		!isVerify && navigate("/")
	}, [])
	return (
		<div>
			<div className="w-full bg-[#d3e2f0] h-16 ">
				<div className=" container mx-auto px-4  grid grid-cols-12 h-full">
					<div className=" col-span-4">LOGO</div>
					<ul className="col-span-8 flex flex-row w-full gap-2 items-center justify-between ">
						<li className="hover:text-primary ">
							<NavLink
								to="deposit"
								className={" font-bold font-nunito text-xl "}
							>
								Phiếu gửi tiền
							</NavLink>
						</li>
						<li className="hover:text-primary">
							<NavLink
								to="customer"
								className={"font-bold font-nunito text-xl"}
							>
								Tra cứu sổ
							</NavLink>
						</li>
						<li className="hover:text-primary">
							<NavLink
								to="report"
								className={"font-bold font-nunito text-xl"}
							>
								Báo cáo
							</NavLink>
						</li>
						<li className="hover:text-primary">
							<NavLink
								to="LTK"
								className={"font-bold font-nunito text-xl"}
							>
								CÁC LOẠI SỔ TIẾT KIỆM{" "}
							</NavLink>
						</li>
						<li className="hover:text-primary">
							<NavLink
								className={"font-bold font-nunito text-xl"}
							>
								Tham Số
							</NavLink>
						</li>
						<button className="">
							<BsFillPersonFill className="text-5xl hover:bg-white hover:text-primary rounded-full p-1 " />
						</button>
					</ul>
				</div>
			</div>
			<Outlet />
			<Footer />
		</div>
	)
}

export default Navigation
