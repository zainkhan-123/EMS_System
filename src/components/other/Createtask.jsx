import { React, useContext, useEffect, useState } from 'react'
import { Authcontext } from '../../context/Authprovider'
import { SetLocalStorage } from '../../utilites/LocalStorage'

const Createtask = () => {

    const [userdata , setuserdata] = useContext(Authcontext)
    const [title, settitle] = useState('')
    const [date, setdate] = useState('')
    const [description, setdescription] = useState('')
    const [assignto, setassignto] = useState('')
    const [category, setcategory] = useState('')

    const [newtask, setnewtask] = useState({})
   

    const handlersubmit = (e) => {
        e.preventDefault()
        settitle('')
        setdate('')
        setassignto('')
        setcategory('')
        setdescription('')


        setnewtask({ title, date, description, category, active: false, newTask: true, completed: false, failed:false })

       const data =  userdata
      
       


       data.forEach(function(elem){
        // console.log(elem);
     if (assignto == elem.firstName) {
        elem.tasks.push(newtask)
       elem.tasksNumber.newTask =  elem.tasksNumber.newTask+1
     
     }
        
       }) 
       console.log(data);
      
    }
    useEffect(()=>{
        SetLocalStorage(userdata)
       },[])

    return (
        <div className='mt-10 rounded p-5 bg-[#3e4840]'>
            <form onSubmit={handlersubmit} className='flex items-start justify-between sm:flex-row content-center flex-wrap flex-col w-full' >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm mb-0.5 text-gray-400'>Title Task</h3>
                        <input className='text-sm py-1 px-2 rounded w-4/5 outline-none bg-transparent border-[1px] border-gray-500' type="text" placeholder='Make a  ui  design'
                            value={title}
                            onChange={(e) => settitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className='text-sm mb-0.5 text-gray-400'>Date</h3>
                        <input type="date" className='text-sm py-1 px-2 rounded w-4/5 outline-none bg-transparent border-[1px] border-gray-500'
                            value={date}
                            onChange={(e) => setdate(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className='text-sm mb-0.5 text-gray-400'>Assign to </h3>
                        <input type="text" placeholder='employee name' className='text-sm py-1 px-2 rounded w-4/5 outline-none bg-transparent border-[1px] border-gray-500'
                            value={assignto}
                            onChange={(e) => setassignto(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className='text-sm mb-0.5 text-gray-400'>category</h3>
                        <input
                            value={category}
                            onChange={(e) => setcategory(e.target.value)}
                            type="text " placeholder='design ,dev etc' className='text-sm py-1 px-2 rounded w-4/5 outline-none bg-transparent border-[1px] border-gray-500' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-wrap flex-col items-center sm:mt-0 mt-6   '>
                    <h3 className='text-sm text-gray-400 mb-0.5'>Description</h3>
                    <textarea
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[2px] border-gray-400' name="" cols='23' rows='10' id=""></textarea>
                    <button className='bg-green-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-5 w-full'>Create a Task </button>
                </div>
            </form>
        </div>
    )
}

export default Createtask