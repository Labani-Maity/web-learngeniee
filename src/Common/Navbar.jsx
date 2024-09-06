import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom'
import { LogOut } from '../Redux/AuthSlice'

const Navbar = () => {

  const { Logouttoggle, red } = useSelector(state => state?.Auth)
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const logOut = (e) => {
    e.preventDefault();
    dispatch(LogOut());
    navigate("/login")
  }

  // console.log("name",name);
  return (
    <>
      <header id="header" className="fixed-top">
      <div class="container d-flex align-items-center">
          <h1 className="logo mr-auto"><a href="index.html"><span>Learn</span>genie</a></h1>

          <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

              <div className="navbar-nav">
                <NavLink className="nav-link active" to='/'>Home</NavLink>
                <NavLink className="nav-link" to='/about'>About</NavLink>
                <NavLink className="nav-link" to='/course'>Courses</NavLink>
                <NavLink className="nav-link" to='blog'>Blog</NavLink>
                <NavLink className="nav-link" to='/contact'>Contact</NavLink>

                {
                  Logouttoggle ? (
                    <>
                    <NavLink style={{backgroundColor:"#1cee1a"}} className="nav-link" to='/userdetail'>Hi..{name}</NavLink>
                    <NavLink className="nav-link" onClick={logOut}>LogOut</NavLink>

            </>

            ) : (

            <>
              <NavLink className="nav-link" to='/login'>Login</NavLink>
            </>
            )
              }

        </div>
      </div>

    </nav >
      <div className="header-social-links">
        <a href="#" className="twitter"><i className="icofont-twitter" /></a>
        <a href="#" className="facebook"><i className="icofont-facebook" /></a>
        <a href="#" className="instagram"><i className="icofont-instagram" /></a>
        <a href="#" className="linkedin"><i className="icofont-linkedin" /></a>
      </div>
    </div >
      </header >

  {/* <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 className="logo me-auto">
        <NavLink to="">
          <img src={logo}></img>
        </NavLink>
      </h1>

      <nav className="navbar navbar-expand-lg navbar-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" to='/' onClick={please}>Home</NavLink>
            <NavLink className="nav-link" to='/course' onClick={please}>Courses</NavLink>
            <NavLink className="nav-link" to='/trainer' onClick={please}>Trainer</NavLink>
            <NavLink className="nav-link" to='/blog' onClick={please}>Blog</NavLink>
            <NavLink className="nav-link" to='/contact' onClick={please}>Contact Us</NavLink>


          </div>
        </div>

      </nav>

      {

        !auth.user ? (

          <>

            <NavLink to='/login' className="get-started-btn">Login</NavLink>

          </>) : (

          <>


            <div className="dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                <img style={{ width: '35px', borderRadius: '21px' }} src="assets/img/testimonials/testimonials-2.jpg" alt="..." />

              </a>
              <div style={{ textAlign: 'center', }} className="dropdown-menu">
                <a className="dropdown-item" href="userdetail">{auth.user.name}</a>
                <a style={{ color: '#black' }} className="dropdown-item" href="#">{auth.user.email}</a>
                <NavLink to='/login' onClick={logoutAction} className="dropdown-item" href="#">
                  <img style={{ width: '25px' }} src="assets/img/logout1.gif" alt="..." />LogOut

                </NavLink>

              </div>
            </div>

          </>)
      }


    </div>
  </header> */}

    </>
  )
}

export default Navbar