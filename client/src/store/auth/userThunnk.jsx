import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosUser from "../../api/axiosUser"

const { axiosLogin, axiosLogout, axiosVerify } = axiosUser
export const postLoginUser = createAsyncThunk(
	"auth/login",
	async function (data) {
		try {
			console.log(data)
			return await axiosLogin(data)
		} catch (error) {
			console.log(error.message)
		}
	}
)

export const getVerifyUser = createAsyncThunk("auth/verify", async function () {
	try {
		return await axiosVerify()
	} catch (error) {
		console.log(error.message)
	}
})

export const getLogoutUser = createAsyncThunk("auth/logout", async function () {
	try {
		return await axiosLogout()
	} catch (error) {
		console.log(error.message)
	}
})
