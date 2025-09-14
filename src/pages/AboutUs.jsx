import SectionHeading from "../components/SectionHeading"
import logoImage from '../assets/images/illustrations/Nutracare_multi_logo.jpg'
import personOne from '../assets/images/illustrations/person_1.jpg.webp'


const AboutUs = () => {

 const ourTeam = [
  {
    name: "Dr Manisha Sonawane",
    Designation: "CEO, Nutracare360 Inc.",
    speciality: "Homeopathic Consultant"
  },
  {
    name: "Mr Anand Bansode",
    Designation: "CMO, Nutracare360 Inc.",
    speciality: "Entrepreneur"
  },
  {
    name: "Satish Sonawane",
    Designation: "CTO, Nutracare360 Inc.",
    speciality: "Nutritionist"
  },
  {
    name: "Andrew",
    Designation: " Nutracare360 Inc.",
    speciality: "Business Consultant"
  },
  {
    name: "Annie-Merry",
    Designation: " Nutracare360 Inc.",
    speciality: "Business Consultant"
  },
  {
    name: "Akshaya Bansode",
    Designation: "Nutracare360 Inc.",
    speciality: " Consultant"
  },
 ];
 const ourTeamList = ourTeam.map((e)=>{
  return (
              <div className=" w-full m-auto flex flex-col items-center gap-1 mb-5">
                <img className="rounded-[50%] w-[150px] h-[150px]" src={personOne} alt="" />
                <h1 className="font-semibold mt-5">{e.name}</h1>
                <h2 className="text-sm">{e.Designation}</h2>
                <h2 className="text-sm font-semibold">{e.speciality}</h2>
             </div>
  )
 })

  return (
    <section className="w-full bg-[#f5fafc]">
      <div className="pt-[50px]">
         <SectionHeading name="About Us" />
      </div>
      <div className="w-[90%] m-auto grid lg:grid-cols-2 gap-5">
          <div className="flex w-full justify-center px-5 m-auto"> 
                 <img className="rounded w-[350px] h-[200px]" src={logoImage} alt="" />
          </div>
          <div className="flex w-full justify-center p-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam at maxime ducimus mollitia deserunt quae, reprehenderit unde eius harum,
               molestiae soluta nobis expedita modi repellendus laborum. Exercitationem, ratione voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta harum optio ullam fugit quas repudiandae laborum quisquam 
               ipsa odit esse, error modi at minima obcaecati debitis totam itaque? Impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dolorum sunt commodi, impedit qui illo fugit incidunt dicta beatae! Eum quae 
               facilis dolorum culpa exercitationem provident molestias veritatis et unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsa, officiis aliquid maxime neque dolores nisi! Similique vero aliquid repellendus natus. 
               Dolorem, obcaecati harum ut maiores expedita facilis doloremque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deserunt quo, maxime eveniet ipsam iste totam officia nulla repellendus ab similique exercitationem 
               illo consequatur architecto temporibus! Quis modi veritatis tenetur. 
            </p>
          </div>
      </div>
       <hr className='h-[1px] bg-gray-300 border-none mt-4' />
      <div className="pt-[50px]">
         <SectionHeading name="Our Team" />
      </div>
     
      <div className="lg:w-[80%] xl:w-[60%] m-auto grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {ourTeamList}
      </div>
       <hr className='h-[1px] bg-gray-300 border-none mt-4' />
      <div className="w-[90%] xl:w-[80%] m-auto flex flex-col gap-3 py-[50px]">
         <h1 className="font-semibold text-2xl mb-3">Contact Us :</h1>
         <h2 className="font-semibold">Address :</h2>
         <p className="mb-3">Address of the company</p>
         <h2 className="font-semibold">Email Id :</h2>
         <p className="mb-3">contactus@gmail.com</p>
         <h2 className="font-semibold">Contact number :</h2>
         <p>Phone number</p>
      </div>
    </section>
  )
}

export default AboutUs
