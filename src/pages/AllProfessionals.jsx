import React, {useState, useEffect} from 'react'
import axios from 'axios';
import SearchBox from "../components/SearchBox"
import SectionHeading from "../components/SectionHeading"
import personOne from '../assets/images/illustrations/person_1.jpg.webp'
import ProfessionalsCard from '../components/ProfessionalsCard';


const AllProfessionals = () => {

 const[doctorList, setDoctorList] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
          setDoctorList(res.data);
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

      const slideItems = doctorList.map((e)=>{
        return(
            <div className='mb-3'>
            <ProfessionalsCard key={e.id} doctorName={e.name} cardImage={personOne} phone={e.phone} email={e.email}
            street={e.address.street} suite={e.address.suite} city={e.address.city}/>
            </div>
            
        )
    });

  return (
     <div className="w-full">
      
      <SearchBox />
      <div className="my-[50px]">
         <SectionHeading name="All Professionals" />
      </div>
      <div className="w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5">
          {slideItems}
      </div>
      
      

    </div>
  )
}

export default AllProfessionals
