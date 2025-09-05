
import { Link } from "react-router"
import SelectCity from "./SelectCity"
import DoctorCenter from "./DoctorCenter"
import Category from "./Category"

const HeroSection = () => {
  return (
    <div className="w-full md:h-[80vh] bg-gray-800 bg-[url('./assets/images/background-images/b2.jpg')] bg-no-repeat bg-cover bg-center bg-blend-soft-light">
    <div className="w-[90%] h-full m-auto lg:grid grid-cols-2">
         <div className="h-full flex justify-center items-center">
        <div className=" sm:w-[70%] my-[50px] bg-white py-5 rounded shadow">
            <h1 className="text-center mt-5 mb-7 px-5"> Find a Healthcare Professional / Center near you</h1>
            <form action="" className="w-[90%] flex flex-col justify-center gap-y-4 m-auto">
                <SelectCity />
                <DoctorCenter />
                <Category />
                <button type="button" class="mb-5 w-[90%] m-auto text-white bg-[#0086C6] hover:bg-[#0473B9] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
            </form>
        </div>
     </div>
        <div className="m-auto text-white max-md:hidden">
          <h1 className=" text-4xl font-semibold mb-[50px]">Nutracare Holistic way of Healing</h1>
          <div className="grid grid-cols-3 m-2 text-sm">
            <div className="flex flex-col justify-center ">
                <Link className="text-gray-200 hover:text-white mb-1">Physiotherapist</Link>
                <Link className="text-gray-200 hover:text-white mb-1">Nutritionist</Link>
                <Link className="text-gray-200 hover:text-white mb-1">Osteopathy</Link>
                <Link className="text-gray-200 hover:text-white mb-1">Traditional Chinese</Link>
               
            </div>
            <div className="flex flex-col justify-center ">
                <Link className="text-gray-200 hover:text-white mb-1">Homeopathy</Link>
                <Link className="text-gray-200 hover:text-white mb-1">Ayurveda</Link>
                <Link className="text-gray-200 hover:text-white mb-1">Yoga</Link>
                <Link className="text-gray-200 hover:text-white mb-1">Accupressure</Link>
            </div>
            <div className="flex flex-col justify-center ">
                <Link className="text-gray-200 hover:text-white mb-1">Chiropractor</Link>
                <Link className="text-gray-200 hover:text-white mb-1">Naturopathy</Link>
                <Link className="text-gray-200 hover:text-white mb-1">Ozone therapy</Link>
                <Link className="text-gray-200 hover:text-white mb-1">Find More +</Link>
            </div>
          </div>
     </div>
    
     
    </div>
    </div>
  )
}

export default HeroSection
