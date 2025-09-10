
const BlogCard = (props) => {
  return (
     <div key={props.key} className=" max-w-sm mx-4 mb-2">
                <div class="bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
                     
                          <div className='relative max-w-sm overflow-hidden bg-cover bg-no-repeat'>
                                  <img class=" w-full rounded-t-lg max-h-50 transition duration-300 ease-in-out hover:scale-110" src={props.cardImage} alt="" />
                              </div>
                     
                      <div class="p-5">
                          <a href="#">
                              <h5 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{props.blogName}</h5>
                          </a>
                          <p class="mb-3 text-sm font-normal text-gray-900 dark:text-gray-400">Author name</p>
                          
                          <p class="mb-5 text-sm font-normal text-gray-700 dark:text-gray-400">Short information about blog. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                          <div>
                          <a href="#" class=" text-[#0086C6] font-semibold">
                              Read more +
                          </a>
                          </div>
                      </div>
                  </div>
            </div>
  )
}

export default BlogCard
