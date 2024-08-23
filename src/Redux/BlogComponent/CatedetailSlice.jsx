
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchCategoryDetail = createAsyncThunk("fetchCategoryDetail", async () => {

    try {
        const result = await axios.get(`https://blogserver-for-student-only.onrender.com/api/category/post/`);
        return result?.data
    }
    catch (error) {
        console.log(error);
    }
})

const initialState={
    category_detail :[],
    status:"success"
}


export const CatedetailSlice = createSlice({
    name:"cetegoryDetail",
    initialState,
    reducers:{
        
    },
    extraReducers:{
        [FetchCategoryDetail.pending]:(state)=>{
            state.status="loading....."
            state.category_detail=null
        },
        [FetchCategoryDetail.fulfilled]:(state,{payload})=>{
            state.status="success"
            state.category_detail=payload
        },
        [FetchCategoryDetail.rejected]:(state)=>{
            state.status="something went wrong....."
           
        }
    }
})