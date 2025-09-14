import centerName from '../assets/images/illustrations/yogaImage.jpg'
import SililarCenters from '../components/SililarCenters';
import SimilarProfessionals from '../components/SimilarProfessionals';
import SingleGallary from '../components/SingleGallary';
import WeekTimings from '../components/WeekTimings';

const SingleCenter = () => {
  return (
     <section className='w-full bg-[#f5fafc]'>
     <div className="w-[90%] md:w-[80%] lg:w-[70%] m-auto py-[50px]">
                <div className="w-[95%] pb-5 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                       <div  className="w-full flex flex-wrap gap-x-5 xl:gap-x-[100px] items-center ">
                          <div className='max-md:m-auto'>
                             <img className=" rounded-[50%] w-[300px] h-[300px] p-5 " src={centerName} alt="" />
                          </div>
                          
                     
                          <div className="p-5">
                              <h1 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Name of Center</h1>
                           <p className="mb-3 text-sm font-medium text-gray-900 dark:text-gray-400">Speciality</p>
                          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">address of center</p>
                          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">emailaddress@email.com</p>
                          <p className="mb-5 text-sm font-normal text-gray-700 dark:text-gray-400">phone number</p>
                          <div className='flex gap-5 justify-between'>
                             <button className='inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                             Contact now</button>
                             <button className='inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                             Visit Website</button>
                          </div>
                           
                         </div>
                       </div>
                  <div className='flex flex-col p-5 gap-2'>
                    <h1 className='font-semibold'>Services :</h1>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm text-gray-700'>
                       <p>Chiropractice</p>
                       <p>Chiropractice</p>
                       <p>Chiropractice</p>
                       <p>Chiropractice</p>
                       <p>Chiropractice</p>
                       <p>Chiropractice</p>
                    </div>
                    <hr className='h-[1px] bg-gray-300 border-none mt-4' />
        
                     <h1 className='font-semibold  mt-3'>Short Information : </h1>
                     <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed quae facere aliquam, ducimus dicta ad, assumenda neque minus eos, 
                      cumque aperiam natus fuga accusantium dolore! Molestiae minus non ipsum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nostrum repellendus natus nesciunt ab soluta asperiores itaque omnis, nobis, quod assumenda 
                      inventore reiciendis sed, tenetur optio dolorem possimus dolore non?</p>
                      <hr className='h-[1px] bg-gray-300 border-none mt-4' />
                      <h1 className='font-semibold  mt-3'>Achievements : </h1>
                     <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed quae facere aliquam, ducimus dicta ad, assumenda neque minus eos, 
                      cumque aperiam natus fuga accusantium dolore! Molestiae minus non ipsum! Lorem ipsum </p>
                      <hr className='h-[1px] bg-gray-300 border-none mt-4' />
                      <h1 className='font-semibold  mt-3'>Working Hours : </h1>
                      <WeekTimings />

                      <hr className='h-[1px] bg-gray-300 border-none mt-4' />
                      <h1 className='font-semibold  mt-3'>Customer Reviews : </h1>
                      <div className='flex'>
                        <div className='shrink-0'>
                          <img className="rounded-[50%] w-[90px] h-[90px] p-5" src={centerName} alt="" />
                        </div>
                        <div className='flex flex-col'>
                          <h1 className='font-semibold  mt-2'>Customer name </h1>
                          <p className='text-sm text-gray-700'>Lorem ipsum rerum a quibusdam nulla, ut sit harum omnis commodi?</p>
                          <div className='text-sm'>
                        star star star star star
                      </div>
                        </div>
                        <hr className='h-[1px] bg-gray-300 border-none mt-4' />
                      </div>
                      
                     
                  
                  <div className='text-end mt-5'>
                    <button className='inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Book Appointment</button>
                  </div>
                  </div>
                  
          
                </div>

            
               
            </div>
            <div className='w-[90%] m-auto mb-5'>
                    <SingleGallary />
            </div>
            <SililarCenters />
            </section>
  )
}

export default SingleCenter
