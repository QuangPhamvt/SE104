const Deposit = () => {
	return (
		<div className="h-[800px] container mx-auto px-2 ">
			<div className="grid grid-cols-3 h-full">
				<main className=" col-span-2 h-full flex flex-col items-center gap-6">
					<h1 className="mt-[40px] font-dancing">Phiếu Gửi Tiền</h1>
					<form
						action=""
						className=" border-2 h-[600px] w-[800px] flex flex-col gap-12 p-11 rounded-3xl bg-[#D7F9FA]"
					>
						<div className="w-full flex items-center">
							<div className="w-[200px]">
								<label
									htmlFor="LTK"
									className="text-xl font-bold"
								>
									Mã Loại Tiết Kiệm
								</label>
							</div>
							<select
								name=""
								id="LTK"
								className="w-[320px] rounded-lg h-[40px] "
							>
								<option value="Không Kỳ Hạn">
									Không Kỳ Hạn
								</option>
								<option value="3 Tháng">3 Tháng</option>
								<option value="6 Tháng">6 Tháng</option>
							</select>
						</div>

						<div className="w-full flex items-center">
							<div className="w-[200px]">
								<label
									htmlFor="Customer"
									className="w-[40px] text-xl font-bold"
								>
									Người gửi
								</label>
							</div>
							<input
								type="text"
								id="Customer"
								className="w-[320px] rounded-lg h-[40px] focus:outline-none pl-2"
							/>
						</div>

						<div className="w-full flex items-center">
							<div className="w-[200px]">
								<label
									htmlFor="Money"
									className="w-[40px] text-xl font-bold"
								>
									Số Tiền gửi
								</label>
							</div>
							<input
								type="number"
								id="Money"
								className="w-[320px] rounded-lg h-[40px] focus:outline-none pl-2"
							/>
						</div>

						<div>
							<label htmlFor=""></label>
							<input type="text" />
						</div>
					</form>
				</main>
				<div className=" col-span-1 border-l-2 h-[720px] my-[40px] pl-8">
					<div className=" mt-5 mx-8 bg-red-200 h-[700px] rounded-3xl">
						asdasdas
					</div>
				</div>
			</div>
		</div>
	)
}

export default Deposit
