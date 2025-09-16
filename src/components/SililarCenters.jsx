import React, {useEffect} from 'react'
import sliderImg from '../assets/images/background-images/b6.jpg'
import CenterCard from "../commonComponents/CenterCard";
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllCenters } from '../features/allCentersSlice';

const SililarCenters = () => {

 const dispatch = useDispatch();
   const {allCenters, loading, error} = useSelector((state)=>state.allCenters);
    useEffect(()=>{
       dispatch(fetchAllCenters());
    },[dispatch]);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error.message}</div>;

      const allCentersList = allCenters.map((e)=>{
              return(
                <div className="mb-6">
                   <CenterCard key={e.id} cardImage={sliderImg} centerName={e.company.name} email={e.email} address={e.address.city}/>
                </div>
           
                    )
      })

  return (
     <section className="w-full">
      
      <div className="w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5">
          {allCentersList}
      </div>
      
      

    </section>
  )
}

export default SililarCenters
