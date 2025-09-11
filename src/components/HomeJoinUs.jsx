import React from 'react'
import { Link } from 'react-router'

const HomeJoinUs = () => {
  return (
    <div className='w-full py-[50px] bg-[#006D95]'>
      <div className='w-[90%] md:w-[70%] lg:w-[50%] m-auto flex flex-col gap-5 items-center'>
          <h1 className='text-white font-semibold text-2xl text-center'>Are you a Healthcare Professional, working in Allied Medical sciences, Having Holistic clinic or Wellness centers ?</h1>
           <h2 className='text-center text-white mb-4'>Then this is the right Platform for you. Join us now for free.</h2>
            <Link to={'/joinus'} className="w-[40%] flex justify-center items-center font-semibold px-3 py-3 text-center text-[#013547] bg-white hover:bg-[#023040] hover:text-white rounded focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Join now
                   </Link>
      </div>
    </div>
  )
}

export default HomeJoinUs
