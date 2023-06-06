import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosCustomer from "../../api/axiosCustomer"

export const getCustomer = createAsyncThunk(
	"customer/getCustomer",
	async function (id) {
		try {
			return await axiosCustomer.axiosGetCustomer(id)
		} catch (error) {
			console.log(error.message)
		}
	}
)
