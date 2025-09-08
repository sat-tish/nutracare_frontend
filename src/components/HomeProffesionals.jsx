
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImg from '../assets/images/background-images/b6.jpg'
import personOne from '../assets/images/illustrations/person_1.jpg.webp'
import personFive from '../assets/images/illustrations/person_5.jpg.webp'
import personSix from '../assets/images/illustrations/person_6.jpg.webp'

const HomeProffesionals = () => {
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
       const professionalList = [
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
    const slideItems = professionalList.map((e)=>{
        return(
            
            <div className="max-w-sm">
                <div key={e.id} class="w-[90%] bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
                     
                          <img class="rounded-sm w-60 h-60 m-auto pt-6" src={e.cardImage} alt="" />
                     
                      <div class="p-5">
                          <a href="#">
                              <h5 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{e.doctorName}</h5>
                          </a>
                          <p class="mb-3 text-sm font-normal text-gray-900 dark:text-gray-400">Speciality</p>
                          <p class="text-sm font-normal text-gray-700 dark:text-gray-400">Clinic address</p>
                          <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">emailaddress@gmail.com</p>
                          <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">contact number</p>
                          <div className='text-end'>
                          <a href="#" class="inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#0086C6] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              View more +
                          </a>
                          </div>
                      </div>
                  </div>
            </div>
        )
    });


  return (
    <section className="w-full bg-[#EAF6FC] py-[50px]">
        <div className="w-[90%] m-auto">
            <h1 className="text-center text-2xl mb-[50px]">Find a Health Professional near you</h1>
           <div className="w-[90%] m-auto">
           <div className="slider-container">
           <Slider {...settings}>
           {slideItems}
      </Slider>
          </div>
           </div>
       
        
        </div>
         <div className="w-[90%] text-end mt-[50px]">
                <a href="#" class="inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              View more +
                </a>
        </div>
    </section>
   
   
  )
}

export default HomeProffesionals
