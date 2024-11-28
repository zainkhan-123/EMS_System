import {React,useState,useEffect, useContext}from 'react'
import { Login } from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { GetLocalStorage, SetLocalStorage } from './utilites/LocalStorage'
import { Authcontext } from './context/Authprovider'
import { data } from 'autoprefixer'



function App() {



const [user, setuser] = useState(null)
const [loggedinuserdata, setloggedinuserdata] = useState(null)
const [userdata , setuserdata] = useContext(Authcontext)
const [admindata, setadmindata] = useContext(Authcontext)




useEffect(()=>{

const loggedInUser = localStorage.getItem('loggedInUser' )
console.log(loggedInUser);

 if (loggedInUser) {
 const data = JSON.parse(loggedInUser)
 console.log(data);
 
  setuser(data.role)
  setloggedinuserdata(data.data)
  
 }

},[user])



const handlelogin = (email , password)=>{
    if (email == 'zainkhani@gmail.com' && password == '123') {
      setuser('admin')
      setloggedinuserdata({firstName :'zainkhani'})
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin' , data:{firstName: 'zainkhani'}} ))

     }else if (userdata){
      // console.log(userdata);
      
      const employee =  userdata.find((e)=> email == e.email && e.password == password)
    if (employee) {
      console.log(employee);
      
      setuser('employee')
      setloggedinuserdata(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
     } 
     else {
        alert('wrong email or password')
  }
    
    
}
}

  return (
  //react fragment
  <>    

  {!user  ? <Login  handlelogin={handlelogin}/> : ''}
  {user == 'admin' ? <AdminDashboard changeUser={setuser} data={loggedinuserdata}/>  : (user == 'employee' ?  <EmployeeDashboard changeUser={setuser} data={loggedinuserdata}/> : '' )}
  {/* <EmployeeDashboard/> */}
  {/* <AdminDashboard/> */}
  </>
  )
}

export default App