import { Link } from "react-router"



const Footer = () => {
  return (
    <section className="w-full bg-[#006D95] py-[50px]">
      <div className="w-[90%] m-auto grid lg:grid-cols-2 gap-8">
        <div className="w-full lg:w-[80%] flex flex-col justify-center gap-5"> 
          <h1 className="font-medium text-white">Nutracare 360 Inc.</h1>
          <p className="text-sm text-gray-100 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam cum maxime laudantium laborum, nulla, magni </p>
          <div className="flex flex-wrap justify-between">
            <div className="mb-5">
               <h1 className="mb-1 font-semibold text-white">Contact Us </h1>
               <Link to={''} className="text-sm text-gray-100 hover:font-medium">nutracare360@gmail.com</Link>
            </div>
            <div className="mb-5">
              <h1 className="mb-3 font-medium text-white">Connect on Social Media</h1>
              <div className="w-full flex gap-3 justify-center ">
                <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-100 flex justify-center items-center">
                    <h6>F</h6>
                </div>
                <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-100 flex justify-center items-center">
                    <h6>F</h6>
                </div>
                <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-100 flex justify-center items-center">
                    <h6>F</h6>
                </div>
                <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-100 flex justify-center items-center">
                    <h6>F</h6>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
         
            <div className="flex flex-col gap-3 mb-3">
              <h1 className="font-medium mb-2 text-white">Links</h1>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/'}>Home</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Categories</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/blogs'}>Blogs</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/aboutus'}>About us</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/joinus'}>Join us</Link>
            </div>
            <div className="flex flex-col gap-3 mb-3">
              <h1 className="font-medium mb-2 text-white">Top Categories</h1>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Physiotherapist</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Nutritionist</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Osteopathy</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Accupuncture</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Traditional Chinease medicine</Link>
            </div>
             <div className="flex flex-col gap-3 mb-3">
              <h1 className="font-medium mb-2 text-white">Top Categories</h1>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Homeopathy</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Ayurveda</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Yoga</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Massage Therapist</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Accupressure</Link>
            </div>
            <div className="flex flex-col gap-3 mb-3">
              <h1 className="font-medium mb-2 text-white">Top Categories</h1>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Chiropractor</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Naturopathy</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Ozone Therapy</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Prolotherapy</Link>
              <Link className="text-sm text-gray-100 hover:text-white hover:font-medium" to={'/categories'}>Reflexology</Link>
            </div>
          
         
        </div>
      </div>
      <div className="mt-[80px] px-5">
         <h1 className="text-sm text-center text-gray-100">Copyright ©2024 All rights reserved | Made by Canayu Nutracare 360 Pvt Ltd.</h1>
      </div>
    </section>
  )
}

export default Footer
