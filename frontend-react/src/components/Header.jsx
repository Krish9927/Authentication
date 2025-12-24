import React, { useContext } from 'react'
import Button from './Button'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
import Dashboard from './ContentPrivate/Dashboard'
const Header = () => {
  const {isLogged,setLogged}=useContext(AuthContext)
  const handleLogout=()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setLogged(false)
    console.log('Logout ');
    Navigate('/')
    
  }
  return (
    <>
       <nav className='navbar container align-items-start pt-3 pb-3 '>
     <Link href="#"  className='text-light navbar-brand' to='/'>Authentication App</Link>
     <div>
    {isLogged ? (
      <>
      <Button text='Dashboard' url='/dashboard' class='btn btn-info' />
      &nbsp;
      <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
      </>
    ):( 
    <>
        <Button text='Login' class="btn-outline-info" url='/Login' />
        &nbsp;
        <Button text='Register' class="btn-info" url='/Register'/>
    </>
    )}   
     </div>
     </nav>
    </>
  )
}

export default Header