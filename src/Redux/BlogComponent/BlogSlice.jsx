import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchBlog = createAsyncThunk("fetBlogData", async()=>{
    try{
        // const result = await axios.get(`https://restapinodejs.onrender.com/api/allBlog`)
        const result = await axios.get(`https://blogserver-for-student-only.onrender.com/api/allBlog`)
        return result?.data

    }
    catch(error){
        console.log(error);
    }
}) 

const initialState ={
    blogdata:[],
    status:"success"
}


export const BlogSlice = createSlice({
    name:"blog",
    initialState ,
    reducers:{

    },

    extraReducers:{

        [FetchBlog.pending]:(state)=>{
            state.status="loading...."
            state.blogdata=null
        },
        [FetchBlog.fulfilled]:(state,{payload})=>{
            state.status="success"
            state.blogdata=payload
        },
        [FetchBlog.rejected]:(state)=>{
            state.status="something went wrong...."
           
        }
    }


})