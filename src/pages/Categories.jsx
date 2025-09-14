import React, {useState, useEffect} from 'react'
import axios from 'axios';
import SearchBox from "../commonComponents/SearchBox"
import SectionHeading from "../commonComponents/SectionHeading"
import sliderImg from '../assets/images/background-images/b6.jpg'
import CenterCard from "../commonComponents/CenterCard";
import personOne from '../assets/images/illustrations/person_1.jpg.webp'
import ProfessionalsCard from '../commonComponents/ProfessionalsCard';
import { Link } from 'react-router';

const Categories = () => {

  const[centersList, setCentersList] = useState([]);
  const[doctorList, setDoctorList] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
          setCentersList(res.data);
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

      const allCenters = centersList.map((e)=>{
         for(let i=[e.id]; i<9; i++){
              return(
                <div className="mb-6">
                  <CenterCard key={e.id} cardImage={sliderImg} centerName={e.company.name} email={e.email} address={e.address.city}/>
                </div>
           
                    )
        }
      });

      const slideItems = doctorList.map((e)=>{
         for(let i=[e.id]; i<9; i++){
              return(
                <div className='mb-3'>
            <ProfessionalsCard key={e.id} doctorName={e.name} cardImage={personOne} phone={e.phone} email={e.email}
            street={e.address.street} suite={e.address.suite} city={e.address.city}/>
            </div>
           
                    )
        }
        
    });
  

  return (
     <div className="w-full bg-[#f5fafc]">
      
      <SearchBox />
      <div className="my-[50px]">
         <SectionHeading name="Category name" />
      </div>
      <div className="w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5">
          {slideItems}
      </div>
      <div className="w-[90%] text-end pb-[50px]">
                <Link to={'/allprofessionals'} className='inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                View more +</Link>
        </div>
      <div className="w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5">
          {allCenters}
      </div>
      <div className="w-[90%] text-end pb-[50px]">
                <Link to={'/allprofessionals'} className='inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                View more +</Link>
              
        </div>
      
      
      

    </div>
  )
}

export default Categories
