import { Link } from "react-router"


const ProfessionalsCard = (props) => {
  return (
      <div key={props.key} className="max-lg:w-full max-w-sm">
                <div className="max-w-[90%] bg-white border border-gray-300 rounded-lg shadow  m-auto">
                    
                        <img className="rounded-sm w-[300px] h-[300px] m-auto pt-6 px-5" src={props.cardImage} alt="" />
                    
                          
                    
                      <div className="p-5">
                          
                          <h1 className="mb-4 text-lg font-semibold text-gray-900 ">{props.doctorName}</h1>
                          <p className="mb-3 text-sm font-medium text-gray-900 dark:text-gray-400">Speciality</p>
                          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{props.street}, {props.suite}, {props.city}</p>
                          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{props.email}</p>
                          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{props.phone}</p>
                          <div className='text-end'>
                          <Link to={'/nutracare_frontend/singleprofessional'} className="inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#0086C6] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300">
                              View more +
                          </Link>
                          </div>
                      </div>
                  </div>
            </div>
  )
}

export default ProfessionalsCard
