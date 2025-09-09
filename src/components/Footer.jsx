


const Footer = () => {
  return (
    <section className="w-full bg-white py-[50px]">
      <div className="w-[90%] m-auto grid lg:grid-cols-2 gap-8">
        <div className="w-full lg:w-[80%] flex flex-col justify-center gap-5"> 
          <h1 className="font-medium">Nutracare 360 Inc.</h1>
          <p className="text-sm text-gray-700 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam cum maxime laudantium laborum, nulla, magni </p>
          <div className="flex flex-wrap justify-between">
            <div className="mb-5">
               <h1 className="mb-1 font-semibold">Contact Us </h1>
               <p className="text-sm text-gray-700">nutracare360@gmail.com</p>
            </div>
            <div className="mb-5">
              <h1 className="mb-3 font-medium">Connect on Social Media</h1>
              <div className="w-full flex gap-3 justify-center ">
                <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-100 flex justify-center items-center">
                    <h6>F</h6>
                </div>
                <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-100 flex justify-center items-center">
                    <h6>F</h6>
                </div>
                <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-100 flex justify-center items-center">
                    <h6>F</h6>
                </div>
                <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-100 flex justify-center items-center">
                    <h6>F</h6>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
         
            <div className="flex flex-col gap-3 mb-3">
              <h1 className="font-medium mb-2">Links</h1>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Home</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Categories</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Blogs</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">About us</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Join us</a>
            </div>
            <div className="flex flex-col gap-3 mb-3">
              <h1 className="font-medium mb-2">Top Categories</h1>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Physiotherapist</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Nutritionist</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Osteopathy</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Accupuncture</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Traditional Chinease medicine</a>
            </div>
             <div className="flex flex-col gap-3 mb-3">
              <h1 className="font-medium mb-2">Top Categories</h1>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Homeopathy</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Ayurveda</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Yoga</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Massage Therapist</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Accupressure</a>
            </div>
            <div className="flex flex-col gap-3 mb-3">
              <h1 className="font-medium mb-2">Top Categories</h1>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Chiropractor</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Naturopathy</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Ozone Therapy</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Prolotherapy</a>
              <a className="text-sm text-gray-700 hover:text-gray-900 hover:font-medium" href="">Reflexology</a>
            </div>
          
         
        </div>
      </div>
      <div className="mt-[80px] px-5">
         <h1 className="text-sm text-center text-gray-700">Copyright ©2024 All rights reserved | Made by Canayu Nutracare 360 Pvt Ltd.</h1>
      </div>
    </section>
  )
}

export default Footer
