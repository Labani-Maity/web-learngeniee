import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchTestimonial = createAsyncThunk("fetchTestimonial", async () => {
    try {
        const res = await axios.get(`https://blogserver-for-student-only.onrender.com/api/testimonial`)
        return res?.data
    }
    catch (error) {
        console.log(error);
    }
})

const initialState={
    test_data:[],
    status:"success"
}

export const TestimonialSlice=createSlice({
    name:"testimonial",
    initialState,
    reducers:{


    },

    extraReducers:{
        [FetchTestimonial.pending]:(state)=>{
            state.status="loading...."
            state.test_data = null
        },
        [FetchTestimonial.fulfilled]:(state,{payload})=>{
            state.status="success"
            state.test_data = payload
        },
        [FetchTestimonial.rejected]:(state)=>{
            state.status="something went wrong...."
           
        }

    }
})