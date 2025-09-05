import logoImage from '../assets/images/illustrations/Nutracare_multi_logo.jpg'
import { Link } from "react-router";

const Navigation = () => {
  return (
    <div className="grid max-sm:grid-cols-2 grid-cols-3 shadow bg-white w-full h-14">
      <div className="flex items-center w-full h-full ps-5 sm:ps-8">
        <img className='h-10' src={logoImage} alt="" />
      </div>
      <div className='flex justify-end items-center pe-5 sm:hidden'>nav button</div>
      <div className='flex justify-end items-center pe-8 max-sm:hidden col-span-2 sm:space-x-6 md:space-x-10'>
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
