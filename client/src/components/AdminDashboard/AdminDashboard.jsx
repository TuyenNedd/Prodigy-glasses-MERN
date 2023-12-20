import React from "react";
import {
  UserOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  CommentOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import "./style.scss";
import TypeChart from "../TypeChart/TypeChart";
const AdminDashboard = ({ data, setKeySelected, theme }) => {
  const user = useSelector((state) => state?.user);
  const name = user.name;

  return (
    <div className="body" style={{ padding: "0 5%" }}>
      <div className="title">
        <h1
          style={{
            paddingLeft: "2%",
            fontWeight: "bold",
            fontSize: "25px",
            color: theme === "light" ? "black" : "white",
          }}
        >
          DASHBOARD
        </h1>
        <div
          style={{
            paddingLeft: "2%",
            color: theme === "light" ? "grey" : "white",
            fontSize: "17px",
            fontWeight: "500",
          }}
        >
          Welcome{" "}
          <span style={{ color: "blue ", fontWeight: "bold" }}>{name} ,</span>{" "}
          everything looks great.
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {(data && Object.keys(data))?.map((item) => {
          return (
            <div className="item" key={Math.random()}>
              <div className="top">
                <div
                  className="left"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme === "light" ? "black" : "grey",
                      fontWeight: "bold",
                      fontSize: "35px",
                    }}
                  >
                    {" "}
                    {data[item]}
                  </span>
                  <span style={{ color: "grey", fontWeight: "500" }}>
                    Total {item}
                  </span>
                </div>
                <div className="right">
                  <div
                    style={{
                      borderRadius: "25px",
                      backgroundColor: "#F6F7F9",
                      padding: "16px",
                    }}
                  >
                    {item === "users" && (
                      <UserOutlined
                        style={{ fontSize: "29px", color: "blue" }}
                      />
                    )}
                    {item === "products" && (
                      <AppstoreOutlined
                        style={{ fontSize: "29px", color: "blue" }}
                      />
                    )}
                    {item === "orders" && (
                      <ShoppingCartOutlined
                        style={{ fontSize: "29px", color: "blue" }}
                      />
                    )}
                    {item === "comments" && (
                      <CommentOutlined
                        style={{ fontSize: "29px", color: "blue" }}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="bot" onClick={() => setKeySelected(item)}>
                {item === "users" && (
                  <span
                    style={{ color: "blue" }}
                    onClick={() => {
                      setKeySelected("users");
                    }}
                  >
                    View all users
                  </span>
                )}
                {item === "products" && (
                  <span
                    style={{ color: "blue" }}
                    onClick={() => {
                      setKeySelected("products");
                    }}
                  >
                    View all products
                  </span>
                )}
                {item === "orders" && (
                  <span
                    style={{ color: "blue" }}
                    onClick={() => {
                      setKeySelected("orders");
                    }}
                  >
                    View all orders
                  </span>
                )}
                {item === "comments" && (
                  <span
                    style={{ color: "blue" }}
                    onClick={() => {
                      setKeySelected("comments");
                    }}
                  >
                    View all comments
                  </span>
                )}
                <ArrowRightOutlined className="icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
