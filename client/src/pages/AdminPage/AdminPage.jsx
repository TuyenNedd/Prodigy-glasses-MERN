import { Menu } from "antd";
import { useState } from "react";
import { getItem } from "../../utils";
import {
  UserOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import AdminUser from "../../components/AdminUser/AdminUser";
import AdminProduct from "../../components/AdminProduct/AdminProduct";
import OrderAdmin from "../../components/OrderAdmin/OrderAmin";
import * as OrderService from "../../services/OrderService";
import * as CommentService from "../../services/CommentService";
import * as ProductService from "../../services/ProductService";
import * as UserService from "../../services/UserService";

import CustomizedContent from "./components/CustomizedContent";
import { useSelector } from "react-redux";
import { useQueries } from "@tanstack/react-query";
import { useMemo } from "react";
import Loading from "../../components/LoadingComponent/Loading";
import AdminComment from "../../components/AdminComment/AdminComment.jsx";

import "./style.scss";

const AdminPage = () => {
  const user = useSelector((state) => state?.user);

  const items = [
    getItem("Users", "users", <UserOutlined />),
    getItem("Products", "products", <AppstoreOutlined />),
    getItem("Orders", "orders", <ShoppingCartOutlined />),
    getItem("Comments", "comment", <CommentOutlined />),
  ];

  const [keySelected, setKeySelected] = useState("");
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

  const getAllComment = async () => {
    const res = await CommentService.getAllComment(user?.access_token);
    return { data: res?.data, key: "comment" };
  };

  const queries = useQueries({
    queries: [
      { queryKey: ["products"], queryFn: getAllProducts, staleTime: 1000 * 60 },
      { queryKey: ["users"], queryFn: getAllUsers, staleTime: 1000 * 60 },
      { queryKey: ["orders"], queryFn: getAllOrder, staleTime: 1000 * 60 },
      { queryKey: ["comment"], queryFn: getAllComment, staleTime: 1000 * 60 },
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

  const handleOnCLick = ({ key }) => {
    setKeySelected(key);
  };
  console.log("memoCount", memoCount);
  return (
    <>
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
          {renderPage(keySelected)}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
