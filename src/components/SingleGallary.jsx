import gallaryImg from '../assets/images/illustrations/b6.webp'
// import React, {useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import { fetchAllProfessionals } from '../features/allProfessionalsSlice';

const SingleGallary = () => {

  // const dispatch = useDispatch();
  //   const {allProfessionals, loading, error} = useSelector((state)=>state.allProfessionals);
  //    useEffect(()=>{
  //       dispatch(fetchAllProfessionals());
  //    },[dispatch]);

  // if (loading) return <div>Loading data...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  const gallaryImage = [
    {
        id: 0,
        gallaryImg:gallaryImg
    },
    {
        id: 1,
        gallaryImg:gallaryImg
    },
    {
        id: 2,
        gallaryImg:gallaryImg
    },
    {
        id: 3,
        gallaryImg:gallaryImg
    },
    {
        id: 4,
        gallaryImg:gallaryImg
    },
    {
        id: 5,
        gallaryImg:gallaryImg
    },
    {
        id: 7,
        gallaryImg:gallaryImg
    },
    {
        id: 8,
        gallaryImg:gallaryImg
    },
    {
        id: 9,
        gallaryImg:gallaryImg
    },
    {
        id: 10,
        gallaryImg:gallaryImg
    },
    
  ]
  const gallaryImgList = gallaryImage.map((e)=>{
    return(
      <div key={e.id} className='w-full'>
         <img  className="rounded-sm max-w-sm max-h-[400px] p-3 m-auto" src={e.gallaryImg} alt="" />
    </div>
    )
   
  })

  return (
    <section className='w-full'>
      <h1 className='text-2xl font-semibold text-center p-5'>Gallary</h1>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
          {gallaryImgList }
      </div>
    </section>
  )
}

export default SingleGallary
