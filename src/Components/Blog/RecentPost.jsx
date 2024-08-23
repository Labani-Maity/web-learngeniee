import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchPost } from '../../Redux/BlogComponent/RecentpostSlice'
import { Link } from 'react-router-dom'
import moment from 'moment/moment'
import { Puff } from 'react-loader-spinner'



const RecentPost = () => {
    const { post_data } = useSelector((state) => state?.recentPost)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchPost())
    })

    console.log("uu", post_data);
    return (
        <>
            <h3 className="sidebar-title">Recent Posts</h3>

            {
                post_data !== null ? (<>

                    <div className="sidebar-item recent-posts">

                        {

                            post_data?.data?.map((item, index) => {
                                return (
                                    <>
                                        <div className="post-item clearfix">
                                            <img src={`https://restapinodejs.onrender.com/api/blog/image/${item._id}`} className="card-img-top" alt="..." />
                                            <h4><Link to={`/postdetail/${item._id}`}>{item.title}</Link></h4>
                                            <time dateTime="2020-01-01">{moment(item.createdAt).format(' Do MM  YYYY, h:mm:ss a')}</time>
                                        </div>

                                    </>
                                )
                            })
                        }


                    </div>

                </>
                ) : (<>

                    <Puff
                        height="60"
                        width="30"
                        radius={1}
                        color="#4fa94d"
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />


                </>)
            }



        </>
    )
}

export default RecentPost