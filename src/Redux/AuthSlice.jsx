import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";


const initialState = {
    loading: false,
    user: {},
    redirectTo: null,
    Logouttoggle: false,
    redirectReg: null

}


export const registerUser = createAsyncThunk("register", async (user) => {
    try {
        // const result = await axios.post(`https://restfullapinodejs1.onrender.com/api/register`, user)
        const result = await axios.post(`https://blogserver-for-student-only.onrender.com/api/register`, user)
        return result?.data

    }
    catch (error) {
        toast(error?.response?.data?.msg);
        console.log(error);

    }
})

export const loginRequest = createAsyncThunk("login", async (user) => {
    try {
        const res = await axios.post(`https://blogserver-for-student-only.onrender.com/api/login`, user)
        return res?.data
    }
    catch (error) {
        toast(error?.response?.data?.message);
        console.log(error);

    }
})


export const AuthSlice = createSlice({
    name: "user",
    initialState,

    reducers: {

        redirectToRegister: (state, { payload }) => {
            state.redirectReg = payload

        },

        regLog: (state, { payload }) => {
            localStorage.removeItem("name")
            localStorage.removeItem("email")
            localStorage.removeItem("mobile")
            state.Logouttoggle = false
        },

        redirectTo_Login: (state, { payload }) => {
            localStorage.setItem("name")
            localStorage.setItem("email")
            localStorage.setItem("mobile")
            state.redirectTo = payload
        },

        LogOut:(state,{payload})=>{
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            toast.success("LogOut Successfull")     
            state.Logouttoggle=false

        },
        check_token: (state, { payload }) => {
            let token = localStorage.getItem("token");
            if (token !== null && token !== undefined) {
              state.Logouttoggle = true;
            }
          }

    },

    extraReducers: {

        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            if (payload?.success === true) {
                localStorage.setItem("name", payload.data.name)
                localStorage.setItem("email", payload?.data.email)
                localStorage.setItem("mobile", payload?.data.mobile)
                state.redirectReg = '/login'
                toast(`hello ${payload?.data?.name},Registered Successfully `)

            }

        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },


        // loginreducer.......

        [loginRequest.pending]: (state) => {
            state.loading = true
        },
        [loginRequest.fulfilled]: (state, { payload }) => {
            if (payload?.status === 200) {
                localStorage.setItem("token", payload?.token)
                localStorage.setItem("name", payload?.user.name)
                localStorage.setItem("email", payload?.user.email)
                localStorage.setItem("mobile", payload?.user.mobile)
                state.Logouttoggle = true
                state.redirectTo = '/'
                toast(payload?.message)
            }
        },
        [loginRequest.rejected]: (state) => {
            state.loading = false
        }



    }
})

export const { redirectToRegister, regLog, redirectToLogin,LogOut,check_token } = AuthSlice.actions