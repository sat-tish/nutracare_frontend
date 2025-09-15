import { Link } from "react-router"
import SectionHeading from "../commonComponents/SectionHeading"


const JoinUs = () => {
  return (
    <section className="w-full bg-[#f5fafc] mt-14">
      <div className="w-[90%] lg:w-[80%] xl:w-[70%] m-auto">
          <div className="pt-[50px]">
         <SectionHeading name="Join Us" />
          </div>
         <p className="text-center pb-[50px] px-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas aliquid esse, veritatis, autem iusto at, ullam quod nisi 
          et deleniti totam? Rerum cumque dignissimos voluptas aliquam obcaecati praesentium ut quisquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed reiciendis dolore eius dolor hic ex, voluptates error dicta ipsa eligendi repudiandae alias nesciunt? 
          Laboriosam facilis corporis sit maiores nobis ducimus.
         </p>
         </div>
      <div className="w-full py-[30px] bg-[#006D95] text-white flex flex-col items-center gap-3">
         <h1 className="text-2xl font-bold">Join Us Now</h1>
         <p className="text-center px-5">Send Your information on our email, in the following format.</p>
      </div>
      <div className="w-[90%] lg:w-[80%] xl:w-[70%] m-auto py-[50px]">
        <div className="w-full m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <h1>Category : Center / Professional</h1>
            <h1>Name</h1>
            <h1>Speciality</h1>
            <h1>Address</h1>
            <h1>Email id</h1>
            <h1>Conatct number</h1>
            <h1>Website address</h1>
            <h1>Available Services</h1>
            <h1>Experience</h1>
            <h1>Short Information</h1>
            <h1>Achievements</h1>
            <h1>Working Hours</h1>
            <h1>Contact number for Appointment</h1>
            <h1>Gallary (Maximum 10 Photos, max size of --kb)</h1>
        </div>
         <div className="mt-[50px] text-center">
                <Link to={'/allprofessionals'} className='inline-flex items-center px-3 py-1.5 font-semibold text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300'>
                Send Email Now</Link>
              
        </div>
      </div>
        
        
     
      
    </section>
  )
}

export default JoinUs
