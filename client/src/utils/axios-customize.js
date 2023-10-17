import axios from "axios";
const baseUrl = import.meta.env.VITE_BACKEND_URL
const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
  });


instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;


//add a request
instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});


instance.interceptors.response.use(function (response) {
  console.log(response);
  return response && response.data ? response.data : response;
}, function (error) {
  console.log(error);
  return error?.response?.data ??  Promise.reject(error);
});



  export default instance