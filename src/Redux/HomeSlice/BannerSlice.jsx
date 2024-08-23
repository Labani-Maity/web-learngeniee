import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchBanner = createAsyncThunk("fetchBanner", async () => {
    try {
        const result = await axios.get(`https://blogserver-for-student-only.onrender.com/api/banner`)
        return result?.data

    } catch (error) {
        console.log(error);
    }
})


const initialState={
    banner_data:[],    
    status:"success"

}

export const BannerSlice = createSlice({
    name:"banner",
    initialState,
    reducers:{

    },
    extraReducers:{
        [FetchBanner.pending]:(state)=>{
            state.status="loading...."
            state.banner_data=null
        },
        [FetchBanner.fulfilled]:(state,{payload})=>{
            state.status="success"
            state.banner_data=payload
        },
        [FetchBanner.rejected]:(state)=>{
            state.status="something went wrong...."
           
        },
        
    }
})