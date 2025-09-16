
import SearchBox from "../commonComponents/SearchBox"
import SectionHeading from "../commonComponents/SectionHeading"
import SililarCenters from '../components/SililarCenters';


const AllCenters = () => {
  
  return (
    <section className="w-full mt-14">
      
      <SearchBox />
      <div className="my-[50px]">
         <SectionHeading name="All Centers" />
      </div>
       <SililarCenters />
     
    </section>
  )
}

export default AllCenters
