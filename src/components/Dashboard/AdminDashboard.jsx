import React from 'react'
import Header from '../other/Header'
import Createtask from '../other/Createtask'
import Alltask from '../other/Alltask'

const AdminDashboard = (props) => {
    return (
        <div className='p-10 h-screen  w-full'>
            <Header  changeUser={props.changeUser} data={{firstName:'zainkhani'}}/>
            <Createtask />
            <Alltask/>
        </div>

    )
}

export default AdminDashboard