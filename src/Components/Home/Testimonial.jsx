import { configureStore } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchTestimonial } from '../../Redux/HomeSlice/TestimonialSlice'

const Testimonial = () => {

    const { test_data } = useSelector((state) => state?.testimonial)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchTestimonial())

    }, [])
    // console.log(test_data, "service");


    return (
        <>


            <section id="testimonials" className="testimonials section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Testimonials</h2>
                        <p>Laborum repudiandae omnis voluptatum consequatur mollitia ea est voluptas ut</p>
                    </div>
                    <div className="row">

                        {

                            test_data?.testimonials?.map((item, index) => {
                                return (
                                    <>
                                        <div className="col-lg-6 testi_card" data-aos="fade-up">
                                            <div className="testimonial-item">
                                                <img src={`https://blogserver-for-student-only.onrender.com/api/testimonials/photo/${item._id}`} className="testimonial-img" alt />
                                                <h3>{item.name}</h3>
                                                {/* <h4>Ceo &amp; Founder</h4> */}
                                                <h3 style={{color:"#c6c6c6"}}>{item.position}</h3>                                          
                                                                                         
                                                <p>
                                                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                   {item.talk.slice(0, 130)}
                                                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                                                </p>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>


        </>
    )
}

export default Testimonial