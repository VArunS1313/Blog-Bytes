import React from 'react'
import Container from '../Container/Container';
import Logout from './Logout';
import Logo from '../Logo/Logo';
import { Link,useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';

const Header = () => {
  const authStatus=useSelector((state)=>state.auth.status)
  // const userdata=useSelector((state)=>state.auth.userdata)
  // console.log({userdata}+" usedata in header")
  // console.log('userdata:', JSON.stringify(userdata, null, 2))
  const navigate=useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  
  return (
    <header className='py-3 shadow bg-gray-500'>
    <Container>
    <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
            </div>
            <ul className='flex ml-auto'>
              {navItems.map((navitem)=>
              navitem.active?(
                <li key={navitem.name}>
                  <button onClick={()=>navigate(navitem.slug)}  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                    {navitem.name}</button>

                </li>
              ): null )}
              {authStatus && (
                <li>
                  <Logout/>
                </li>
              )}

            </ul>
            </nav>
      </Container>
      </header>
  )
}

export default Header;