import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='  flex-shrink-0  h-full p-5 w-[300px] bg-blue-400 rounded-xl '>
    <div className='flex justify-between items-center'>
      <h3 className='bg-red-700 text-sm rounded-lg px-3 p-1'>{data.category}</h3>
      <h4 className='text-sm'>{data.date}</h4>
    </div>
    <h2 className='text-2xl font-bold mt-5'>{data.title}</h2>
    <p className='mt-2 text-sm'>{data.description}</p>
    <div className='mt-2'>
        <button className='w-full'>Failed</button>
    </div>
  </div>
  )
}

export default FailedTask