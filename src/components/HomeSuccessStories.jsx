import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import personOne from '../assets/images/illustrations/person_1.jpg.webp'
import personFive from '../assets/images/illustrations/person_5.jpg.webp'
import personSix from '../assets/images/illustrations/person_6.jpg.webp'
import SuccessStoriesCard from "./SuccessStoriesCard";

const HomeSuccessStories = () => {
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    
  };
const successStoryList = [
        {
            id:0,
        cardImage: personOne,
        doctorName: "Dr Louis Henry",
       
        },
        {
            id:1,
        cardImage: personFive,
        doctorName: "Dr Richard Henry",
       
        },
        {
            id:2,
        cardImage: personSix,
        doctorName: "DR Thomos Cook",
       
        },
        {
            id:3,
        cardImage: personOne,
        doctorName: "Dr Richard Henry",
       
        },
        {
            id:4,
        cardImage: personFive,
        doctorName: "DR Thomos Cook",
       
        },
        {
            id:5,
        cardImage: personSix,
        doctorName: "Dr Richard Henry",
       
        },
      
    ];
    const slideItems = successStoryList.map((e)=>{
        return(
            <SuccessStoriesCard key={e.id} cardImage={e.cardImage} doctorName={e.doctorName} />   
        )
    });

  return (
    <section className="w-full bg-[#dbf0fb] py-[50px]">
        <div className="w-[90%] m-auto">
            <h1 className="text-center text-2xl font-semibold mb-[30px]">Success Stories</h1>
           <div className="w-[90%] md:w-[80%] lg:w-[60%] xl:[50%] m-auto">
           <div className="slider-container">
           <Slider {...settings}>
           {slideItems}
      </Slider>
          </div>
           </div>
       
        
        </div>
         <div className="w-[90%] m-auto text-center mt-[50px]">
                <a href="#" class="inline-flex items-center px-15 py-3 text-sm text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              View All 
                </a>
        </div>
    </section>
  )
}

export default HomeSuccessStories
