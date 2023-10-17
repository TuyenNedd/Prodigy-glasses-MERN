import React from 'react'; // You need to import React
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './components/Layout/Header';
import LoginPage from './components/LoginPage'; // You also need to import LoginPage
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import Footer from './components/Layout/Footer';

const Layout = () => {
  const isLoginRoute = window.location.pathname.startsWith("/login")
  const isRegister = window.location.pathname.startsWith("/register")
  return (
    <>
    {isLoginRoute || isRegister ? null : <Header />}
      <Outlet />
    {isLoginRoute || isRegister ? null : <Footer />}
    </>
  );
};

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <div>404</div> ,
      children : [
        {index : true , element : <HomePage />},
        {path : 'login' , element : <LoginPage />} ,
        {path : 'register' , element : <RegisterPage />}
      ]
    },
   
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </>
  );
}
