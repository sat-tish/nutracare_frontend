import React, {useEffect} from 'react'
import CenterCard from "../commonComponents/CenterCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImg from '../assets/images/background-images/b6.jpg'
import SectionHeading from "../commonComponents/SectionHeading";
import { Link } from "react-router";
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllCenters } from '../features/allCentersSlice';

const HomeCenters = () => {
  
  const dispatch = useDispatch();
    const {allCenters, loading, error} = useSelector((state)=>state.allCenters);
     useEffect(()=>{
        dispatch(fetchAllCenters());
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
        breakpoint: 1024,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const slideItems = allCenters.map((e)=>{
        return(
            <CenterCard key={e.id} cardImage={sliderImg} centerName={e.company.name} email={e.email} address={e.address.city}/>
        )
    });

  return (
    <section className="w-full my-[50px] bg-white">
      <div className="w-[90%] m-auto">
        <SectionHeading name="Find a Holistic center" />
            <div className="w-[90%] m-auto">
          <div className="slider-container">
      <Slider {...settings}>
        {slideItems}
      </Slider>
    </div>
        </div>
      </div>
      
        <div className="w-[90%] text-end mt-[50px]">
             <Link to="/allcenters" className="inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300">View more +</Link>  
         </div>
    </section>
  )
}

export default HomeCenters
