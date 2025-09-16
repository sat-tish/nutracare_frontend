import React, {useEffect} from 'react'
import personOne from '../assets/images/illustrations/person_1.jpg.webp'
import SuccessStoriesCard from '../commonComponents/SuccessStoriesCard';
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllSuccessStories } from '../features/allSuccessStories';

const SimilarSuccessStories = () => {

   const dispatch = useDispatch();
   const {allSuccessStories, loading, error} = useSelector((state)=>state.allSuccessStories);
    useEffect(()=>{
       dispatch(fetchAllSuccessStories());
    },[dispatch]);

 if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error.message}</div>;

      const slideItems = allSuccessStories.map((e)=>{
        return(
            <div className='mb-3'>
              <SuccessStoriesCard key={e.id} cardImage={personOne} doctorName={e.name} email={e.email}
            street={e.address.street} suite={e.address.suite} city={e.address.city}/>
            </div>
            
        )
    });

  return (
   <section className="w-full mt-14">
     
      <div className="w-[90%] lg:w-[70%] m-auto mb-5">
          {slideItems}
      </div>
      
      

    </section>
  )
}

export default SimilarSuccessStories
