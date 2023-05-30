import { createSlice } from "@reduxjs/toolkit"
import {
	getAllCustomerDeposit,
	getAllDeposit,
	postCreateDeposit,
} from "./depositThunk"

const initialState = {
	data: [],
	success: false,
	message: "",
}
const depositSlice = createSlice({
	name: "deposit",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Lấy tất cả các phiếu
		builder.addCase(getAllDeposit.fulfilled, (state, action) => {
			console.log(`deposit/getAllDeposit: ${action.payload.message}`)
			state.data = action.payload.data
			state.message = action.payload.message
			state.success = true
		})
		// Lấy tất cả các phiểu của một người
		builder.addCase(getAllCustomerDeposit.fulfilled, (state, action) => {
			console.log(
				`deposit/getAllCustomerDeposit: ${action.payload.message}`
			)
			state.data = action.payload.data
			state.message = action.payload.message
			state.success = true
		})
		// TẠo phiếu mới cho một người
		builder.addCase(postCreateDeposit.fulfilled, (state, action) => {
			console.log(`deposit/postCreateDeposit: ${action.payload.message}`)
			state.success = action.payload.success
			state.message = action.payload.message
		})
	},
})
const depositReducer = depositSlice.reducer
export default depositReducer
