import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/index.js";
import { useEffect } from "react";
import axios from "axios";
import { isJsonString } from "./utils.js";
import {jwtDecode} from "jwt-decode";
import * as UserService from "./services/UserSevice.js";
import { useDispatch } from "react-redux";
import { updateUser } from "./redux/slides/useSlide.jsx";

function App() {
  // useEffect (()=>{

  // fetchApi();
  // },[]);
  // console.log("process bac",import.meta.env.VITE_APP_API_KEY);
  //  const fetchApi =async() => {
  //   try {
  //     const response = await axios.get(`${import.meta.env.VITE_APP_API_KEY}/product/get-all`);
  //     const data = await response.data;import { jwtDecode } from 'jwt-decode';


  //     console.log("data",data);
  //     return data;

      
  //   } catch (error) {
  //     console.error("Error", error);
  //   }
  // };
  useEffect(()=>{
    const {storeData, decoded} = handleDecoded();
    
        if(decoded?.id){
          handlGetDetailsUser(decoded?.id, storeData);
          
        

      }
     
    }
 

  ,[]);
  const handleDecoded =()=>{
    let storeData = localStorage.getItem("access_token");
    let decoded = {};
   
    if (storeData && isJsonString(storeData)){
      storeData = JSON.parse(storeData);
         decoded = jwtDecode(storeData);
        console.log("decoooo app",decoded);
        

      }
return { decoded, storeData};
     
    };
 
  
  
  UserService.axiosJWT.interceptors.request.use( async (config) =>{
    const currenTime  = new Date();
    const { decoded} = handleDecoded();
    if(decoded?.exp< currenTime.getTime()/1000){
      const data = await UserService.refreshToken();
      config.headers["token"] = `Baerer ${data?.access_token}`;
    }


    return config;
  }, function (error){
    return Promise.reject(error);
  });
  const dispatch = useDispatch();
  const handlGetDetailsUser = async(id,token)=>{
    const res =await UserService.getDetailsUser(id,token);
    dispatch(updateUser({...res?.data,access_token :token}));
    
    console.log(res);

  };


  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            // eslint-disable-next-line react/jsx-key
            return <Route path={route.path} element={<Page></Page>}></Route>;
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
