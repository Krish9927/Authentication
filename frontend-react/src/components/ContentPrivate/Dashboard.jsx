import React, { useEffect } from 'react'
import axios from 'axios'
import axiosInstance from '../../AxiomInstance'

const Dashboard = () => {
    const accessToken=localStorage.getItem('accessToken')
    useEffect(()=>{
        const fetchProtectedData=async()=>{
            try{
             const response=await axios.get('/protected-view'
                // ,{
                //     headers:{
                //         Authorization: `Bearer ${accessToken}`
                //     }
                // }
             );
             
             console.log('Success',response.data);
             
            }catch(error){
            console.log(error);
            
            }
        }
        fetchProtectedData();
    },[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard