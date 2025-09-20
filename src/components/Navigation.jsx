import logoImage from '../assets/images/illustrations/Nutracare_multi_logo.jpg'
import { NavLink} from "react-router"
import NavMenu from '../commonComponents/NavMenu'
import NavDropdownButton from '../commonComponents/NavDropdownButton'

const Navigation = () => {
  return (

    <nav className="grid max-md:grid-cols-2 grid-cols-3 shadow bg-white w-full h-14 fixed top-0 z-30">
      <div className="flex items-center w-full h-full ps-5 sm:ps-8">
        <img className='h-10' src={logoImage} alt="" />
      </div>
      <div className='flex justify-end items-center pe-5 md:hidden'>
        <NavDropdownButton />
      </div>
      <div className='flex justify-end items-center pe-8 max-md:hidden col-span-2 space-x-8 lg:space-x-10 font-medium'>
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



