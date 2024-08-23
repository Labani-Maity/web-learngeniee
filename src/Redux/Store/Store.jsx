import { configureStore } from "@reduxjs/toolkit";
import { BlogSlice } from "../BlogComponent/BlogSlice";
import { RecentPostSlice } from "../BlogComponent/RecentpostSlice";
import { CategorySlice } from "../BlogComponent/CategorySlice";
import { CatedetailSlice } from "../BlogComponent/CatedetailSlice";
import { PostDetailsSlice } from "../BlogComponent/PostDetailSlice";
import { BannerSlice } from "../HomeSlice/BannerSlice";
import { ServiceSlice } from "../HomeSlice/ServiceSlice";
import { TestimonialSlice } from "../HomeSlice/TestimonialSlice";
import { AboutSlice } from "../AboutSlice/AboutSlice";
import { CourseSlice } from "../CourseSlice/CourseSlice";
import { ContactSlice } from "../ContactSlice/ContactSlice";
import { AuthSlice } from "../AuthSlice";
import { ApplySlice } from "../CourseSlice/ApplySlice";
import { CommentSlice } from "../BlogComponent/CommentSlice";



 const Store = configureStore({
    reducer:{
        banner:BannerSlice.reducer,
        service:ServiceSlice.reducer,
        testimonial:TestimonialSlice.reducer,
        about:AboutSlice.reducer,
        course:CourseSlice.reducer,
        apply:ApplySlice.reducer,
        blog:BlogSlice.reducer,
        recentPost:RecentPostSlice.reducer,
        cetegory:CategorySlice.reducer,
        cetegoryDetail:CatedetailSlice.reducer,
        postDetails:PostDetailsSlice.reducer,
        comment:CommentSlice.reducer,
        contact:ContactSlice.reducer,
        Auth:AuthSlice.reducer
        
    }
 })

 export default Store