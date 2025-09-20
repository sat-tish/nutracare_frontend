import React, {useEffect} from 'react'
import SearchBox from "../commonComponents/SearchBox"
import SectionHeading from "../commonComponents/SectionHeading"
import sliderImg from '../assets/images/background-images/b6.jpg'
import CenterCard from "../commonComponents/CenterCard";
import { Link } from 'react-router';
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllCenters } from '../features/allCentersSlice';
import CategoriesTwo from '../components/CategoriesTwo';

const Categories = () => {
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
                <div className="mb-6">
                  <CenterCard key={e.id} cardImage={sliderImg} centerName={e.company.name} email={e.email} address={e.address.city}/>
                </div>
           
                    )
        }
      });

  return (
     <section className="w-full bg-[#f5fafc] mt-14 m-auto">
      
      <SearchBox />
      <div className="my-[50px]">
         <SectionHeading name="Category name" />
      </div>
      <CategoriesTwo />
      <div className="w-[90%] text-end pb-[50px] m-auto">
                <Link to={'/allprofessionals'} className='inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300 '>
                View more +</Link>
        </div>
      <div className="w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5">
          {allCentersList}
      </div>
      <div className="w-[90%] text-end pb-[50px]">
                <Link to={'/nutracare_frontend/allprofessionals'} className='inline-flex items-center px-3 py-1.5 text-sm text-center text-white bg-[#006D95] hover:bg-[#0473B9] rounded focus:ring-4 focus:outline-none focus:ring-blue-300'>
                View more +</Link>
              
        </div>
    </section>
  )
}

export default Categories
