import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../Redux/AuthSlice';


const initialValue = {
    name: "",
    email: "",
    password: "",
    mobile: "",

}

const Registration = () => {

    const { redirectReg } = useSelector((state) => state?.Auth);
    const [user, setUser] = useState(initialValue);
    const [error, setError] = useState({});
    const dispatch = useDispatch()
    const navigate = useNavigate()



    const validation = () => {
        let error = {}
        if (!user.name) {
            error.name = "Name is required"
        }
        if (!user.email) {
            error.email = "Email is required"
        }
        if (!user.password) {
            error.password = "Password is required"
        }
        if (!user.mobile) {
            error.mobile = "Phone is required"
        }
        return error

    }

    let name, value

    const postValidation = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })

        if (name === "name") {
            if (value.length === 0) {
                setError({ ...error, name: "@Name is required" })
                setUser({ ...user, name: "" })
            } else {
                setError({ ...error, name: "" })
                setUser({ ...user, name: value })
            }
        }
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
        if (name === "mobile") {
            if (value.length === 0) {
                setError({ ...error, mobile: "@Phone number is required" })
                setUser({ ...user, mobile: "" })
            } else {
                setError({ ...error, mobile: "" })
                setUser({ ...user, mobile: value })
            }
        }

    }
   



    const SubmitInfo = async (e) => {
        e.preventDefault();
        let ErrorList = validation();
        setError(validation())
        let formData = new FormData();
        if (Object.keys(ErrorList).length === 0)
            formData.append("name", user.name)
        formData.append("email", user.email)
        formData.append("password", user.password)
        formData.append("mobile", user.mobile)
        dispatch(registerUser(formData))

    }

    const redirectUser = () => {
        let name = localStorage.getItem("name")
        let isLoginPage = window.location.pathname.toLocaleLowerCase() === '/register'
        if (name !== null && name !== undefined && name !== "") {
            isLoginPage && navigate("/login")
        }
    }


    useEffect(() => {
        redirectUser()
    }, [redirectReg])





    return (
        <>
            <br />
            <br />
            <br />
            <div className="container regis_form">
                <h4 style={{ textAlign: 'center' }}> Registration Form</h4>
                <br />

                <form>
                    <div className="form-group">

                        <input type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name='name'
                            value={user?.name}
                            placeholder="Enter Your Full Name"
                            onChange={e => postValidation(e)} />
                        <span style={{ color: 'red' }}>{error?.name}</span>
                    </div>
                    <div className="form-group">

                        <input type="email"
                            className="form-control"
                            name='email'
                            value={user?.email}
                            id="exampleFormControlInput1"
                            placeholder="Enter Your Mail Id"
                            onChange={e => postValidation(e)} />
                        <span style={{ color: 'red' }}>{error?.email}</span>


                    </div>

                    <div className="form-group">

                        <input type="password"
                            className="form-control"
                            name='password'
                            value={user?.password}
                            id="exampleFormControlInput1"
                            placeholder="Enter Your Password"
                            onChange={e => postValidation(e)} />
                        <span style={{ color: 'red' }}>{error?.password}</span>


                    </div>
                    <div className="form-group">
                        <input type="number"
                            className="form-control"
                            name='mobile'
                            value={user?.mobile}
                            id="exampleFormControlInput1"
                            placeholder="Enter Your Phone Number"
                            onChange={e => postValidation(e)} />
                        <span style={{ color: 'red' }}>{error?.mobile}</span>

                    </div>

                    <button type="submit" onClick={SubmitInfo} className="btn btn-primary">Register</button>
                    <p>Already register?..<Link to='/login' style={{ color: 'red' }}>Login</Link></p>
                </form>

            </div>

        </>
    )
}

export default Registration