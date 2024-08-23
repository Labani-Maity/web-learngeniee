import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchPost = createAsyncThunk("fetchPostData", async () => {
    try {
        const result = await axios.get(`https://blogserver-for-student-only.onrender.com/api/letest-post`)
        return result?.data

    } 
    catch (error) {
            console.log(error);
        }
    })


    const initialState={
        post_data:[],
        status:"success"

    }

    export const RecentPostSlice = createSlice({
       name:"recentPost",
       initialState,
       reducer:{

       },
       extraReducers:{
        [FetchPost.pending]:(state)=>{
            state.status="loading......."
            state.post_data=null
        },
        [FetchPost.fulfilled]:(state,{payload})=>{
            state.status="success"
            state.post_data=payload
        },
        [FetchPost.pending]:(state)=>{
            state.status="somthing went wrong......."
           
        }

       }
    })