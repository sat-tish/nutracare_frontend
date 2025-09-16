import React, {useEffect} from 'react'
import BlogCard from '../commonComponents/BlogCard'
import cardImage from '../assets/images/illustrations/b3.jpeg'
import { Link } from 'react-router';
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllBlogs } from '../features/allBlogsSlice';

const HomeBlogs = () => {
   const dispatch = useDispatch();
   const {allBlogs, loading, error} = useSelector((state)=>state.allBlogs);
   useEffect(()=>{
      dispatch(fetchAllBlogs());
   },[dispatch]);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const allBlogsList = allBlogs.map((e)=>{
        for(let i=[e.id]; i<3; i++){
              return(
                <div className="mb-6">
                   <BlogCard key={e.id} cardImage={cardImage} blogName={e.name} />
                </div>
           
                    )
        }
              
      })

  return (
     <section className='w-full py-[50px]'>
           
          <div className='w-[90%] lg:w-[80%] m-auto grid lg:grid-cols-4'>
            {allBlogsList}
           
            <div className='w-full min-h-[400px] lg:col-span-2'>
                <div className='p-5 w-full h-full flex justify-center items-center flex-col gap-5'>
                    <h1 className='text-2xl font-semibold '>Wellness Blogs</h1>
                    <p className=' mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim accusamus amet laboriosam quaerat, 
                        doloribus dolore? Nobis deserunt, possimus corporis ut nulla, 
                        cupiditate illum quo odit sed, laboriosam quidem consectetur assumenda.</p>
                
                   <Link to={'/nutracare_frontend/blogs'} className='w-[70%] flex justify-center items-center px-3 py-3 text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none
                    focus:ring-blue-300'>View All Blogs</Link>
                  </div>
            </div>
            
          </div>
        </section>
  )
}

export default HomeBlogs
