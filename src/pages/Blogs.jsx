
import SearchBox from "../commonComponents/SearchBox"
import SectionHeading from "../commonComponents/SectionHeading"
import SimilarBlogs from '../components/SimilarBlogs'

const Blogs = () => {

  return (
    <section className="w-full mt-14">
      
      <SearchBox />
      <div className="my-[50px]">
         <SectionHeading name="Blogs" />
      </div>
      <SimilarBlogs />
     </section>
  )
}

export default Blogs
