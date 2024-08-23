import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchCourse } from '../Redux/CourseSlice/CourseSlice'
import CourseCard from '../Components/Course/CourseCard'
import Ques from '../Components/Course/Ques'



const Courses = () => {

  const { course_data } = useSelector((state) => state?.course)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchCourse())

  }, [])
  return (
    <>

      <main id="main">



        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">

            <div class="d-flex justify-content-between align-items-center">
              <h2>Courses</h2>
              <ol>
                <li><a href="index.html">Home</a></li>
                <li>Courses</li>
              </ol>
            </div>

          </div>
        </section>

        <CourseCard />
        <Ques />

      </main>


    </>
  )
}

export default Courses