import React, {useState, useEffect} from 'react'
import axios from 'axios';
import BlogCard from "../components/BlogCard"
import SearchBox from "../components/SearchBox"
import SectionHeading from "../components/SectionHeading"
import blogImg from '../assets/images/illustrations/b3.jpeg'

const SingleBlog = () => {

const[blogItem, setBlogItem] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
          setBlogItem(res.data);
          setLoading(false);
        }
      )
        .catch((err)=>{
          console.log(err);
          setError(error);
          setLoading(false);
        }
        )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error.message}</div>;

      const allBlogs = blogItem.map((e)=>{
              return(
                <div className="mb-6">
                   <BlogCard key={e.id} cardImage={blogImg} blogName={e.name} />
                </div>
           
                    )
      })
  

  return (
    <section className='w-full bg-[#f5fafc]'>
     <div className="w-[90%] md:w-[80%] lg:w-[70%] m-auto py-[50px]">
                <div className="w-[95%] pb-5 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                       <div  className="w-full grid sm:grid-cols-1 lg:grid-cols-2 gap-x-5">
                          <div>
                             <img className="rounded-sm min-w-[380px] max-h-[400px] p-5 max-lg:m-auto" src={blogImg} alt="" />
                          </div>
                              
                          
                          <div className="p-5 flex flex-col justify-center">
                          <h1 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">Blog name</h1>
                          <p className="mb-3 text-sm font-medium text-gray-900 dark:text-gray-400">blog subject</p>
                          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">short information</p>
                        
                          
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
                  
                </div>

                <div className="w-full m-auto">
                     <div className="my-[50px]">
                        <SectionHeading name="View similar Blogs" />
                     </div>
                    <div className="w-[90%] m-auto grid md:grid-cols-2 xl:grid-cols-3">
          {allBlogs}
      </div>
      
      

    </div>
               
            </div>
            </section>
  )
}

export default SingleBlog
