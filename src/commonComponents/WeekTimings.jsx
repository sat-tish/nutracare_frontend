import React from 'react'

const WeekTimings = () => {

const weekTimings = [
    {
      day: 'Monday',
      morningTime: '10am to 2pm',
      eveningTime: '5pm to 9pm'
    },
    {
      day: 'Tuesday',
      morningTime: '10am to 2pm',
      eveningTime: '5pm to 9pm'
    },
    {
      day: 'Wednusday',
      morningTime: '10am to 2pm',
      eveningTime: '5pm to 9pm'
    },
    {
      day: 'Thursday',
      morningTime: '10am to 2pm',
      eveningTime: '5pm to 9pm'
    },
    {
      day: 'Friday',
      morningTime: '10am to 2pm',
      eveningTime: '5pm to 9pm'
    },
    {
      day: 'Saturday',
      morningTime: '10am to 2pm',
      eveningTime: '5pm to 9pm'
    },
    {
      day: 'Sunday',
      morningTime: '10am to 2pm',
      eveningTime: '5pm to 9pm'
    }
   ];

   const weekTimingList =weekTimings.map((e)=>{
    return (
      <>
       <div className='flex justify-between'> 
                          <p>{e.day}</p>
                          <p>{e.morningTime}</p>
                          <p>{e.eveningTime}</p>
                         </div>
                         <hr className='h-[1px] bg-gray-300 border-none' />
      </>
    )
   })


  return (
    <div className='box-border w-full lg:w-[60%] m-auto flex flex-col gap-3 text-sm text-gray-700 mt-2'>
                         {weekTimingList}

                      </div>
  )
}

export default WeekTimings
