import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchPostDetails = createAsyncThunk("fetchPostDetails", async (id) => {

    try {
        const result = await axios.get(`https://blogserver-for-student-only.onrender.com/api/blogdetails/${id}`)
        return result?.data?.data
    }
    catch (error) {
        console.log(error);
    }
})

const initialState = {
    post_detail: [],
    status: "success"

}

export const PostDetailsSlice = createSlice({
    name: "postDetails",
    initialState,
    reducers: {

    },
    extraReducers: {
        [FetchPostDetails.pending]:((state)=>{
            state.status='loading.....'
            state.post_detail=null
        }),
        [FetchPostDetails.fulfilled]:((state,{payload})=>{
            state.status='success.....'
            state.post_detail=payload
        }),
        [FetchPostDetails.rejected]:((state)=>{
            state.status='something went wrong.....'
           
        })

    }
})

