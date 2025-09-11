import { Link } from "react-router"


const ProfessionalsCard = (props) => {
  return (
      <div className="max-w-sm">
                <div key={props.key} className="w-[90%] bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
                     
                          <img className="rounded-sm w-60 h-60 m-auto pt-6" src={props.cardImage} alt="" />
                     
                      <div className="p-5">
                          
                              <Link to={'/singleprofessional'} className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">{props.doctorName}</Link>
                        
                          <p className="mb-3 text-sm font-medium text-gray-900 dark:text-gray-400">Speciality</p>
                          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{props.street}, {props.suite}, {props.city}</p>
                          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{props.email}</p>
                          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{props.phone}</p>
                          <div className='text-end'>
                          <Link to={'/singleprofessional'} className="inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#0086C6] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              View more +
                          </Link>
                          </div>
                      </div>
                  </div>
            </div>
  )
}

export default ProfessionalsCard
