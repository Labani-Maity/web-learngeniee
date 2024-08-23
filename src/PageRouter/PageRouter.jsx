import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '../Common/Navbar'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Courses from '../Pages/Courses'
import Footer from '../Common/Footer'
import RecentPostDetail from '../Components/Blog/RecentPostDetail'
import ReadmoreDetail from '../Components/Blog/ReadmoreDetail'
import Categorydetails from '../Components/Blog/Categorydetails'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Registration from '../Pages/Registration'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { check_token } from '../Redux/AuthSlice'
import Apply from '../Components/Course/Apply'
import SearchData from '../Components/Blog/SearchData'
import UserDetails from '../Components/Dashboard/UserDetails'




const PageRouter = () => {

  const dispatch = useDispatch()

  function AllprivateRoute({ children }) {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to='/login' />
    )
  }

  useEffect(() => {
    dispatch(check_token())
  },[])

  const PublicRoute = [

    {
      path: '/register',
      component: < Registration />
    },
    {
      path: '/login',
      component: <Login />
    },
    {
      path: '/',
      component: <Home />
    },
    {
      path: '/about',
      component: <About />
    },
    {
      path: '/course',
      component: <Courses />
    },

    {
      path: '/blog',
      component: <Blog />
    }
   
  ]

  // private route.....

  const PrivateRoute = [

    {
      path: '/contact',
      component: <Contact />
    },
    {
      path: '/readmore/:id',
      component: <ReadmoreDetail />
    },
    {
      path: '/search',
      component: <SearchData/>
    },
    {
      path: '/catedetail/:id',
      component: <Categorydetails/>
    },
    {
      path: '/postdetail/:id',
      component: <RecentPostDetail />
    },
    {
      path: '/userdetail',
      component: <UserDetails/>
    },
    {
      path: '/apply/:course/:id',
      component: <Apply/>
    }
   

  ]




  return (
    <>
     <ToastContainer />
      <Router>
        <Navbar />       
        <Routes>

          {
            PublicRoute?.map((item, index) => {
              return (
                <>
                  <Route
                    key={index + 1}
                    exact
                    path={item?.path}
                    element={item?.component}
                  />

                </>
              )
            })
          }


          {
            PrivateRoute?.map((item, index) => {
              return (
                <>
                  <Route
                    key={index + 1}
                    exact
                    path={item?.path}
                    element={<AllprivateRoute>{item?.component}</AllprivateRoute>}
                  />

                </>
              )
            })

          }       

        </Routes>
        <Footer />

      </Router>

    </>
  )
}

export default PageRouter