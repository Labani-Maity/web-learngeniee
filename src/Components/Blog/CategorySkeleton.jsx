import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'

const CategorySkeleton = () => {
    return (
        <>
           
            <div className="sidebar-item categories">
            <li><Link><Skeleton width={200} height={16}/></Link></li>

            </div>
        </>
        
    )
}

export default CategorySkeleton