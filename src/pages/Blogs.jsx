import React, {useState, useEffect} from 'react'
import axios from 'axios';
import BlogCard from "../commonComponents/BlogCard"
import SearchBox from "../commonComponents/SearchBox"
import SectionHeading from "../commonComponents/SectionHeading"
import blogImg from '../assets/images/illustrations/b3.jpeg'

const Blogs = () => {

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
    <section className="w-full mt-14">
      
      <SearchBox />
      <div className="my-[50px]">
         <SectionHeading name="Blogs" />
      </div>
      <div className="w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allBlogs}
      </div>
     </section>
  )
}

export default Blogs
