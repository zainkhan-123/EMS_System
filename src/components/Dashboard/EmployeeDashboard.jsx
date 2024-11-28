

import React from 'react'
import Header from '../other/header'
import Tasklist from '../other/Tasklist'
import Tasklists from '../Tasks/Tasklists'

function EmployeeDashboard(props) {

  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen overflow-x-auto'>
      <h1>{props.data.id}</h1>
   <Header changeUser={props.changeUser} data={props.data}/>
   <Tasklist  data={props.data}/>
   <Tasklists  data={props.data}/>
   </div>
  )
}

export default EmployeeDashboard;