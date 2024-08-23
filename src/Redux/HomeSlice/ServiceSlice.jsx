import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const FetchService = createAsyncThunk("fetchService", async () => {
    try {
        const result = await axios.get(`https://blogserver-for-student-only.onrender.com/api/service`)
        return result?.data

    } catch (error) {
        console.log(error);
    }
})


const initialState={
    service_data:[],    
    status:"success"

}


export const ServiceSlice = createSlice({
    name:"service",
    initialState,
    reducers:{

    },

    extraReducers:{

        [FetchService.pending]:(state)=>{
            state.status="loading...."
            state.service_data = null
        },
        [FetchService.fulfilled]:(state,{payload})=>{
            state.status="success"
            state.service_data = payload
        },
        [FetchService.rejected]:(state)=>{
            state.status="something went wrong...."
           
        }

    }
})