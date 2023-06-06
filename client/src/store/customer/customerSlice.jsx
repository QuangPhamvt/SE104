import { createSlice } from "@reduxjs/toolkit"
import { getCustomer } from "./customerThunk"

const initialState = {
	data: [],
	success: false,
	message: "",
}

const customerSlice = createSlice({
	name: "customer",
	initialState,
	reducers: {},
	extraReducers: (build) => {
		build.addCase(getCustomer.fulfilled, (state, action) => {
			state.data = action.payload.data
			state.success = action.payload.success
		})
	},
})

const customerReducer = customerSlice.reducer
export default customerReducer
