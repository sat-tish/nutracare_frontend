import React from 'react'
import BlogCard from './BlogCard'

const HomeBlogs = () => {
  return (
     <div className='w-full py-[50px]'>
           
          <div className='w-[90%] lg:w-[80%] m-auto grid lg:grid-cols-4'>
            <div className='w-full col-span-1 flex justify-center'>
               <BlogCard />
            </div>
             <div className='w-full col-span-1 flex justify-center'>
               <BlogCard />
            </div>
            <div className='w-full min-h-[400px] lg:col-span-2'>
                <div className='p-5 w-full h-full flex justify-center items-center flex-col gap-5'>
                    <h1 className='text-2xl font-semibold '>Wellness Blogs</h1>
                    <p className=' mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim accusamus amet laboriosam quaerat, 
                        doloribus dolore? Nobis deserunt, possimus corporis ut nulla, 
                        cupiditate illum quo odit sed, laboriosam quidem consectetur assumenda.</p>
                 <a href="#" class="w-[70%] flex justify-center items-center px-3 py-3 text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              View All Blogs
                   </a>
                  </div>
            </div>
            
          </div>
        </div>
  )
}

export default HomeBlogs
