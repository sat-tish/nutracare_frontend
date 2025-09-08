import CenterCard from "./CenterCard"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImg from '../assets/images/background-images/b6.jpg'

const HomeCenters = () => {

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
          cardImage: sliderImg,
          centerName: "Noteworthy technology acquisitions",
         
          },
          {
              id:1,
          cardImage: sliderImg,
          centerName: "Noteworthy technology acquisitions",
         
          },
          {
              id:2,
          cardImage: sliderImg,
          centerName: "Noteworthy technology acquisitions",
         
          },
          {
              id:3,
          cardImage: sliderImg,
          centerName: "vimal lab",
         
          },
          {
              id:4,
          cardImage: sliderImg,
          centerName: "ss diagnostic",
         
          },
          {
              id:5,
          cardImage: sliderImg,
          centerName: "Noteworthy technology acquisitions",
         
          },
        
      ];
  const slideItems = professionalList.map((e)=>{
        return(
            
            <div className="max-w-sm">
              
                 <div key={e.id} class="w-[90%] bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
                      <div className='relative max-w-sm overflow-hidden bg-cover bg-no-repeat'>
                          <img class="rounded-t-lg h-50 max-h-50 transition duration-300 ease-in-out hover:scale-110" src={e.cardImage} alt="" />
                      </div>
                      <div class="p-5">
                          <a href="#">
                              <h5 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{e.centerName}</h5>
                          </a>
                          <p class="text-sm font-normal text-gray-700 dark:text-gray-400">Short address of center</p>
                          <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">emailaddress@gmail.com</p>
                          <h4 className='text-base font-semibold text-gray-900 mb-3'>Services -</h4>
                          <div className='flex flex-wrap justify-between gap-x-5 mb-6'>
                              <h6 className='text-sm font-normal text-gray-700 dark:text-gray-400'>Ayurveda</h6>
                              <h6 className='text-sm font-normal text-gray-700 dark:text-gray-400'>Chiropractor</h6>
                              <h6 className='text-sm font-normal text-gray-700 dark:text-gray-400'>Physiotherapy</h6>
                              <h6 className='text-sm font-normal text-gray-700 dark:text-gray-400'>Traditional Chinese medicine</h6>
                          </div>
                          <div className='text-end'>
                          <a href="#" class="inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#0086C6] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read more +
                          </a>
                          </div>
                      </div>
                  </div> 
            </div>
        )
    });

  return (
    <section className="w-full my-[50px] bg-white">
      <div className="w-[90%] m-auto">
          <h1 className="text-center text-2xl mb-[50px]">Find a Holistic center</h1>
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
    // <section className="w-[80%] m-auto my-[50px] bg-white">
    //    <h1 className="text-center text-2xl mb-[50px]">Find a Holistic center</h1>
    //    <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    //      <div>
    //        <CenterCard />
    //      </div>
    //      <div>
    //        <CenterCard />
    //      </div>
    //      <div>
    //        <CenterCard />
    //      </div>
    //      <div>
    //        <CenterCard />
    //      </div>
    //    </div>
    // </section>
  )
}

export default HomeCenters
