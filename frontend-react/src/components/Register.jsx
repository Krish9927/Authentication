import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  const[username,setName] =useState('')
  const[email,setEmail] =useState('')
  const[password,setPassword] =useState('')
  const[error,setError]=useState({})
  const[success,setSuccess]=useState(false)
  const[loading,setLoading]=useState(false)
  const  handleRegisteration=async(e)=>{
    e.preventDefault();
    const userData={
      email,username,password
    }
    setLoading(true)
    try{
      const resp = await axios.post('http://127.0.0.1:8000/api/v1/register/',userData);
      console.log('LEmadarChod',resp.data);
      console.log('Registration Successful');
      setSuccess(true)
      setError({})
    }catch(error){
      setError(error.response.data);
       console.log("FULL ERROR:", error.response);
  console.log("ERROR DATA:", error.response?.data);
      // console.log('Registation Error',response.data.error);

    }finally{
setLoading(false)
    }
    
  }
  return (
    <>
     <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className='text-light text-center mb-4'>
                Create an Account
            </h3>
            <form onSubmit={handleRegisteration}>
              
              <div className="mb-3"><input type="text" className='form-control' placeholder='Enter UserName' onChange={(e)=>{setName(e.target.value)}}  /></div>
              <small>{error.name && <div className='text-danger'>{error.username}</div>  }</small>
              <div className="mb-3"><input type="email" className='form-control' placeholder='Enter Email Address' onChange={(e)=>{setEmail(e.target.value)}} /></div>
              <small>{error.email && <div className='text-danger'>{error.email}</div>  }</small>
              <div className="mb-3"><input type="password" className='form-control' placeholder='Set password' onChange={(e)=>{setPassword (e.target.value)}} /></div>
              <small>{error.password && <div className='text-danger'>{error.password}</div>  }</small>
              {success && <div className='alert alert-success'>Registation Successful</div>}

              { loading ? (
                <button type="submit" className='btn btn-info d-block mx-auto'  > <FontAwesomeIcon icon={faSpinner} spin />Please Wait ....</button>
              ):(
              <button type="submit" className='btn btn-info d-block mx-auto'>Register</button>
              )}
            </form>
          </div>
        </div>
     </div>
    </>
  )
}

export default Register