
import SectionHeading from "../commonComponents/SectionHeading"
import personOne from '../assets/images/illustrations/person_1.jpg.webp'
import SimilarSuccessStories from "../components/SimilarSuccessStories"


const SingleSuccessStory = () => {

  return (
    <section className='w-full bg-[#f5fafc] mt-14 py-[50px]'>
     <div className="w-[90%] md:w-[80%] lg:w-[70%] m-auto ">
                <div className="w-[95%] pb-5 bg-white border border-gray-300 rounded-lg shadow">
                       <div  className="w-full flex flex-wrap gap-x-5 justify-center items-center ">
                     
                          <img className="flex-1 rounded-sm w-[300px] md:max-w-[380px] p-5 m-auto" src={personOne} alt="" />
                     
                          <div className="p-5 flex-1">
                              <h1 className="mb-2 text-lg font-semibold text-gray-900">Doctor Name</h1>
                              
                         
                          <p className="mb-3 text-sm font-medium text-gray-900">Speciality</p>
                          <p className="mb-3 text-sm font-normal text-gray-700">address of clinic</p>
                          <p className="mb-3 text-sm font-normal text-gray-700">emailaddress@email.com</p>
                          <p className="mb-5 text-sm font-normal text-gray-700">phone number</p>
                           <button className='inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300'>
                             View more +</button>
                          
                      </div>
                  </div>
                  <div className='p-5'>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloribus aut eveniet quasi aliquid delectus facilis?
                       Itaque recusandae commodi aperiam quo, omnis maxime reiciendis assumenda quaerat sunt? Ullam, a eaque.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat, eius odio esse voluptatem eligendi a officia ratione doloremque ab 
                       quisquam est quia hic. Similique quo eius quisquam dolores explicabo?
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque obcaecati eius laudantium necessitatibus praesentium, reprehenderit ea, magni, molestias neque quas
                        maxime incidunt nisi! Velit similique veritatis, laborum delectus magni quibusdam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque iste ab omnis voluptatibus ad esse, nostrum quaerat illum rem quis adipisci ipsam 
                        tenetur nobis saepe explicabo? Minus, earum voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo placeat consequuntur, quia iusto eveniet ullam hic accusamus
                         nam dolore sed nihil distinctio quam eum rerum atque exercitationem odit expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, culpa. Mollitia obcaecati ab nihil sunt recusandae assumenda nulla adipisci ut corporis
                          non tempore animi, cum vero consectetur qui, provident architecto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores dolorum tempora, ad ullam amet repellat ea repellendus quo distinctio aut
                           nisi excepturi dicta perspiciatis ducimus temporibus natus cumque earum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore rem quas autem labore dolor. Odit dicta consequuntur vitae repellat, aperiam sunt non suscipit 
                           praesentium repudiandae, amet accusantium! Facilis, repellat voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat saepe maiores iusto nihil reiciendis vel, accusamus assumenda animi iste error molestiae 
                           corporis ratione architecto dolorum repellat. Fuga, repudiandae in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos nostrum fugit. Dolore nemo fugit eos. Vitae nesciunt corporis officiis voluptatem 
                           suscipit, quia dolorem quae provident iste sint nostrum accusamus!</p>
                  </div>
                  <div className='flex justify-between p-5'>
                        <button className='inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300'>
                View more +</button>
                <button className='inline-flex items-center px-5 py-3 text-sm text-center text-white bg-[#078d07] hover:bg-[#024c02] rounded focus:ring-4 focus:outline-none focus:ring-blue-300'>
                Book Appointment</button>
                  </div>
                </div>

                <div className="w-full">
                     <div className="my-[50px]">
                        <SectionHeading name="View similar Success Stories" />
                     </div>
                    </div>
               
            </div>
            <SimilarSuccessStories />
            </section>
  )
}

export default SingleSuccessStory
