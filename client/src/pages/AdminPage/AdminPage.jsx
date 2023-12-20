
import { Menu } from "antd";
import { useState } from "react";
import { getItem } from "../../utils";
import {
  UserOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  CommentOutlined, WindowsOutlined
} from "@ant-design/icons";
import AdminUser from "../../components/AdminUser/AdminUser";
import AdminProduct from "../../components/AdminProduct/AdminProduct";
import AdminOrder from "../../components/AdminOrder/OrderAmin.jsx"
import * as OrderService from "../../services/OrderService";
import * as ProductService from "../../services/ProductService";
import * as UserService from "../../services/UserService";
import * as CommentService from "../../services/CommentService.js"

import { useSelector } from "react-redux";
import { useQueries } from "@tanstack/react-query";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import HeaderAdminPage from "./HeaderAdminPage/HeaderAdminPage";
import "./style.scss"
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import AdminDashboard from "../../components/AdminDashboard/AdminDashboard.jsx";
import { MdOutlineCategory } from "react-icons/md";
import { FaInbox } from "react-icons/fa";
import AdminCategory from "../../components/AdminCategory/AdminCategory.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const AdminPage = () => {
const dispatch =useDispatch()
  const user = useSelector((state) => state?.user);

  const [keySelected, setKeySelected] = useState("dashboard");
  const navigate = useNavigate()
// Lấy giá trị isAdmin từ localStorage
const isAdminLocalStorage = localStorage.getItem("isAdmin");
const isAdmin = isAdminLocalStorage !== null ? JSON.parse(isAdminLocalStorage) : null;
useEffect(() => {
  // Nếu isAdmin không tồn tại hoặc là false, chuyển hướng đến trang "notpermitted"
  if (!isAdmin) {
    navigate("/notpermitted");
  }
}, [isAdmin, navigate]);
  

  const items = [
    getItem("Dashboard", "dashboard", <WindowsOutlined />),
    getItem("Users", "users", <UserOutlined />),
    getItem("Category", "category", <MdOutlineCategory />),
    getItem("Products", "products", <FaInbox />    ),
    getItem("Orders", "orders", <ShoppingCartOutlined />),
    getItem("Comments", "comments", <CommentOutlined />),
  ];
  const renderPage = (key) => {
    switch (key) {
      case 'dashboard':
        return <AdminDashboard  data={memoCount}
        setKeySelected={setKeySelected}
        keySelected ={keySelected} 
        theme={theme}/>;
      case "users":
        return <AdminUser  theme={theme} />;
      case "products":
        return <AdminProduct  theme={theme} keySelected={keySelected} />;
      case "orders":
        return <AdminOrder theme={theme}/>;
      case "category":
       return <AdminCategory theme={theme}/>;
      default:
        return <></>;
    }
  };


  const getAllOrder = async () => {
    const res = await OrderService.getAllOrder(user?.access_token);
    return { data: res?.data, key: "orders" };
  };

  const getAllProducts = async () => {
    const res = await ProductService.getAllProduct();
    console.log("res1", res);
    return { data: res?.data, key: "products" };
  };

  const getAllUsers = async () => {
    const res = await UserService.getAllUser(user?.access_token);
    console.log("res", res);
    return { data: res?.data, key: "users" };
  }; 

  const getAllComment = async()=> {
    const res = await CommentService.getAllComment()
    console.log("res", res);
    return { data: res?.data, key: "comments" };
  }

  const queries = useQueries({
    queries: [
      { queryKey: ["products"], queryFn: getAllProducts, staleTime: 1000 * 60 },
      { queryKey: ["users"], queryFn: getAllUsers, staleTime: 1000 * 60 },
      { queryKey: ["orders"], queryFn: getAllOrder, staleTime: 1000 * 60 },
      { queryKey: ["comments"],queryFn : getAllComment , staleTime: 1000 * 60 },
    ],
  });
  const memoCount = useMemo(() => {
    const result = {};
    try {
      if (queries) {
        queries.forEach((query) => {
          result[query?.data?.key] = query?.data?.data?.length;
        });
      }
      return result;
    } catch (error) {
      return result;
    }
  }, [queries]);

  const handleOnCLick = ({ key }) => {
    setKeySelected(key);
  };

  const [theme, setTheme] = useState('light');
  const handleMoonlightClick = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };



  

  return (
    <>
      <div className="body" style={{ display: "flex", overflowX: "hidden" , backgroundColor: theme === 'light' ? '#EBEEF2' : '#19222D',}}>
        <div className="aside" >
          <div className="header-aside" style={{border:'none' , width: '100%', height: '60px', display: 'flex', justifyContent:'space-between', alignItems:'center' , backgroundColor: '#232E3E' , padding:'0 10%' }}>
            <h1 style={{color:'white', fontSize:'20px', fontWeight:'bold' , display:'flex' ,alignItems:'center'}}>ADMIN</h1>
            <button style={{color:'white' , fontSize:'15px' ,padding:'10px' ,backgroundColor:'#283547' ,borderRadius:'5px'}} onClick={handleMoonlightClick} > 
            {theme === 'light' ? <FaRegMoon /> : <FaRegSun />}
            </button>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={'dashboard'}
            style={{
              width: 220,
              minHeight:'100vh',
              backgroundColor:'#1F2937',
              color: 'white',
              border:'none'
            }}
            items={items}
            onClick={handleOnCLick}
          />
        </div>
        <div style={{ flex: 1 }}>
          <HeaderAdminPage theme={theme}/>
          <div style={{padding:'15px' ,height:'100vh' }}>    
        
          {renderPage(keySelected)}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
