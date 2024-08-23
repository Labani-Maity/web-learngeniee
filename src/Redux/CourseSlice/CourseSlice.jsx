import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchCourse = createAsyncThunk("fetchCourse",async()=>{
    try {
        const res = await axios.get(`https://blogserver-for-student-only.onrender.com/api/course`)
        return res?.data
    }
    catch (error) {
        console.log(error);
    }
})

const initialState={
    course_data:[],
    status:"success"
}

export const CourseSlice = createSlice({
    name:"course",
    initialState,
    reducers:{


    },

    extraReducers:{
        
        [FetchCourse.pending]:(state)=>{
            state.status="loading...."
            state.course_data = null
        },

        [FetchCourse.fulfilled]:(state,{payload})=>{
            state.status="success"
            state.course_data = payload
        },

        [FetchCourse.rejected]:(state)=>{
            state.status="something went wrong...."
           
        }

    }
})