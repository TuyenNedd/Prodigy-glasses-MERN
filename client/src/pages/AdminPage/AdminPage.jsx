// import { Menu } from "antd";
// import { useState } from "react";
// import { getItem } from "../../utils";
// import {
//   UserOutlined,
//   AppstoreOutlined,
//   ShoppingCartOutlined,
//   CommentOutlined, WindowsOutlined
// } from "@ant-design/icons";
// import AdminUser from "../../components/AdminUser/AdminUser";
// import AdminProduct from "../../components/AdminProduct/AdminProduct";
// import OrderAdmin from "../../components/OrderAdmin/OrderAmin";
// import * as OrderService from "../../services/OrderService";
// import * as ProductService from "../../services/ProductService";
// import * as UserService from "../../services/UserService";
// import * as CommentService from "../../services/CommentService.js"
// import { useSelector } from "react-redux";
// import { useQueries } from "@tanstack/react-query";
// import { useMemo } from "react";
// import HeaderAdminPage from "./HeaderAdminPage/HeaderAdminPage";
// import "./style.scss"
// import AdminDashboard from "../../components/AdminDashboard/AdminDashboard.jsx";

// const AdminPage = () => {
//   const user = useSelector((state) => state?.user);
//   const items = [
//     getItem("Dashboard", "dashboard", <WindowsOutlined />),
//     getItem("Users", "users", <UserOutlined />),
//     getItem("Products", "products", <AppstoreOutlined />),
//     getItem("Orders", "orders", <ShoppingCartOutlined />),
//     getItem("Comments", "comments", <CommentOutlined />),
//   ];
//   const renderPage = (key) => {
//     switch (key) {
//       case 'dashboard':
//         return <AdminDashboard   data={memoCount}
//         setKeySelected={setKeySelected}
//       />;
//       case "users":
//         return <AdminUser />;
//       case "products":
//         return <AdminProduct />;
//       case "orders":
//         return <OrderAdmin />;
//       default:
//         return <></>;
//     }
//   };

//   const [keySelected, setKeySelected] = useState("dashboard");
//   const getAllOrder = async () => {
//     const res = await OrderService.getAllOrder(user?.access_token);
//     return { data: res?.data, key: "orders" };
//   };

//   const getAllProducts = async () => {
//     const res = await ProductService.getAllProduct();
//     console.log("res1", res);
//     return { data: res?.data, key: "products" };
//   };

//   const getAllUsers = async () => {
//     const res = await UserService.getAllUser(user?.access_token);
//     console.log("res", res);
//     return { data: res?.data, key: "users" };
//   };

//   const getAllComment = async()=> {
//     const res = await CommentService.getAllComment()
//     console.log("res", res);
//     return { data: res?.data, key: "comments" };
//   }

//   const queries = useQueries({
//     queries: [
//       { queryKey: ["products"], queryFn: getAllProducts, staleTime: 1000 * 60 },
//       { queryKey: ["users"], queryFn: getAllUsers, staleTime: 1000 * 60 },
//       { queryKey: ["orders"], queryFn: getAllOrder, staleTime: 1000 * 60 },
//       { queryKey: ["comments"],queryFn : getAllComment , staleTime: 1000 * 60 },
//     ],
//   });
//   const memoCount = useMemo(() => {
//     const result = {};
//     try {
//       if (queries) {
//         queries.forEach((query) => {
//           result[query?.data?.key] = query?.data?.data?.length;
//         });
//       }
//       return result;
//     } catch (error) {
//       return result;
//     }
//   }, [queries]);

//   const handleOnCLick = ({ key }) => {
//     setKeySelected(key);
//   };

//   return (
//     <>
//       <div style={{ display: "flex", overflowX: "hidden" , backgroundColor:'#EBEEF2'}}>
//         <div className="aside" >
//           <div className="aside-menu" style={{ width: '99.5%', height: '60px', display: 'flex', justifyContent: 'center', backgroundColor: '#232E3E' }}>
//             {/* <img style={{ width: '130px', height: 'auto', color: 'white' }} src="../../../public/images/logo/pdglogo.svg" alt="" /> */}
//             <h1 style={{color:'white', fontSize:'25px', fontWeight:'bold' , display:'flex' ,alignItems:'center'}}>ADMIN</h1>
//           </div>
//           <Menu
//             mode="inline"
//             defaultSelectedKeys={'dashboard'}
//             style={{
//               width: 220,
//               boxShadow: "1px 1px 2px #ccc",
//               height: "100vh",
//               backgroundColor:'#1F2937',
//               color: 'white'
//             }}
//             items={items}
//             onClick={handleOnCLick}
//           />
//         </div>
//         <div style={{ flex: 1 }}>
//           <HeaderAdminPage />
//           <div style={{padding:'15px'}}>
//           {renderPage(keySelected)}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminPage;
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { getItem } from "../../utils";
import {
  UserOutlined,
  ShoppingCartOutlined,
  CommentOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import AdminUser from "../../components/AdminUser/AdminUser";
import AdminProduct from "../../components/AdminProduct/AdminProduct";
import AdminOrder from "../../components/AdminOrder/OrderAmin.jsx";
import * as OrderService from "../../services/OrderService";
import * as ProductService from "../../services/ProductService";
import * as UserService from "../../services/UserService";
import * as CommentService from "../../services/CommentService.js";

import { useSelector } from "react-redux";
import { useQueries } from "@tanstack/react-query";
import { useMemo } from "react";

import HeaderAdminPage from "./HeaderAdminPage/HeaderAdminPage";
import "./style.scss";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import AdminDashboard from "../../components/AdminDashboard/AdminDashboard.jsx";
import { MdOutlineCategory } from "react-icons/md";
import { FaInbox } from "react-icons/fa";
import AdminCategory from "../../components/AdminCategory/AdminCategory.jsx";
import AdminComment from "../../components/AdminComment/AdminComment.jsx";
import { useNavigate } from "react-router-dom";
const AdminPage = () => {
  const user = useSelector((state) => state?.user);
  const [keySelected, setKeySelected] = useState("dashboard");
  const navigate = useNavigate();

  const items = [
    getItem("Dashboard", "dashboard", <WindowsOutlined />),
    getItem("Users", "users", <UserOutlined />),
    getItem("Category", "category", <MdOutlineCategory />),
    getItem("Products", "products", <FaInbox />),
    getItem("Orders", "orders", <ShoppingCartOutlined />),
    getItem("Comments", "comments", <CommentOutlined />),
  ];
  const renderPage = (key) => {
    switch (key) {
      case "dashboard":
        return (
          <AdminDashboard
            data={memoCount}
            setKeySelected={setKeySelected}
            keySelected={keySelected}
            theme={theme}
          />
        );
      case "users":
        return <AdminUser theme={theme} />;
      case "products":
        return <AdminProduct theme={theme} keySelected={keySelected} />;
      case "orders":
        return <AdminOrder theme={theme} />;
      case "category":
        return <AdminCategory theme={theme} />;
      case "comments":
        return <AdminComment theme={theme} />;
      default:
        return <></>;
    }
  };

  const isAdminLocalStorage = localStorage.getItem("isAdmin");
  const isAdmin =
    isAdminLocalStorage !== null ? JSON.parse(isAdminLocalStorage) : null;
  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [isAdmin, navigate]);

  const getAllOrder = async () => {
    const res = await OrderService.getAllOrder(user?.access_token);
    return { data: res?.data, key: "orders" };
  };

  const getAllProducts = async () => {
    const res = await ProductService.getAllProduct();
    // console.log("res1", res);
    return { data: res?.data, key: "products" };
  };

  const getAllUsers = async () => {
    const res = await UserService.getAllUser(user?.access_token);
    // console.log("res", res);
    return { data: res?.data, key: "users" };
  };

  const getAllComment = async () => {
    const res = await CommentService.getAllComment();
    // console.log("res", res);
    return { data: res?.data, key: "comments" };
  };

  const queries = useQueries({
    queries: [
      { queryKey: ["products"], queryFn: getAllProducts, staleTime: 1000 * 60 },
      { queryKey: ["users"], queryFn: getAllUsers, staleTime: 1000 * 60 },
      { queryKey: ["orders"], queryFn: getAllOrder, staleTime: 1000 * 60 },
      { queryKey: ["comments"], queryFn: getAllComment, staleTime: 1000 * 60 },
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

  const handleMoonlightClick = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const [theme, setTheme] = useState("light");

  return (
    <>
      <div
        className="body"
        style={{
          display: "flex",
          overflowX: "hidden",
          backgroundColor: theme === "light" ? "#EBEEF2" : "#19222D",
        }}
      >
        <div className="aside fixed">
          <div
            className="header-aside"
            style={{
              border: "none",
              width: "100%",
              height: "100px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#232E3E",
              padding: "0 10%",
            }}
          >
            <div className="w-28">
              <img
                className="brightness-[100]"
                src="/images/logo/pdg-payment.png"
              />
            </div>
            <button
              style={{
                color: "white",
                fontSize: "15px",
                padding: "10px",
                backgroundColor: "#283547",
                borderRadius: "5px",
              }}
              onClick={handleMoonlightClick}
            >
              {theme === "light" ? <FaRegMoon /> : <FaRegSun />}
            </button>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={"dashboard"}
            style={{
              width: 220,
              minHeight: "100vh",
              backgroundColor: "#1F2937",
              color: "white",
              border: "none",
            }}
            items={items}
            onClick={handleOnCLick}
          />
        </div>
        <div style={{ flex: 1 }}>
          <HeaderAdminPage theme={theme} />
          <div
            className="ml-[220px]"
            style={{ padding: "15px", height: "100vh" }}
          >
            {renderPage(keySelected)}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
