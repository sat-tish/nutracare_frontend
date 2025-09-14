import { Link } from "react-router"


const SuccessStoriesCard = (props) => {
  return (
    <div className="w-[90%] m-auto">
                <div key={props.key} className="w-[95%] pb-5">
                       <div  className="w-full flex flex-wrap gap-3 justify-center items-center bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                     
                          <img className="flex-1 rounded-sm w-[300px] md:max-w-[380px] p-5 m-auto" src={props.cardImage} alt="" />
                     
                      <div className="p-5 flex-1">
                          
                              <Link to={'/singlesuccessstory'} className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{props.doctorName}</Link>
                         
                          <p className="mb-3 text-sm font-medium text-gray-900 dark:text-gray-400">Speciality</p>
                          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{props.street}, {props.suite}, {props.city}</p>
                          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{props.email}</p>
                          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minus quam vero architecto nam iure modi inventore facere non exercitationem ea veniam,
                             saepe autem unde? Soluta natus praesentium beatae perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam magni quibusdam quaerat enim? Consectetur aut consequuntur harum officiis sint sapiente architecto
                              et voluptas velit eveniet eum ab accusamus, beatae repudiandae!</p>
                          <div className='text-end'>
                          <Link to={'/singlesuccessstory'} className=" text-center text-[#0473B9]">
                              Read more +
                          </Link>
                          </div>
                      </div>
                  </div>
                </div>
               
            </div>
  )
}

export default SuccessStoriesCard
