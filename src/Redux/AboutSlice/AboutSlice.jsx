import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchAbout= createAsyncThunk("fetchAbout",async()=>{
    try {
        const res = await axios.get(`https://blogserver-for-student-only.onrender.com/api/team`)
        return res?.data
    }
    catch (error) {
        console.log(error);
    }
}) 

const initialState={
   our_team:[],
   status:"success"

}

export const AboutSlice=createSlice({
    name:"about",
    initialState,
    reducers:{


    },

    extraReducers:{
        [FetchAbout.pending]:(state)=>{
            state.status="loading...."
            state.our_team = null
        },
        [FetchAbout.fulfilled]:(state,{payload})=>{
            state.status="success"
            state.our_team = payload
        },
        [FetchAbout.rejected]:(state)=>{
            state.status="something went wrong...."
           
        }

    }
})