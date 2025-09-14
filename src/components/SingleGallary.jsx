import gallaryImg from '../assets/images/illustrations/b6.webp'

const SingleGallary = () => {

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
    <div className='w-full'>
      <h1 className='text-2xl font-semibold text-center p-5'>Gallary</h1>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
          {gallaryImgList }
      </div>
    </div>
  )
}

export default SingleGallary
