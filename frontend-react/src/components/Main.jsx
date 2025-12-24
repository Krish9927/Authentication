import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Button from './Button'
const Main = () => {
  return (
    <>
     <div className="container">
        <div className="p-5 text-center bg-light-dark mt-5 rounded">
            <h1 className="text-light text-center">
                Authentication
            </h1>
            <p className='lead text-light'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, commodi deleniti ratione eius accusamus blanditiis. Corporis quod repellat assumenda, nobis perspiciatis totam voluptatum obcaecati a ipsam consectetur iusto, velit odit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad exercitationem quos neque excepturi nobis deserunt molestias iusto ut? Laudantium accusantium praesentium obcaecati vitae debitis blanditiis id quam sapiente quis. Ad dolorem deleniti maiores velit sequi optio modi repellat eaque nisi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, est. Lorem ipsum dolor sit amet consectetur adipisicing elit. In a iusto ducimus?
            </p>
             <Button text='Explore Now' class= 'btn-outline-info' url='/dashboard'/>
        </div>
     </div>
    </>
  )
}

export default Main