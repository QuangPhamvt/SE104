import useForm from "../hooks/useForm"
import Footer from "../components/layout/footer"
import { useDispatch, useSelector } from "react-redux"
import { getVerifyUser, postLoginUser } from "../store/auth/userThunk"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Landing() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	let isVerify = false
	isVerify = useSelector((store) => store.auth.success.verify)
	const [input, handleChange, handleSubmit] = useForm(
		{
			username: "",
			password: "",
		},
		(input) => {
			dispatch(postLoginUser(input))
		}
	)
	useEffect(() => {
		dispatch(getVerifyUser())
		isVerify && navigate("/home")
	}, [isVerify])

	return (
		<>
			<div className=" container mx-auto px-9 h-[600px]">
				<div className=" grid grid-cols-2 mt-40">
					<div className="mt-14 ml-12">
						<span className="text-7xl font-bold text-primary">
							NGÂN HÀNG CUSTOMAFK
						</span>
						<br />
						<br />
						<span className="text-3xl italic font-dancing">
							<p>
								&quot; Mang phồn thịnh đến với khách hàng &quot;
							</p>
						</span>
					</div>
					<div className=" m-10 border-2 bg-[#87C1CD] rounded-xl shadow-2xl">
						<form
							onSubmit={handleSubmit}
							action=""
							className=" m-14 flex flex-col gap-9"
						>
							<input
								onChange={handleChange}
								type="text"
								name="username"
								value={input.username}
								className=" h-12 pl-6 rounded-lg text-xl"
								placeholder="Tên đăng nhập"
							/>
							<input
								onChange={handleChange}
								type="password"
								name="password"
								value={input.password}
								className=" h-12 pl-6 rounded-lg text-xl"
								placeholder="password"
							/>
							<button
								type="submit"
								className=" bg-primary mx-16 h-14 rounded-2xl text-2xl text-white font-bold"
							>
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

export default Landing
