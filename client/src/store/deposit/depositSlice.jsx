import { createSlice } from "@reduxjs/toolkit";
import { getAllCustomerDeposit, getAllDeposit } from "./depositThunk";

const initialState = {
    data:[],
    success: false,
    message: "",
}
const depositSlice = createSlice({
    name: "deposit",
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        // Lấy tất cả các phiếu
        builder.addCase(getAllDeposit.fulfilled, (state, action) => {
            console.log(action.payload);
            state.data = action.payload.data
            state.message = action.payload.message
            state.success = true
        })
        // Lấy tất cả các phiểu của một người
        builder.addCase(getAllCustomerDeposit.fulfilled, (state, action) => {
            console.log(action.payload);
            state.data = action.payload.data
            state.message = action.payload.message
            state.success = true
        })
        builder
    }
})
const depositReducer = depositSlice.reducer
export default depositReducer