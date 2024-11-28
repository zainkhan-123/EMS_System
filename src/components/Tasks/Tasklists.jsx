
import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletTask from './CompletTask'
import FailedTask from './FailedTask'


const Tasklists = ({data}) => {
  console.log(data);
  
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center gap-4 justify-start flex-nowrap w-full py-5 mt-10 px-2 '>
    {data.tasks.map((elem , idx )=>{
      

    if (elem.active ) {
      return <AcceptTask key={idx} data={elem}/>
    }
      if (elem.completed) {
       return <CompletTask key={idx} data={elem}/>
    }
    if (elem.failed) {
      return <FailedTask key={idx} data={elem}/>
    }
    if (elem.newTask) {
      return <NewTask key={idx} data={elem}/>
    }

    })}
    </div>
  )
}

export default Tasklists