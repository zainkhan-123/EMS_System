import {React,useState }from 'react'

export const Login = ({handlelogin}) => {
 
  
const [email, setemail] = useState('')
const [password, setpassword] = useState('')


const handlersubmit = (e)=>{
 e.preventDefault()
 console.log('hay im zain');
 console.log('email is ' , email);
 console.log('pasword is ',password);
handlelogin(email , password)
 setemail('')
 setpassword('')
 
 
}


  return (

    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 p-20 border-emerald-500'>
        <form onSubmit={(e)=> handlersubmit(e)} className='flex flex-col items-center justify-center' >
          <input 
          value={email}
          onChange={(e)=>{ setemail(e.target.value) } }
           required type="email"
            placeholder='enter your email' className='border-emerald-600 bg-transparent border-2 outline-none text-white text-xl rounded-3xl py-3 px-3 bg-black placeholder:text-gray-400' />

          <input
          value={password}
          onChange={(e)=>{ setpassword(e.target.value)}}
          required className='border-emerald-600 border-2 bg-transparent outline-none text-white text-xl  mt-3 rounded-3xl py-3 px-3 bg-black placeholder:text-gray-400' type="pasword" placeholder='enter your pasword' />

          <button className='border-none mt-4 outline-none text-white text-xl rounded-3xl py-3 px-3  bg-green-600 placeholder:text-white'>Log in </button>
        </form>



      </div>





    </div>









  )
}
