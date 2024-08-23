import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchCategory } from '../../Redux/BlogComponent/CategorySlice'
import { Link } from 'react-router-dom'
// import CategorySkeleton from './CategorySkeleton'
import { Puff} from 'react-loader-spinner'


const Category = () => {
    const { category_data } = useSelector((state) => state?.cetegory)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchCategory())
    }, [])


    console.log("hi", category_data);
    return (
        <>
            <h3 className="sidebar-title">Categories</h3>
            <div className="sidebar-item categories">

                <ul>

                    {
                        category_data !== null ? (<>
                            {
                                category_data?.data?.map((item, index) => {
                                    return (
                                        <>
                                            <li><Link to={`/catedetail/${item._id}`}>{item.category}<span>{item.category.length}</span></Link></li>
                                        </>
                                    )
                                })
                            }

                        </>) : (<>

                            {/* <CategorySkeleton />
                            <CategorySkeleton />
                            <CategorySkeleton />
                            <CategorySkeleton />
                            <CategorySkeleton /> */}
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



                </ul>

            </div >




        </>
    )
}

export default Category