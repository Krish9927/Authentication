import axios from "axios";
import { Meta } from "react-router-dom";


const baseURL=import.meta.env.VITE_BACKEND_BASE_API;
const axiosInstance = axios.create({
  baseURL:baseURL
})
// request interceptor
axiosInstance.interceptors.request.use(function(config){
console.log(config);
const accessToken=localStorage.getItem('accessToken')
if(accessToken){
  config.headers['Authorization']=`Bearer ${accessToken}`
}
return config;
},
function(error){
  return Promise.reject(error);
})
// response interceptor
axiosInstance.interceptors.response.use(function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, async function(error) {
    const orignalrequest=error.config
    if(error.response.this.status === 401 && !orignalrequest.retry){
      orignalrequest.retry=true
      const refreshToken=localStorage.getItem('refreshToken')
      try{
       const response= await axiosInstance.post('/token/refresh/',
        {refresh:refreshToken})
        localStorage.setItem('accessToken',response.data.access)
        orignalrequest.headers['Authorization']=`Bearer ${response.data.access}`
       return axiosInstance(orignalrequest)
      }catch(error){
          localStorage.removeItem('refreshToken')
          window.location.href='/login'
      }
    }
    return Promise.reject(error);
  });

export default axiosInstance