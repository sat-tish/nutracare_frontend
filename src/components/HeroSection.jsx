
import HeroSectionLinks from "../commonComponents/HeroSectionLinks"
import SelectCity from "../commonComponents/SelectCity"
import DoctorCenter from "../commonComponents/DoctorCenter"
import SearchButton from "../commonComponents/SearchButton"
import Category from "../commonComponents/Category"

const HeroSection = () => {
  return (
    <section className="w-full md:h-[80vh] bg-gray-700 bg-[url('./assets/images/background-images/b2.jpg')] bg-no-repeat bg-cover bg-center bg-blend-soft-light mt-14">
    <div className="w-[90%] h-full m-auto lg:grid grid-cols-2">
         <div className="h-full flex justify-center items-center">
        <div className=" sm:w-[70%] my-[50px] bg-white py-5 rounded shadow">
            <h1 className="text-center text-2xl font-semibold mt-7 mb-7 px-5"> Find a Healthcare Professional / Center near you</h1>
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
              <HeroSectionLinks linkName="Physiotherapist" />
              <HeroSectionLinks linkName="Nutritionist" />
              <HeroSectionLinks linkName="Osteopathy" />
              <HeroSectionLinks linkName="Traditional Chinese" />
               
            </div>
            <div className="flex flex-col justify-center ">
              <HeroSectionLinks linkName="Homeopathy" />
              <HeroSectionLinks linkName="Ayurveda" />
              <HeroSectionLinks linkName="Yoga" />
              <HeroSectionLinks linkName="Accupressure" />
            </div>
            <div className="flex flex-col justify-center">
              <HeroSectionLinks linkName="Chiropractor" />
              <HeroSectionLinks linkName="Naturopathy" />
              <HeroSectionLinks linkName="Ozone therapy" />
              <HeroSectionLinks linkName="Find More +" />
            </div>
          </div>
     </div>
    
     
    </div>
    </section>
  )
}

export default HeroSection
