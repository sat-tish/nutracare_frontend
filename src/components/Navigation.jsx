import logoImage from '../assets/images/illustrations/Nutracare_multi_logo.jpg'
import { NavLink} from "react-router"
import NavMenu from '../commonComponents/NavMenu'

const Navigation = () => {
  return (

    <nav className="grid max-sm:grid-cols-2 grid-cols-3 shadow bg-white w-full h-14 fixed top-0 z-40">
      <div className="flex items-center w-full h-full ps-5 sm:ps-8">
        <img className='h-10' src={logoImage} alt="" />
      </div>
      <div className='flex justify-end items-center pe-5 sm:hidden'>
       <button className="flex items-center justify-center border-[1px] bg-white text-gray-700 hover:text-gray-900 font-bold py-1 px-1 rounded">
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
         </svg>
      </button>
      </div>
      <div className='flex justify-end items-center pe-8 max-sm:hidden col-span-2 sm:space-x-6 md:space-x-10 font-medium'>
       <NavLink to="/nutracare_frontend/" className={({ isActive }) =>isActive ? 'font-semibold' : 'font-medium'}>Home</NavLink>
       <NavMenu />
       <NavLink to="/nutracare_frontend/blogs" className={({ isActive }) =>isActive ? 'font-semibold' : 'font-medium'}>Blogs</NavLink>
       <NavLink to="/nutracare_frontend/aboutus" className={({ isActive }) =>isActive ? 'font-semibold' : 'font-medium'}>About Us</NavLink>
       <NavLink to="/nutracare_frontend/joinus" className={({ isActive }) =>isActive ? 'font-semibold' : 'font-medium'}>Join Us</NavLink>

       
      </div>

    </nav>
  )
}

export default Navigation



