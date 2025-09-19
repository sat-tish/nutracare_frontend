import React, {useEffect} from 'react'
import CenterCard from "../commonComponents/CenterCard"
import sliderImg from '../assets/images/background-images/b6.jpg'
import SectionHeading from "../commonComponents/SectionHeading";
import { Link } from "react-router";
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllCenters } from '../features/allCentersSlice';

const HomeCenters = () => {
  
  const dispatch = useDispatch();
    const {allCenters, loading, error} = useSelector((state)=>state.allCenters);
     useEffect(()=>{
        dispatch(fetchAllCenters());
     },[dispatch]);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const allCentersList = allCenters.map((e)=>{
     for(let i=[e.id]; i<9; i++){
              return(
                <div key={e.id} className="mb-6">
                  <CenterCard  cardImage={sliderImg} centerName={e.company.name} email={e.email} address={e.address.city}/>
                </div>
                  
                    )
        }
      });
      const allCentersListMobile = allCenters.map((e)=>{
     for(let i=[e.id]; i<5; i++){
              return(
                <div key={e.id} className="mb-6 m-auto">
                  <CenterCard cardImage={sliderImg} centerName={e.company.name} email={e.email} address={e.address.city}/>
                </div>
           
                    )
        }
      });

  return (
    <section className="w-full my-[50px] bg-white">
      <div className="w-[90%] m-auto">
        <SectionHeading name="Find a Holistic center" />
        </div>
      <div className="lg:hidden w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5">
          {allCentersListMobile}
      </div>
      <div className="max-lg:hidden w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5">
          {allCentersList}
      </div>
       <div className="text-end w-[90%]">
             <Link to="/nutracare_frontend/allcenters" className="inline-flex items-center px-10 py-1.5 text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300">View All</Link>  
         </div>
    </section>
  )
}

export default HomeCenters
