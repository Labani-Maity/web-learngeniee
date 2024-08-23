import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchCategory = createAsyncThunk("fetchCategoryData", async () => {

    try {
        const result = await axios.get(`https://blogserver-for-student-only.onrender.com/api/showallcategory`);
        return result?.data
    }
    catch (error) {
        console.log(error);
    }
})

const initialState={
    category_data :[],
    status:"success"
}


export const CategorySlice = createSlice({
    name:"cetegory",
    initialState,
    reducers:{
        
    },
    extraReducers:{
        [FetchCategory.pending]:(state)=>{
            state.status="loading....."
            state.category_data=null
        },
        [FetchCategory.fulfilled]:(state,{payload})=>{
            state.status="success"
            state.category_data=payload
        },
        [FetchCategory.rejected]:(state)=>{
            state.status="something went wrong....."
           
        }
    }
})