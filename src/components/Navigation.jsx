import logoImage from '../assets/images/illustrations/Nutracare_multi_logo.jpg'
import { Link } from "react-router";

const Navigation = () => {
  return (
    <div className="grid max-sm:grid-cols-2 grid-cols-3 shadow bg-white w-full h-14">
      <div className="flex items-center w-full h-full ps-5 sm:ps-8">
        <img className='h-10' src={logoImage} alt="" />
      </div>
      <div className='flex justify-end items-center pe-5 sm:hidden'>
       <button class="flex items-center justify-center border-[1px] bg-white text-gray-700 hover:text-gray-900 font-bold py-1 px-1 rounded">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
</button>
      </div>
      <div className='flex justify-end items-center pe-8 max-sm:hidden col-span-2 sm:space-x-6 md:space-x-10 font-medium'>
       <Link to="/">Home</Link>
       <Link to="/categories">Categories</Link>
       <Link to="/blogs">Blogs</Link>
       <Link to="/aboutus">About Us</Link>
       <Link to="/joinus">Join Us</Link>
      </div>

    </div>
  )
}

export default Navigation
