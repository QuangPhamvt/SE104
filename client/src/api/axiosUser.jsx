import axiosClient from "./axiosClient"

const axiosUser = {
	axiosLogin: (data) =>
		axiosClient.post("/user/login", {
			username: data.username,
			password: data.password,
		}),
	axiosVerify: () => axiosClient.get("/user"),
}

export default axiosUser
