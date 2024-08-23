import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BlogCardSkeleton = () => {
    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 entries">
                        <article className="entry" data-aos="fade-up">
                            <div className="entry-img">
                                <Skeleton height={300} />

                            </div>
                            <h2 className="entry-title">
                                <a href="blog-single.html"><Skeleton height={50} /></a>
                            </h2>
                            <div className="entry-meta">
                                <ul>
                                    <li className="d-flex align-items-center"> <a href="blog-single.html"><Skeleton height={20} width={60} /></a></li>
                                    <li className="d-flex align-items-center"> <a href="blog-single.html"><time dateTime="2020-01-01"><Skeleton height={20} width={60} /></time></a></li>
                                    <li className="d-flex align-items-center"> <a href="blog-single.html"><Skeleton height={20} width={60} /></a></li>
                                </ul>
                            </div>
                            <div className="entry-content">
                                <p>
                                    <Skeleton height={80} />
                                </p>

                            </div>
                        </article>

                        <article className="entry" data-aos="fade-up">
                            <div className="entry-img">
                                <Skeleton height={300} />

                            </div>
                            <h2 className="entry-title">
                                <a href="blog-single.html"><Skeleton height={50} /></a>
                            </h2>
                            <div className="entry-meta">
                                <ul>
                                    <li className="d-flex align-items-center"> <a href="blog-single.html"><Skeleton height={20} width={60} /></a></li>
                                    <li className="d-flex align-items-center"> <a href="blog-single.html"><time dateTime="2020-01-01"><Skeleton height={20} width={60} /></time></a></li>
                                    <li className="d-flex align-items-center"> <a href="blog-single.html"><Skeleton height={20} width={60} /></a></li>
                                </ul>
                            </div>
                            <div className="entry-content">
                                <p>
                                    <Skeleton height={80} />
                                </p>

                            </div>
                        </article>

                    </div>

                    <div className="col-lg-4">
                        <div className="sidebar" data-aos="fade-left">
                            <h3 className="sidebar-title"><Skeleton width={70} /></h3>
                            <div className="sidebar-item search-form">
                                <Skeleton height={45} />

                            </div>
                            <h3 className="sidebar-title"><Skeleton width={120} /></h3>
                            <div className="sidebar-item categories">
                                <ul>
                                    <li><a href="#"><Skeleton width={70} /> </a></li>
                                    <li><a href="#"><Skeleton width={70} /> </a></li>
                                    <li><a href="#"><Skeleton width={70} /> </a></li>
                                    <li><a href="#"><Skeleton width={70} /> </a></li>
                                    <li><a href="#"><Skeleton width={70} /> </a></li>
                                    <li><a href="#"><Skeleton width={70} /> </a></li>
                                </ul>
                            </div>
                            <h3 className="sidebar-title"><Skeleton width={150} /></h3>
                            <div className="sidebar-item recent-posts">
                                <div className="post-item clearfix">
                                    <img src="http://via.placeholder.com/640x360" />
                                    <h4><a href="blog-single.html"><Skeleton /></a></h4>
                                    <time dateTime="2020-01-01"><Skeleton width={60} /></time>
                                </div>
                                <div className="post-item clearfix">
                                    <img src="http://via.placeholder.com/640x360" alt />
                                    <h4><a href="blog-single.html"><Skeleton /></a></h4>
                                    <time dateTime="2020-01-01"><Skeleton width={60} /></time>
                                </div>
                                <div className="post-item clearfix">
                                    <img src="http://via.placeholder.com/640x360" alt />
                                    <h4><a href="blog-single.html"><Skeleton /></a></h4>
                                    <time dateTime="2020-01-01"><Skeleton width={60} /></time>
                                </div>
                                <div className="post-item clearfix">
                                    <img src="http://via.placeholder.com/640x360" alt />
                                    <h4><a href="blog-single.html"><Skeleton /></a></h4>
                                    <time dateTime="2020-01-01"><Skeleton width={60} /></time>
                                </div>
                                <div className="post-item clearfix">
                                    <img src="http://via.placeholder.com/640x360" alt />
                                    <h4><a href="blog-single.html"><Skeleton /></a></h4>
                                    <time dateTime="2020-01-01"><Skeleton width={60} /></time>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCardSkeleton