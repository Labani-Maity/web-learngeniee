import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginRequest, regLog } from '../Redux/AuthSlice';
import { Puff } from 'react-loader-spinner'


const initialValue = {
    email: "",
    password: ""

}

const Login = () => {
    const { redirectTo } = useSelector((state) => state?.Auth)
    const [user, setUser] = useState(initialValue);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const validation = () => {
        let error = {}

        if (!user.email) {
            error.email = "Email is required"
        }
        if (!user.password) {
            error.password = "Password is required"
        }

        return error

    }


    let name, value

    const postValidation = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })


        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "@email is required" })
                setUser({ ...user, email: "" })
            } else {
                setError({ ...error, email: "" })
                setUser({ ...user, email: value })
            }
        }
        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "@password is required" })
                setUser({ ...user, password: "" })
            } else {
                setError({ ...error, password: "" })
                setUser({ ...user, password: value })
            }
        }

    }

    const SubmitInfo = async (e) => {
        e.preventDefault()
        let ErrorList = validation()
        setError(ErrorList)
        let data = {
            "email": user.email,
            "password": user.password
        }
        dispatch(loginRequest(data))

    }

    const redirectUser = () => {
        let token = localStorage.getItem("token")
        let isLoginPage = window.location.pathname.toLowerCase() === '/login'
        if (token !== null && token !== undefined && token !== "") {
            isLoginPage && navigate('/')
        }
    }

    useEffect(() => {
        redirectUser()
    }, [redirectTo])



    const log = () => {
        dispatch(regLog())
    }


    return (
        <>
            <br />
            <br />
            <br />
            <div className='form_bdy'>           
            <div className="login-form ">
                <div className="text">
                    LOGIN
                </div>
                <form>
                    <div className="field">
                        <div className="fas fa-envelope" />
                        <input type="text" 
                        placeholder="Enter Your Mail Id"                       
                        name='email'
                        value={user?.email}
                        onChange={e => postValidation(e)} />
                        <span style={{ color: 'red' }}>{error.email}</span>

                    </div>
                    <div className="field">
                        <div className="fas fa-lock" />
                        <input type="password" 
                        placeholder="Enter Your Password" 
                        name='password'
                        value={user?.password}
                        onChange={e => postValidation(e)}
                        />
                        <span style={{ color: 'red' }}>{error.password}</span>

                    </div>
                    {
                        loading ? (<>
                            <Puff
                                height="40"
                                width="40"
                                radius={1}
                                color="#4fa94d"
                                ariaLabel="puff-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                            <p>Do you have an account?..<Link onClick={log} to='/register' style={{ color: 'red' }}>Register</Link></p>

                        </>
                        ) : (

                            <>
                                <button type="submit" onClick={SubmitInfo} className="btn btn-primary">LOGIN</button>
                                <p className='link'>Do you have an account?..<Link onClick={log} to='/register'>Register</Link></p>

                            </>)
                    }                   
                </form>
            </div>
            </div>


        </>
    )
}

export default Login