import {useContext, useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
const Login = () => {
   const[username,setName] =useState('')
  const[password,setPassword] =useState('')
  const[error,setError]=useState('')
  const[loading,setLoading]=useState(false)
  const {isLogged,setLogged}=useContext(AuthContext)
  const navigate=useNavigate();
  const  handleLogin=async(e)=>{
    e.preventDefault();
    const userData={
      username,password
    }
    setLoading(true)
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/',userData);
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)
      navigate('/')
    console.log('Login Successful');
    setLogged(true)
    
      console.log('LEmadarChod',response.data);
    }catch(error){
      setError('Invalid Credental');
      console.log('Invalid Credental');
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
                Login 
            </h3>
            <form onSubmit={handleLogin}>
              
              <div className="mb-3"><input type="text" className='form-control' placeholder='Enter UserName' onChange={(e)=>{setName(e.target.value)}}  /></div>
              <div className="mb-3"><input type="password" className='form-control' placeholder='Set password' onChange={(e)=>{setPassword (e.target.value)}} /></div>
               {error && <div className='text-danger'>{error}</div> }
              { loading ? (
                <button type="submit" className='btn btn-info d-block mx-auto'  > <FontAwesomeIcon icon={faCoffee} spin />Please Wait ....</button>
              ):(
              <button type="submit" className='btn btn-info d-block mx-auto'>Login</button>
              )}
            </form>
          </div>
        </div>
     </div>
    </>
  )
}

export default Login