import React from 'react'
import {  useDispatch } from 'react-redux'
import authservice from '../../services/auth'
import { logout } from '../../Store_Slice/authSlice'
const Logout = () => {
    const dispatch=useDispatch();
    const logouthandler=()=>{
        authservice.logout().then(()=>{
            dispatch(logout())
        }).catch(()=>{
            console.log("Logout not done")
        })

    }
  return (
    <button className=' inline-block rounded-full px-6 py-3 duration-100 hover:bg-blue-200 '   onClick={logouthandler}>Logout</button>
  )
}

export default Logout;