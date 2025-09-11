
import { Link } from "react-router"
import SelectCity from "./SelectCity"
import DoctorCenter from "./DoctorCenter"
import Category from "./Category"
import SearchButton from "./SearchButton"

const HeroSection = () => {
  return (
    <div className="w-full md:h-[80vh] bg-gray-700 bg-[url('./assets/images/background-images/b2.jpg')] bg-no-repeat bg-cover bg-center bg-blend-soft-light">
    <div className="w-[90%] h-full m-auto lg:grid grid-cols-2">
         <div className="h-full flex justify-center items-center">
        <div className=" sm:w-[70%] my-[50px] bg-white py-5 rounded shadow">
            <h1 className="text-center font-semibold mt-7 mb-7 px-5"> Find a Healthcare Professional / Center near you</h1>
            <form action="" className="w-[84%] flex flex-col justify-center gap-y-4 m-auto mb-5">
                <SelectCity />
                <DoctorCenter />
                <Category />
                <SearchButton />
            </form>
        </div>
     </div>
        <div className="m-auto text-white max-lg:hidden">
          <h1 className=" text-4xl font-bold mb-[50px]">Nutracare Holistic way of Healing</h1>
          <div className="grid grid-cols-3 m-2 text-sm font-semibold">
            <div className="flex flex-col justify-center ">
                <Link to={'/categories'} className="text-gray-200 hover:text-white mb-1">Physiotherapist</Link>
                <Link to={'/categories'} className="text-gray-200 hover:text-white mb-1">Nutritionist</Link>
                <Link to={'/categories'} className="text-gray-200 hover:text-white mb-1">Osteopathy</Link>
                <Link to={'/categories'} className="text-gray-200 hover:text-white mb-1">Traditional Chinese</Link>
               
            </div>
            <div className="flex flex-col justify-center ">
                <Link to={'/categories'} className="text-gray-200 hover:text-white mb-1">Homeopathy</Link>
                <Link to={'/categories'} className="text-gray-200 hover:text-white mb-1">Ayurveda</Link>
                <Link to={'/categories'} className="text-gray-200 hover:text-white mb-1">Yoga</Link>
                <Link to={'/categories'} className="text-gray-200 hover:text-white mb-1">Accupressure</Link>
            </div>
            <div className="flex flex-col justify-center">
                <Link to={'/categories'} className="text-gray-200 hover:text-white mb-1">Chiropractor</Link>
                <Link to={'/categories'} className="text-gray-200 hover:text-white mb-1">Naturopathy</Link>
                <Link to={'/categories'} className="text-gray-200 hover:text-white mb-1">Ozone therapy</Link>
                <Link to={'/categories'} className="text-gray-200 hover:text-white mb-1">Find More +</Link>
            </div>
          </div>
     </div>
    
     
    </div>
    </div>
  )
}

export default HeroSection
