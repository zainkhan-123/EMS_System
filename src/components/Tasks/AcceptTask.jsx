import React from 'react'

const AcceptTask = ({data}) => {
    console.log(data);
    
    return (
  

            <div className='  flex-shrink-0  h-full p-5 w-[300px] bg-red-400 rounded-xl '>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-700 text-sm rounded-lg px-3 p-1'>{data.category}</h3>
                    <h4 className='text-sm'>{data.date}</h4>
                </div>
                <h2 className='text-2xl font-bold mt-5'>{data.title}</h2>
                <p className='mt-2 text-sm'>{data.description}</p>
           
            <div className='flex justify-between mt-4'>
                <button className='bg-green-700 py-1 px-3  text-sm'>mark as completed</button>
                <button className='bg-red-700 py-1 px-3  text-sm'>mark as failed</button>
            </div>
            </div>
    )
}

export default AcceptTask