import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllProfessionals } from '../features/allProfessionalsSlice';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import personOne from '../assets/images/illustrations/person_1.jpg.webp'
import ProfessionalsCard from "../commonComponents/ProfessionalsCard";
import SectionHeading from "../commonComponents/SectionHeading";
import { Link } from 'react-router';

const HomeProffesionals = () => {

  const dispatch = useDispatch();
      const {allProfessionals, loading, error} = useSelector((state)=>state.allProfessionals);
       useEffect(()=>{
          dispatch(fetchAllProfessionals());
       },[dispatch]);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error.message}</div>;

    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
     
    ]
    
  };
      
    const slideItems = allProfessionals.map((e)=>{
        return(
            <ProfessionalsCard key={e.id} doctorName={e.name} cardImage={personOne} phone={e.phone} email={e.email}
            street={e.address.street} suite={e.address.suite} city={e.address.city}/>
        )
    });
    const slideItemsMobile = allProfessionals.map((e)=>{
     for(let i=[e.id]; i<5; i++){
              return(
                <div key={e.id} className="mb-6 m-auto">
                   <ProfessionalsCard  doctorName={e.name} cardImage={personOne} phone={e.phone} email={e.email}
            street={e.address.street} suite={e.address.suite} city={e.address.city}/>
                </div>
           
                    )
        }
      });


  return (
    <section className="w-full bg-[#EAF6FC] py-[50px]">
        <div className="w-[90%] m-auto">
          <SectionHeading name="Find a Health Professional near you" />
          </div>

          <div className="lg:hidden w-[90%] m-auto grid md:grid-cols-2 mb-5">
          {slideItemsMobile}
      </div>
           <div className="max-lg:hidden w-[90%] m-auto">
           <div className="slider-container">
           <Slider {...settings}>
           {slideItems}
            </Slider>
          </div>
         </div>
         <div className="w-[90%] text-end lg:mt-[50px]">
                <Link to={'/nutracare_frontend/allprofessionals'} className='inline-flex items-center px-10 py-1.5 text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300'>
                View All</Link>
        </div>
    </section>
   
   
  )
}

export default HomeProffesionals
