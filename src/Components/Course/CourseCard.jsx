import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchCourse } from '../../Redux/CourseSlice/CourseSlice'
import { Link } from 'react-router-dom'
import CourseCardSkeleton from './CourseCardSkeleton'

const CourseCard = () => {

    const { course_data } = useSelector((state) => state?.course)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchCourse())

    }, [])
    return (
        <>
            {/* <main id="main"> */}
            <section id="pricing" class="pricing">
                <div class="container" data-aos="fade-up">

                    <div class="row">


                        {
                            course_data !== null ? (<>

                                {
                                    course_data?.Courses?.map((cData, index) => {
                                        return (
                                            <>
                                                <div className="col-lg-3 col-md-6 mt-4 mt-md-0 pt-4">
                                                    <div className="box">
                                                        <h3 style={{ color: "black" }}>{cData.name}</h3>
                                                        <div style={{ width: "250px", height: "auto" }}>
                                                            <img src={`https://restapinodejs.onrender.com/api/course/photo/${cData._id}`} className="mb-3" style={{ width: "80%", height: "180px", display: "flex", objectFit: "cover" }} alt="..." />
                                                        </div>

                                                        <h4><sup>*</sup>{cData.fees}/-</h4>
                                                        <ul>
                                                            <li>{cData.requirement}</li>
                                                        </ul>
                                                        <h6>Duration : {cData.duration}</h6>
                                                        <div className="btn-wrap">
                                                            <Link to={`/apply/${cData.name}/${cData._id}`} className="btn-buy">Apply Course</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </>
                            ) : (
                                <>
                                    <CourseCardSkeleton />
                                    <CourseCardSkeleton />
                                    <CourseCardSkeleton />
                                    <CourseCardSkeleton />
                                    

                                </>)
                        }





                    </div>

                </div>
            </section>

            {/* </main>/ */}


        </>
    )
}

export default CourseCard