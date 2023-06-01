import { createSlice } from "@reduxjs/toolkit"
import { getVerifyUser, postLoginUser } from "./userThunnk"

const initialState = {
	success: false,
	message: "",
}
const userSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(postLoginUser.fulfilled, (state, action) => {
			state.success = action.payload.success
			state.message = action.payload.message
		})
		builder.addCase(getVerifyUser.fulfilled, (state, action) => {
			state.success = action.payload.success
			state.message = action.payload.message
		})
	},
})

const userReducer = userSlice.reducer

export default userReducer
