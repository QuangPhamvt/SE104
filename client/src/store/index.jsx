import { configureStore } from "@reduxjs/toolkit"
import depositReducer from "./deposit/depositSlice"
import userReducer from "./auth/userSlice"
import customerReducer from "./customer/customerSlice"

const store = configureStore({
	reducer: {
		deposit: depositReducer,
		auth: userReducer,
		customer: customerReducer,
	},
})

export default store
