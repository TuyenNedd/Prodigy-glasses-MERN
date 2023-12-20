
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
import * as CommentService from "../../services/CommentService";
import * as ProductService from "../../services/ProductService";
import * as UserService from "../../services/UserService";
import * as CommentService from "../../services/CommentService.js"

import { useSelector } from "react-redux";
import { useQueries } from "@tanstack/react-query";
import { useMemo } from "react";
<<<<<<< HEAD
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
=======
import Loading from "../../components/LoadingComponent/Loading";
import AdminComment from "../../components/AdminComment/AdminComment.jsx";

import "./style.scss";

>>>>>>> master
const AdminPage = () => {
  const user = useSelector((state) => state?.user);

  const [keySelected, setKeySelected] = useState("dashboard");
  const navigate = useNavigate()
// Lấy giá trị isAdmin từ localStorage
const isAdminLocalStorage = localStorage.getItem("isAdmin");
const isAdmin = isAdminLocalStorage !== null ? JSON.parse(isAdminLocalStorage) : null;  
useEffect(() => {
  if (!isAdmin) {
    navigate("/notpermitted");
  }
}, [isAdmin, navigate]);
  

  const items = [ // tạo menu
    getItem("Dashboard", "dashboard", <WindowsOutlined />),
    getItem("Users", "users", <UserOutlined />),
    getItem("Category", "category", <MdOutlineCategory />),
    getItem("Products", "products", <FaInbox />    ),
    getItem("Orders", "orders", <ShoppingCartOutlined />),
    getItem("Comments", "comment", <CommentOutlined />),
  ];
  const renderPage = (key) => { // xác định component cần được render
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

// lấy dữ liệu
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

<<<<<<< HEAD
  const getAllComment = async()=> {
    const res = await CommentService.getAllComment()
    console.log("res", res);
    return { data: res?.data, key: "comments" };
  }

  const queries = useQueries({ // lấy dữ liệu
=======
  const getAllComment = async () => {
    const res = await CommentService.getAllComment(user?.access_token);
    return { data: res?.data, key: "comment" };
  };

  const queries = useQueries({
>>>>>>> master
    queries: [
      { queryKey: ["products"], queryFn: getAllProducts, staleTime: 1000 * 60 },
      { queryKey: ["users"], queryFn: getAllUsers, staleTime: 1000 * 60 },
      { queryKey: ["orders"], queryFn: getAllOrder, staleTime: 1000 * 60 },
<<<<<<< HEAD
      { queryKey: ["comments"],queryFn : getAllComment , staleTime: 1000 * 60 },
=======
      { queryKey: ["comment"], queryFn: getAllComment, staleTime: 1000 * 60 },
>>>>>>> master
    ],
  });
  const memoCount = useMemo(() => { //useMemo là một hook của React dùng để memoize giá trị, giữ cho giá trị không bị tính toán lại mỗi lần render nếu giá trị của các dependencies không thay đổi
    const result = {};
    try {
      //Kiểm tra nếu queries tồn tại, thực hiện vòng lặp forEach để duyệt qua từng query trong mảng queries.Với mỗi query, lấy giá trị data và key, và gán giá trị chiều dài của mảng data (query?.data?.data?.length) vào thuộc tính tương ứng trong đối tượng result dựa trên key.
      if (queries) {
        queries.forEach((query) => {
          result[query?.data?.key] = query?.data?.data?.length; 
        });
      }
      console.log('result' ,result);
      return result;
    } catch (error) {
      return result;
    }
  }, [queries]);
<<<<<<< HEAD
=======
  const COLORS = {
    users: ["#e66465"],
    products: ["#3f2b96"],
    orders: ["#38ef7d"],
    comment: ["#ff9e17"],
  };

  const renderPage = (key) => {
    switch (key) {
      case "users":
        return <AdminUser />;
      case "products":
        return <AdminProduct />;
      case "orders":
        return <OrderAdmin />;
      case "comment":
        return <AdminComment />;
      default:
        return <></>;
    }
  };
>>>>>>> master

  const handleOnCLick = ({ key }) => {
    setKeySelected(key);
  };

  const [theme, setTheme] = useState('light');
  const handleMoonlightClick = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <>
<<<<<<< HEAD
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
        
=======
      <div style={{ display: "flex", overflowX: "hidden" }}>
        <Menu
          className="h-screen bg-blue-950 text-white"
          mode="inline"
          items={items}
          onClick={handleOnCLick}
        />
        <div className="flex w-full p-5">
          {/* <Loading
            isLoading={
              memoCount &&
              Object.keys(memoCount) &&
              Object.keys(memoCount).length !== 3
            }
          ></Loading> */}
          {!keySelected && (
            <CustomizedContent
              data={memoCount}
              colors={COLORS}
              setKeySelected={setKeySelected}
            />
          )}
>>>>>>> master
          {renderPage(keySelected)}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
