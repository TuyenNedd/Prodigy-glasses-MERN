import { Menu, Switch } from "antd";
import { useEffect, useState, useMemo } from "react";
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

import HeaderAdminPage from "./HeaderAdminPage/HeaderAdminPage";
import "./style.scss";
import { FaRegMoon, FaRegSun, FaInbox } from "react-icons/fa";
import AdminDashboard from "../../components/AdminDashboard/AdminDashboard.jsx";
import { MdOutlineCategory } from "react-icons/md";
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
    console.log("res1", res);
    return { data: res?.data, key: "products" };
  };

  const getAllUsers = async () => {
    const res = await UserService.getAllUser(user?.access_token);
    return { data: res?.data, key: "users" };
  };

  const getAllComment = async () => {
    const res = await CommentService.getAllComment();
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
          <div style={{ padding: "20px" }}>
            <Switch
              onClick={handleMoonlightClick}
              checkedChildren={<FaRegMoon />}
              unCheckedChildren={<FaRegSun />}
              defaultChecked
            />
          </div>
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
  );
};

export default AdminPage;
