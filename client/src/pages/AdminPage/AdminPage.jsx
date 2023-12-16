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
import OrderAdmin from "../../components/OrderAdmin/OrderAmin";
import * as OrderService from "../../services/OrderService";
import * as ProductService from "../../services/ProductService";
import * as UserService from "../../services/UserService";
import * as CommentService from "../../services/CommentService.js"
import CustomizedContent from "./components/CustomizeContent"
import { useSelector } from "react-redux";
import { useQueries } from "@tanstack/react-query";
import { useMemo } from "react";
import Loading from "../../components/LoadingComponent/Loading";
import HeaderAdminPage from "./HeaderAdminPage/HeaderAdminPage";
import "./style.scss"

const AdminPage = () => {
  const user = useSelector((state) => state?.user);
  const items = [
    getItem("Dashboard", "dashboard", <WindowsOutlined />),
    getItem("Users", "users", <UserOutlined />),
    getItem("Products", "products", <AppstoreOutlined />),
    getItem("Orders", "orders", <ShoppingCartOutlined />),
    getItem("Comments", "comments", <CommentOutlined />),
  ];
  const renderPage = (key) => {
    switch (key) {
      case 'dashboard':
        return <CustomizedContent />;
      case "users":
        return <AdminUser />;
      case "products":
        return <AdminProduct />;
      case "orders":
        return <OrderAdmin />;
      default:
        return <></>;
    }
  };

  const [keySelected, setKeySelected] = useState("dashboard");
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

  // const getAllComment = async()=> {
  //   const res = await CommentService.getAllComment()
  //   console.log("res", res);
  //   return { data: res?.data, key: "comments" };
  // }

  const queries = useQueries({
    queries: [
      { queryKey: ["products"], queryFn: getAllProducts, staleTime: 1000 * 60 },
      { queryKey: ["users"], queryFn: getAllUsers, staleTime: 1000 * 60 },
      { queryKey: ["orders"], queryFn: getAllOrder, staleTime: 1000 * 60 },
      // { queryKey: ["comments"],queryFn : getAllComment , staleTime: 1000 * 60 },
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

  return (
    <>
      <div style={{ display: "flex", overflowX: "hidden" , backgroundColor:'#EBEEF2'}}>
        <div className="aside" >
          <div className="aside-menu" style={{ width: '99.5%', height: '60px', display: 'flex', justifyContent: 'center', backgroundColor: '#232E3E' }}>
            {/* <img style={{ width: '130px', height: 'auto', color: 'white' }} src="../../../public/images/logo/pdglogo.svg" alt="" /> */}
            <h1 style={{color:'white', fontSize:'25px', fontWeight:'bold' , display:'flex' ,alignItems:'center'}}>ADMIN</h1>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={'dashboard'}
            style={{
              width: 220,
              boxShadow: "1px 1px 2px #ccc",
              height: "100vh",
              backgroundColor:'#1F2937',
              color: 'white'
            }}
            items={items}
            onClick={handleOnCLick}
          />
        </div>
        <div style={{ flex: 1 }}>
          <HeaderAdminPage />
          <div style={{padding:'15px'}}>
          <Loading
            isLoading={
              memoCount &&
              Object.keys(memoCount) &&
              Object.keys(memoCount).length !== 3
            }
          >      
          {
            keySelected === 'dashboard' ? (
              <CustomizedContent
                data={memoCount}
                setKeySelected={setKeySelected}
               
              />
            ) : null
          }
          </Loading>
          {renderPage(keySelected)}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
