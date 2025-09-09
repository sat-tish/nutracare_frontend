

const ProfessionalsCard = (props) => {
  return (
      <div className="max-w-sm">
                <div key={props.key} class="w-[90%] bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
                     
                          <img class="rounded-sm w-60 h-60 m-auto pt-6" src={props.cardImage} alt="" />
                     
                      <div class="p-5">
                          <a href="#">
                              <h5 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{props.doctorName}</h5>
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
}

export default ProfessionalsCard
