import React, { useEffect, useState } from "react";
import { Avatar, Dropdown, Space } from "antd";
import {
  UserOutlined,
  DownOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../../services/UserService";
import { resetUser } from "../../../redux/slides/userSlide";
import { useDispatch } from "react-redux";
const HeaderAdminPage = ({ theme }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const avatar = user?.avatar;
  const name = user.name;

  const [userAvatar, setUserAvatar] = useState("");
  useEffect(() => {
    setUserAvatar(avatar);
  });
  const handleLogout = async () => {
    await UserService.logoutUser();
    dispatch(resetUser());
    navigate("/");
    localStorage.clear();
  };

  const styles = {
    wrapper: {
      margin: "10px",
      borderRadius: "5px",
    },
    label: {
      cursor: "pointer",
    },
  };

  const items = [
    {
      key: "1",
      label: (
        <div style={styles.wrapper}>
          <label onClick={() => navigate("/")} style={styles.label}>
            <HomeOutlined /> <span style={{ paddingLeft: "5px" }}>Home</span>
          </label>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div style={styles.wrapper}>
          <label onClick={() => handleLogout()}>
            <LogoutOutlined />{" "}
            <span style={{ paddingLeft: "5px" }}>Logout</span>
          </label>
        </div>
      ),
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "101%",
          height: "100px",
          backgroundColor: theme === "light" ? "white" : "#1F2937",
          alignItems: "center",
          justifyContent: "right",
          padding: "0 100px",
          border: "none",
        }}
      >
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="avatar">
                {userAvatar ? (
                  <Avatar size="medium" src={avatar} icon={<UserOutlined />} />
                ) : (
                  <Avatar size="large" icon={<UserOutlined />} />
                )}
              </div>
              <div
                style={{
                  padding: "0 6px",
                  color: theme === "light" ? "black" : "white",
                  fontSize: "15px",
                  fontWeight: "500",
                  textTransform: "uppercase",
                }}
              >
                {" "}
                {name} <DownOutlined />
              </div>
            </div>
          </a>
        </Dropdown>
      </div>
    </>
  );
};

export default HeaderAdminPage;
