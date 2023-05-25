import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosDeposit from "../../api/axiosDeposit";

//thêm tất cả các phiếu 
export const getAllDeposit = createAsyncThunk(
    'deposit/getAllDeposit',
    async function(){
        try {
            return await axiosDeposit.axiosGetAllDeposit()
        } catch (error) {
            return error.message
        }
    }
)

//thêm tất cả các phiếu của khách hàng 
export const getAllCustomerDeposit = createAsyncThunk(
    'deposit/getAllCustomerDeposit',
    async function(CMND){
        try {
            return await axiosDeposit.axiosGetAllCustomerDeposit(CMND)
        } catch (error) {
            console.log(error.message);
        }
    }
)
//Update lại số tiền
export const getUpdateDeposit = createAsyncThunk(
    'deposit/getUpdateDepost',
    async function(){
        try {
            await axiosDeposit.axiosGetUpdateDeposit()
        } catch (error) {
            console.log(error.message);
        }
    }
)