
import SearchBox from "../commonComponents/SearchBox"
import SectionHeading from "../commonComponents/SectionHeading"
import SimilarSuccessStories from '../components/SimilarSuccessStories';

const AllSuccessStories = () => {

  return (
    <section className="w-full mt-14">
      
      <SearchBox />
      <div className="my-[50px]">
         <SectionHeading name="All Success Stories" />
      </div>
      <SimilarSuccessStories />
    </section>
  )
}

export default AllSuccessStories
