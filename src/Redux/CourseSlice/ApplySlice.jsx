import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const ApplyCourse = createAsyncThunk('Course/Apply', async (data) => {
    try {
        console.log(data.course_name)
        const response = await axios.post(`'https://blogserver-for-student-only.onrender.com/api/course/apply/${data.course}`, data)
        const responseData = {
            resp: response?.data,
            coursename: data?.course_name
        }
        return responseData
    } catch (e) {
        return e.response.data
    }
})


const initialState={
    apply_data:[],
    status:"success"
}

export const ApplySlice = createSlice({
    name:"apply",
    initialState,
    reducers:{


    },

    extraReducers:{
        
        [ApplyCourse.pending]:(state)=>{
            state.status="loading...."
            state.apply_data = null
        },

        [ApplyCourse.fulfilled]:(state,{payload})=>{
            state.status="success"
            state.apply_data = payload
            toast.success(`Apply for ${payload?.coursename} course is successfull`)

        },

        [ApplyCourse.rejected]:(state)=>{
            state.status="something went wrong...."
           
        }

    }
})

