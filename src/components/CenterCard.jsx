import cardImage from '../assets/images/background-images/b6.jpg'

const CenterCard = () => {
  return (
    <div class="max-w-sm bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
    <div className='relative max-w-sm overflow-hidden bg-cover bg-no-repeat'>
        <img class="rounded-t-lg h-50 max-h-50 transition duration-300 ease-in-out hover:scale-110" src={cardImage} alt="" />
    </div>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
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

  )
}

export default CenterCard
