import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routes } from "./routes/index.js";
import { useEffect } from "react";
import axios from "axios";
function App() {
  useEffect (()=>{
  fetchApi();
  },[]);
  console.log("process bac",import.meta.env.VITE_APP_API_KEY);
   const fetchApi =async() => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_KEY}/product/get-all`);
      const data = await response.data;
      console.log("data",data);
      return data;

      
    } catch (error) {
      console.error("Error", error);
    }
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
