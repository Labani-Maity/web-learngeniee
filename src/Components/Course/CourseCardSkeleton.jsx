import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CourseCardSkeleton = () => {
    return (
        <>

            <div className="col-lg-3 col-md-6 mt-4 mt-md-0 pt-4">
                <div className="box">
                    <h3><Skeleton /></h3>
                    <div>
                        <Skeleton width={250} height={200} />
                    </div>

                    <h4><Skeleton /></h4>
                    <ul>
                        <li><Skeleton /></li>
                    </ul>
                    <h6><Skeleton /></h6>
                    <div className="btn-wrap">
                    <Skeleton width={150} height={20} />
                    </div>

                </div>
            </div>

        </>
    )
}

export default CourseCardSkeleton