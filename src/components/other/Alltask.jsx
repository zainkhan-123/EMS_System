import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authprovider'

const Alltask = () => {
  const [userdata, setuserdata] = useContext(Authcontext)
  // console.log(Authdata.employees);


  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded  '>

      <div className='flex  bg-red-400 mb-2 py-2 px-4 rounded justify-between'>
        <h2 className=' text-xs sm:text-lg font-medium  w-[30%] sm:w-1/2 '>Employee Name</h2>
        <h3 className='text-xs  sm:text-lg font-medium pl-2 w-[30%] sm:w-1/2 '> New task</h3>
        <h5 className=' text-xs  sm:text-lg font-medium pl-2 w-[30%] sm:w-1/2 '> Active Task</h5>
        <h5 className='text-xs  sm:text-lg font-medium pl-2 w-[30%] sm:w-1/2 '> Completed task </h5>
        <h5 className='text-xs sm:text-lg font-medium  pl-2 w-[30%] sm:w-1/2 '> Failed task</h5>

      </div>

      <div className=''>
        {userdata.map(function (elem, idx) {
          return <div key={idx} className='flex mb-2 py-2 ml-3 sm:ml-0  px-0 sm:pl-[2.5rem] rounded justify-between border-b-2 border-gray-700 '>
            <h2 className='text-xs sm:text-lg font-medium sm:text-start text-center  w-1/2'>{elem.firstName} </h2>
            <h3 className='text-xs sm:text-lg font-medium sm:text-start text-center w-1/2 text-green-600'>{elem.tasksNumber.newTask}</h3>
            <h5 className='text-xs sm:text-lg font-medium sm:text-start text-center w-1/2 text-red-600'> {elem.tasksNumber.active}</h5>
            <h5 className='text-xs sm:text-lg font-medium sm:text-start text-center w-1/2 text-orange-600'> {elem.tasksNumber.completed}</h5>
            <h5 className='text-xs sm:text-lg font-medium sm:text-start text-center w-1/2 text-purple-600'> {elem.tasksNumber.failed}</h5>

          </div>
        })}
      </div>



    </div>



  )
}

export default Alltask