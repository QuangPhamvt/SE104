import React from "react"
import Footer from "../components/layout/footer"

function Home() {
	return (
		<>
			<div className=" container mx-auto px-9 h-[600px]">
				<div className=" grid grid-cols-2 mt-40">
					<div className="mt-14 ml-16">
						<span className="text-7xl">NGÂN HÀNG CUSTOMAFK</span>
						<br />
						<br />
						<span className="text-3xl italic font-dancing">
							"Mang phồn thịnh đến với khách hàng"
						</span>
					</div>
					<div className=" m-10 border-2 bg-[#87C1CD] rounded-xl shadow-2xl">
						<form action="" className=" m-14 flex flex-col gap-9">
							<input
								type="text"
								name=""
								className=" h-12 pl-6 rounded-lg text-xl"
								placeholder="Tên đăng nhập"
							/>
							<input
								type="password"
								name=""
								className=" h-12 pl-6 rounded-lg text-xl"
								placeholder="password"
							/>
							<button className=" bg-primary mx-16 h-14 rounded-2xl text-2xl text-white font-bold">
								ĐĂNG NHẬP
							</button>
						</form>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	)
}

export default Home
