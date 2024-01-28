import { useEffect, useState } from 'react'
import authservice from './services/auth'
import {login,logout} from './Store_Slice/authSlice'

import './App.css'
import { useDispatch } from 'react-redux'
import { Footer, Header } from './Components'
import conf from './Config/config'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setloading] = useState(false)
  const diapatch=useDispatch()
 
  useEffect(()=>{
    authservice.getCurrentUser()
    .then((data)=>{
      if(data)
      {
        diapatch(login({data}))
      }
      else{
        diapatch(logout())
      }
    })
    .finally(()=>(setloading(false)))
  },[])
  
//flex min-h-screen min-w-[360px] flex-col text-label-1
  return !loading?(<div className="min-h-screen flex flex-wrap content-between bg-gray-400" >
    <div className='w-full block'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>):null
}

export default App
