
import SearchBox from "../commonComponents/SearchBox"
import SectionHeading from "../commonComponents/SectionHeading"
import SimilarProfessionals from '../components/SimilarProfessionals';



const AllProfessionals = () => {
 
  return (
     <section className="w-full mt-14">
      
      <SearchBox />
      <div className="my-[50px]">
         <SectionHeading name="All Professionals" />
      </div>
      <SimilarProfessionals />
    </section>
  )
}

export default AllProfessionals
