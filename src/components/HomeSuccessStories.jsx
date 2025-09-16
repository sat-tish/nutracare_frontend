import React, {useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import personOne from '../assets/images/illustrations/person_1.jpg.webp'
import SuccessStoriesCard from "../commonComponents/SuccessStoriesCard";
import SectionHeading from "../commonComponents/SectionHeading";
import { Link } from 'react-router';
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllSuccessStories } from '../features/allSuccessStories';

const HomeSuccessStories = () => {
 const dispatch = useDispatch();
   const {allSuccessStories, loading, error} = useSelector((state)=>state.allSuccessStories);
    useEffect(()=>{
       dispatch(fetchAllSuccessStories());
    },[dispatch]);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error.message}</div>;

    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    
  };

    const slideItems = allSuccessStories.map((e)=>{
        return(
            <SuccessStoriesCard key={e.id} cardImage={personOne} doctorName={e.name} email={e.email}
            street={e.address.street} suite={e.address.suite} city={e.address.city} />   
        )
    });

  return (
    <section className="w-full bg-[#dbf0fb] py-[50px]">
        <div className="w-[90%] m-auto">
            <SectionHeading name="Success Stories"/>
           <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:[60%] m-auto">
           <div className="slider-container">
           <Slider {...settings}>
           {slideItems}
      </Slider>
          </div>
           </div>
       
        
        </div>
         <div className="w-[90%] m-auto text-center mt-[50px]">
                <Link to={'/nutracare_frontend/allsuccessstories'} className="inline-flex items-center px-15 py-3 text-sm text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300">
                              View All 
                </Link>
        </div>
    </section>
  )
}

export default HomeSuccessStories
