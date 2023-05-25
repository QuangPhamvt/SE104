import { configureStore } from "@reduxjs/toolkit";
import depositReducer from "./deposit/depositSlice";


const store = configureStore({
    reducer: {
        deposit: depositReducer,
    }
})


export default store