import { Link } from "react-router"

const BlogCard = (props) => {
  return (
     <div key={props.key} className=" max-w-sm mx-4 mb-2">
                <div className="bg-white border border-gray-300 rounded-lg shadow m-auto">
                     
                          <div className='relative max-w-sm overflow-hidden bg-cover bg-no-repeat'>
                                  <img className=" w-full rounded-t-lg max-h-50 transition duration-300 ease-in-out hover:scale-110" src={props.cardImage} alt="" />
                              </div>
                     
                      <div className="p-5">
                          
                              <Link to={'/singleblog'} className="mb-2 text-lg font-semibold text-gray-900 ">{props.blogName}</Link>
                          
                          <p className="mb-3 text-sm font-normal text-gray-900 ">Author name</p>
                          
                          <p className="mb-5 text-sm font-normal text-gray-700">Short information about blog. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                          <div>
                          <Link to={'/singleblog'} className=" text-[#0086C6] font-semibold">
                              Read more +
                          </Link>
                          </div>
                      </div>
                  </div>
            </div>
  )
}

export default BlogCard
