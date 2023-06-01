import { configureStore } from "@reduxjs/toolkit"
import depositReducer from "./deposit/depositSlice"
import userReducer from "./auth/userSlice"

const store = configureStore({
	reducer: {
		deposit: depositReducer,
		auth: userReducer,
	},
})

export default store
