



import React from 'react'

const Tasklist = ({ data }) => {

    return (
        <div className='flex-col-reverse sm:flex sm:flex-row sm:ml-0 ml-20  mt-10 sm:justify-between sm:space-x-0    sm:space-y-0 space-y-5 sm:gap-5'>

            <div className=' rounded-xl py-6 px-9 w-[45%] bg-red-500'>
                <h2 className='text-xs sm:text-2xl sm:font-semibold '>{data.tasksNumber.newTask}</h2>
                <h3 className=' text-sm sm:text-3xl font-medium'> New Task</h3>
            </div>
            <div className=' rounded-xl py-6 px-7 w-[45%] bg-pink-500'>
                <h2 className='text-xs sm:text-2xl sm:font-semibold'>{data.tasksNumber.completed}</h2>
                <h3 className='text-sm sm:text-3xl font-medium '> completed</h3>
            </div>
            <div className=' rounded-xl py-6 px-9 w-[45%] bg-blue-500'>
                <h2 className='text-xs sm:text-2xl sm:font-semibold '>{data.tasksNumber.active}</h2>
                <h3 className='text-sm sm:text-3xl font-medium'> Accepted</h3>
            </div>
            <div className=' rounded-xl py-6 px-9 w-[45%] bg-orange-500'>
                <h2 className='text-xs sm:text-2xl sm:font-semibold'>{data.tasksNumber.failed}</h2>
                <h3 className='text-sm sm:text-3xl font-medium'> Failed</h3>
            </div>

        </div>
    )
}

export default Tasklist
