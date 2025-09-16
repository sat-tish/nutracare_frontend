import React, {useEffect} from 'react'
import BlogCard from "../commonComponents/BlogCard"
import blogImg from '../assets/images/illustrations/b3.jpeg'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllBlogs } from '../features/allBlogsSlice';

const SimilarBlogs = () => {

    const dispatch = useDispatch();
  const {allBlogs, loading, error} = useSelector((state)=>state.allBlogs);
   useEffect(()=>{
      dispatch(fetchAllBlogs());
   },[dispatch]);
   
  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error.message}</div>;

      const allBlogsList = allBlogs.map((e)=>{
              return(
                <div className="mb-6">
                   <BlogCard key={e.id} cardImage={blogImg} blogName={e.name} />
                </div>
           
                    )
      })
  
  return (
    <div className="w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allBlogsList}
      </div>
  )
}

export default SimilarBlogs
