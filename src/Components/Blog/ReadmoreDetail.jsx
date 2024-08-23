import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchPostDetails } from '../../Redux/BlogComponent/PostDetailSlice'
import { Puff } from 'react-loader-spinner'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment/moment'
import Category from './Category'
import RecentPost from './RecentPost'
import Comment from './Comment'


const ReadmoreDetail = () => {
    const { post_detail } = useSelector((state) => state?.postDetails)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchPostDetails(id))

    }, [])

    return (
        <>

            <main id="main">
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Blog Details</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Blog</li>
                            </ol>
                        </div>
                    </div>
                </section>

                {/* blog sec/........... */}

                <section id="blog" className="blog">

                    {
                        post_detail !== null ? (
                            <>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 entries">
                                            <article className="entry entry-single" data-aos="fade-up">
                                                <div className="entry-img">
                                                    <img src={`https://restapinodejs.onrender.com/api/blog/image/${post_detail?._id}`} className="card-img-top" alt="..." />

                                                </div>
                                                <h2 className="entry-title">
                                                    <a href="blog-single.html">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia reiciendis</a>
                                                </h2>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li className="d-flex align-items-center"><i className="icofont-user" /> <a href="blog-single.html">John Doe</a></li>
                                                        <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <a href="blog-single.html"><time dateTime="2023-06-28">{moment(post_detail.createdAt).format(' Do MM  YYYY, h:mm:ss a')}</time></a></li>
                                                        <li className="d-flex align-items-center"><i className="icofont-comment" /> <a href="blog-single.html">12 Comments</a></li>
                                                    </ul>
                                                </div>
                                                <div className="entry-content">
                                                    <p>
                                                        Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                                                        Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                                                    </p>
                                                    <p>
                                                        Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
                                                    </p>
                                                    <blockquote>
                                                        <i className="icofont-quote-left quote-left" />
                                                        <p>
                                                            Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.
                                                        </p>
                                                        <i className="las la-quote-right quote-right" />
                                                        <i className="icofont-quote-right quote-right" />
                                                    </blockquote>
                                                    <p>
                                                        Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
                                                        Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque.
                                                        Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.
                                                    </p>
                                                    <h3>Et quae iure vel ut odit alias.</h3>
                                                    <p>
                                                        Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
                                                        Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
                                                        Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.
                                                    </p>

                                                    <p>
                                                        Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.
                                                    </p>
                                                </div>
                                                <div className="entry-footer clearfix">
                                                    <div className="float-left">
                                                        <i className="icofont-folder" />
                                                        <ul className="cats">
                                                            <li><a href="#">Business</a></li>
                                                        </ul>
                                                        <i className="icofont-tags" />
                                                        <ul className="tags">
                                                            <li><a href="#">Creative</a></li>
                                                            <li><a href="#">Tips</a></li>
                                                            <li><a href="#">Marketing</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="float-right share">
                                                        <a href title="Share on Twitter"><i className="icofont-twitter" /></a>
                                                        <a href title="Share on Facebook"><i className="icofont-facebook" /></a>
                                                        <a href title="Share on Instagram"><i className="icofont-instagram" /></a>
                                                    </div>
                                                </div>
                                            </article>
                                            <div className="blog-comments" data-aos="fade-up">
                                                <h4 className="comments-count">Comments</h4>
                                                <div id="comment-1" className="comment clearfix">
                                                    <h5><a href>Georgia Reader</a> </h5>
                                                    <time dateTime="2023-06-28">{moment(post_detail.createdAt).format(' Do MM  YYYY, h:mm:ss a')}</time>
                                                    <p>
                                                        Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta.
                                                        Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
                                                    </p>
                                                </div>

                                                {/* <div className="reply-form">
                                                    <h4>Leave a Reply</h4>
                                                    <p>Your email address will not be published. Required fields are marked * </p>
                                                    <form action>
                                                        <div className="row">
                                                            <div className="col-md-6 form-group">
                                                                <input name="name" type="text" className="form-control" placeholder="Your Name*" />
                                                            </div>
                                                            <div className="col-md-6 form-group">
                                                                <input name="email" type="text" className="form-control" placeholder="Your Email*" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col form-group">
                                                                <input name="website" type="text" className="form-control" placeholder="Your Website" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col form-group">
                                                                <textarea name="comment" className="form-control" placeholder="Your Comment*" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary">Post Comment</button>
                                                    </form>
                                                </div> */}
                                                <Comment/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="sidebar" data-aos="fade-left">
                                                <h3 className="sidebar-title">Search</h3>
                                                <div className="sidebar-item search-form">
                                                    <form action>
                                                        <input type="text" />
                                                        <button type="submit"><i className="icofont-search" /></button>
                                                    </form>
                                                </div>
                                                <Category/>
                                                <RecentPost/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='spiner'>
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
                                </div>
                            </>)
                    }

                </section>


            </main>


        </>
    )
}

export default ReadmoreDetail