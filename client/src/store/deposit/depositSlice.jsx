import { createSlice } from "@reduxjs/toolkit"
import {
	getAllCustomerDeposit,
	getAllDeposit,
	postCreateDeposit,
	postSearchDeposit,
} from "./depositThunk"

const initialState = {
	data: [],
	success: {
		getAllCustomerDeposit: false,
		postCreateDeposit: false,
		postSearchDeposit: false,
	},
	message: {
		getAllCustomerDeposit: "",
		postCreateDeposit: "",
		postSearchDeposit: "",
	},
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
		// Lấy phiếu theo search
		builder.addCase(postSearchDeposit.fulfilled, (state, action) => {
			console.log(`deposit/postSearchDeposit: ${action.payload.message}`)
			state.data = action.payload.data
			state.message.postSearchDeposit = action.payload.message
			state.success.postSearchDeposit = action.payload.success
		})
		// Lấy tất cả các phiểu của một người
		builder.addCase(getAllCustomerDeposit.fulfilled, (state, action) => {
			console.log(
				`deposit/getAllCustomerDeposit: ${action.payload.message}`
			)
			state.data = action.payload.data
			state.message.getAllCustomerDeposit = action.payload.message
			state.success.getAllCustomerDeposit = action.payload.success
		})
		// TẠo phiếu mới cho một người
		builder.addCase(postCreateDeposit.fulfilled, (state, action) => {
			console.log(`deposit/postCreateDeposit: ${action.payload.message}`)
			state.success.postCreateDeposit = action.payload.success
			state.message.postCreateDeposit = action.payload.message
		})
	},
})
const depositReducer = depositSlice.reducer
export default depositReducer
