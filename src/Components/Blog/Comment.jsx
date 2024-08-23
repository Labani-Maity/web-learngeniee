import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { Puff } from 'react-loader-spinner'
import { GetComments, PostComment } from '../../Redux/BlogComponent/CommentSlice'

const Comment = () => {
    const { id } = useParams()
    const initialValues = {
        name: '',
        email: '',
        comment: '',
        blog: id
    }
    const { isLoggedin } = useSelector((state) => state.Auth)
    const { comments, commentStatus, commentSubmitStatus } = useSelector((state) => state?.comment)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [data, setData] = useState(initialValues)

    let name, value
    const setCommentData = (e) => {
        name = e.target.name
        value = e.target.value
        setData({ ...data, [name]: value })
    }

    const postComment = (e) => {
        e.preventDefault()
        // !isLoggedin && navigate('/login')
        dispatch(PostComment(data))
        setData(initialValues)
    }

    useEffect(() => {
        dispatch(GetComments(id))
    }, [id, commentSubmitStatus])
    console.log(comments);

    return (
        <div>
            <div class="blog-comments" data-aos="fade-up">
                {
                    comments !== '' && comments !== null && comments !== undefined && commentStatus === 'success' ? (
                        <>

                            <h4 class="comments-count">Comments ({comments?.length})</h4>
                            {
                                comments?.map((item, key) => {
                                    return (
                                        <>
                                            <div id={`comment-${key + 1}`} class="comment clearfix" key={key + 1}>
                                                <h5><a href="">{item.name}</a> </h5>
                                                <time datetime="2020-01-01">01 Jan, 2020</time>
                                                <p>{item.comment}</p>

                                            </div>
                                        </>
                                    )
                                })
                            }
                        </>
                    ) : (
                        <>
                            {
                            
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
                        }
                        </>
                    )
                }



                <div class="reply-form">
                    <h4>Leave a Reply</h4>
                    <p>Your email address will not be published. Required fields are marked * </p>
                    <form action="">
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <input name="name" type="text" class="form-control" placeholder="Your Name*" onChange={setCommentData}
                                    value={data.name} />
                            </div>
                            <div class="col-md-6 form-group">
                                <input name="email" type="text" class="form-control" placeholder="Your Email*" onChange={setCommentData}
                                    value={data.email} />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col form-group">
                                <textarea name="comment" class="form-control" placeholder="Your Comment*" onChange={setCommentData}
                                    value={data.comment} ></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={postComment}>Post Comment</button>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default Comment