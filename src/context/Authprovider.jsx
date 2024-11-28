import React, { createContext,useEffect,useState } from 'react'
import { GetLocalStorage} from '../utilites/LocalStorage'
import { SetLocalStorage } from '../utilites/LocalStorage'

 export const Authcontext = createContext()

const Authprovider = ({children}) => {

    const [userdata, setuserdata] = useState()
const [admindata , setadmindata] = useState()
  useEffect(()=>{
    const {employees ,} = GetLocalStorage()
    setuserdata(employees)


  },[])
  
  useEffect(()=>{
    SetLocalStorage()
  },[userdata])


  return (
    <div>
        <Authcontext.Provider value={[userdata,setuserdata,]}>
            {children}
        </Authcontext.Provider>
    </div>
  )
}

export default Authprovider