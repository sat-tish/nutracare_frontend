import React, {useState, useEffect} from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import personOne from '../assets/images/illustrations/person_1.jpg.webp'
// import personFive from '../assets/images/illustrations/person_5.jpg.webp'
// import personSix from '../assets/images/illustrations/person_6.jpg.webp'
import ProfessionalsCard from "../commonComponents/ProfessionalsCard";
import SectionHeading from "../commonComponents/SectionHeading";
import { Link } from 'react-router';

const HomeProffesionals = () => {

 const[doctorList, setDoctorList] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
          setDoctorList(res.data);
          setLoading(false);
        }
      )
        .catch((err)=>{
          console.log(err);
          setError(error);
          setLoading(false);
        }
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
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
      
    const slideItems = doctorList.map((e)=>{
        return(
            <ProfessionalsCard key={e.id} doctorName={e.name} cardImage={personOne} phone={e.phone} email={e.email}
            street={e.address.street} suite={e.address.suite} city={e.address.city}/>
        )
    });


  return (
    <section className="w-full bg-[#EAF6FC] py-[50px]">
        <div className="w-[90%] m-auto">
          <SectionHeading name="Find a Health Professional near you" />
           <div className="w-[90%] m-auto">
           <div className="slider-container">
           <Slider {...settings}>
           {slideItems}
      </Slider>
          </div>
           </div>
       
        
        </div>
         <div className="w-[90%] text-end mt-[50px]">
                <Link to={'/allprofessionals'} className='inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                View more +</Link>
        </div>
    </section>
   
   
  )
}

export default HomeProffesionals
