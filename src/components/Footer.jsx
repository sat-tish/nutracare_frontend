import { Link } from "react-router"
import SocialMediaIcons from "../commonComponents/socialMediaIcons"
import FooterLinkCategories from "../commonComponents/FooterLinkCategories"



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
              <SocialMediaIcons />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
         
            <div className="flex flex-col gap-3 mb-3">
              <h1 className="font-medium mb-2 text-white">Links</h1>
              <FooterLinkCategories linkTo="/nutracare_frontend" linkName="Home" />
              <FooterLinkCategories linkTo="/categories" linkName="Categories" />
              <FooterLinkCategories linkTo="/blogs" linkName="Blogs" />
              <FooterLinkCategories linkTo="/aboutus" linkName="About us" />
              <FooterLinkCategories linkTo="/joinus" linkName="Join us" />
            </div>
            <div className="flex flex-col gap-3 mb-3">
              <h1 className="font-medium mb-2 text-white">Top Categories</h1>
              <FooterLinkCategories linkTo="/categories" linkName="Physiotherapist" />
              <FooterLinkCategories linkTo="/categories" linkName="Nutritionist" />
              <FooterLinkCategories linkTo="/categories" linkName="Osteopathy" />
              <FooterLinkCategories linkTo="/categories" linkName="Accupuncture" />
              <FooterLinkCategories linkTo="/categories" linkName="Traditional Chinease medicine" />
            </div>
             <div className="flex flex-col gap-3 mb-3">
              <h1 className="font-medium mb-2 text-white">Top Categories</h1>
              <FooterLinkCategories linkTo="/categories" linkName="Homeopathy" />
              <FooterLinkCategories linkTo="/categories" linkName="Ayurveda" />
              <FooterLinkCategories linkTo="/categories" linkName="Yoga" />
              <FooterLinkCategories linkTo="/categories" linkName="Massage Therapist" />
              <FooterLinkCategories linkTo="/categories" linkName="Accupressure" />
             </div>
            <div className="flex flex-col gap-3 mb-3">
              <h1 className="font-medium mb-2 text-white">Top Categories</h1>
              <FooterLinkCategories linkTo="/categories" linkName="Chiropractor" />
              <FooterLinkCategories linkTo="/categories" linkName="Naturopathy" />
              <FooterLinkCategories linkTo="/categories" linkName="Ozone Therapy" />
              <FooterLinkCategories linkTo="/categories" linkName="Prolotherapy" />
              <FooterLinkCategories linkTo="/categories" linkName="Reflexology" />
            </div>
          
         
        </div>
      </div>
      <div className="mt-[80px] px-5">
         <h1 className="text-sm text-center text-gray-100">Copyright ©2024 All rights reserved | Made by Nutracare 360 Pvt Ltd.</h1>
      </div>
    </section>
  )
}

export default Footer
