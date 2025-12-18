import React from 'react'
import Button from './Button'
const Header = () => {
  return (
    <>
     <nav className='navbar container align-items-start pt-3 pb-3 '>
     <a href="#"  className='text-light navbar-brand'>Authentication App</a>
     <div>
        <Button text='Login' class="btn-outline-info" />
        &nbsp;
        <Button text='Register' class="btn-info" />

     </div>
     </nav>
    </>
  )
}

export default Header