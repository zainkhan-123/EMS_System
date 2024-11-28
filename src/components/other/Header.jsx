

import React, { useContext, useState } from 'react'


const Header = (props) => {
  // console.log(data);

//  console.log(props.data);
 
//  console.log(props.changeUser);
 
 const username = props.data?.firstName  || 'username soorry ' 
// console.log(data);

// console.log(userdata);

  const handleuserlogout  = () =>{
    localStorage.setItem('loggedInUser' , '')
    // window.location.reload()
    // console.log(props.changeUser);
    
    props.changeUser('')
  }




  return (
    <div className='flex items-end justify-between'>
<h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-bold'>{username}✌</span> </h1>
<button onClick={handleuserlogout} className='bg-red-600 text-white px-4 py-2 rounded-lg text-lg font-medium'>LogOut</button>
    </div>
  )
}

export default Header  