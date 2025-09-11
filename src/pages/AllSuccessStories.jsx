import React, {useState, useEffect} from 'react'
import axios from 'axios';
import SearchBox from "../components/SearchBox"
import SectionHeading from "../components/SectionHeading"
import personOne from '../assets/images/illustrations/person_1.jpg.webp'
import SuccessStoriesCard from '../components/SuccessStoriesCard';

const AllSuccessStories = () => {

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
              <SuccessStoriesCard key={e.id} cardImage={personOne} doctorName={e.name} email={e.email}
            street={e.address.street} suite={e.address.suite} city={e.address.city}/>
            </div>
            
        )
    });


  return (
    <div className="w-full">
      
      <SearchBox />
      <div className="my-[50px]">
         <SectionHeading name="All Success Stories" />
      </div>
      <div className="w-[90%] lg:w-[70%] m-auto mb-5">
          {slideItems}
      </div>
      
      

    </div>
  )
}

export default AllSuccessStories
