import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllProfessionals } from '../features/allProfessionalsSlice';
import personOne from '../assets/images/illustrations/person_1.jpg.webp'
import ProfessionalsCard from '../commonComponents/ProfessionalsCard';

const SimilarProfessionals = () => {
     const dispatch = useDispatch();
    const {allProfessionals, loading, error} = useSelector((state)=>state.allProfessionals);
     useEffect(()=>{
        dispatch(fetchAllProfessionals());
     },[dispatch]);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error.message}</div>;

      const slideItems = allProfessionals.map((e)=>{
        return(
            <div className='mb-3'>
            <ProfessionalsCard key={e.id} doctorName={e.name} cardImage={personOne} phone={e.phone} email={e.email}
            street={e.address.street} suite={e.address.suite} city={e.address.city}/>
            </div>
            
        )
    });

  return (
    <section className="w-full">
      
      
      
      <div className="w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5">
          {slideItems}
      </div>
      
      

    </section>
  )
}

export default SimilarProfessionals
