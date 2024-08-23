import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Puff } from 'react-loader-spinner'
import { FetchBlog } from '../../Redux/BlogComponent/BlogSlice'
import RecentPost from './RecentPost'
import Category from './Category'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'
import BlogCardSkeleton from './BlogCardSkeleton'

// import { Rings } from 'react-loader-spinner'


const BlogCard = () => {

    const { blogdata } = useSelector((state) => state?.blog)
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8);



    useEffect(() => {
        dispatch(FetchBlog())

    }, [])

    // const lastPostIndex = currentPage * postPerPage;
    // const firstPostIndex = lastPostIndex - postPerPage;
    // const currentPag = blogdata.slice(firstPostIndex,lastPostIndex);


    // console.log("uiu", blogdata);

    return (
        <>

            <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Blog</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Blog</li>
                            </ol>
                        </div>
                    </div>
                </section>
                {/* End Breadcrumbs */}

                {/* ======= Blog Section ======= */}
                <section id="blog" className="blog">

                    {
                        blogdata !== null ? (
                            <>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 entries">

                                            {

                                                blogdata?.data?.map((item, index) => {
                                                    return (
                                                        <>
                                                            <article className="entry" data-aos="fade-up">
                                                                <div className="entry-img">
                                                                    <img src={`https://blogserver-for-student-only.onrender.com/api/blog/image/${item._id}`} className="card-img-top" alt="..." />

                                                                </div>
                                                                <h2 style={{ textAlign: 'center' }} className="entry-title">
                                                                    <a href="blog-single.html">{item.title}</a>
                                                                </h2>
                                                                <div className="entry-meta">
                                                                    <ul>
                                                                        <li className="d-flex align-items-center"><i className="icofont-user" /> <a href="blog-single.html">John Doe</a></li>
                                                                        <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <a href="blog-single.html"><time dateTime="2020-01-01">{moment(item.createdAt).format(' Do MM  YYYY, h:mm:ss a')} </time></a></li>
                                                                        <li className="d-flex align-items-center"><i className="icofont-comment" /> <a href="blog-single.html">12 Comments</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="entry-content">
                                                                    <p dangerouslySetInnerHTML={{
                                                                        __html: item?.postText.slice(0, 300)

                                                                    }}>

                                                                    </p>

                                                                    <div className="read-more">
                                                                        <Link to={`/readmore/${item._id}`}>Read More</Link>
                                                                    </div>
                                                                </div>
                                                            </article>

                                                        </>
                                                    )
                                                })
                                            }


                                            <div className="blog-pagination">
                                                <ul className="justify-content-center">
                                                    <li className="disabled"><i className="icofont-rounded-left" /></li>
                                                    <li><a href="#">1</a></li>
                                                    <li className="active"><a href="#">2</a></li>
                                                    <li><a href="#">3</a></li>
                                                    <li><a href="#"><i className="icofont-rounded-right" /></a></li>
                                                </ul>
                                            </div>
                                        </div>


                                        <div className="col-lg-4">
                                            <div className="sidebar" data-aos="fade-left">
                                                <h3 className="sidebar-title">Search</h3>


                                                <SearchInput />

                                                <Category />
                                                <RecentPost />

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </>
                        ) : (
                            <>
                                <BlogCardSkeleton />
                                <BlogCardSkeleton />
                                <BlogCardSkeleton />
                                <BlogCardSkeleton />
                                <BlogCardSkeleton />
                                {/* <div className='spiner'>
                                    <Puff
                                        height="60"
                                        width="60"
                                        radius={1}
                                        color="#4fa94d"
                                        ariaLabel="puff-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                    />
                                </div> */}
                            </>
                        )
                    }


                </section>

            </main>

        </>
    )
}

export default BlogCard