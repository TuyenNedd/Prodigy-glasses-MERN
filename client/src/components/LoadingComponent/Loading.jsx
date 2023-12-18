import { Skeleton, Space, Spin } from "antd";
import { CircularProgress } from "@mui/material";
import React from "react";
import "./style.scss";
import { LoadingOutlined } from "@ant-design/icons";
const Loading = ({ children, isLoading, deday = 200 }) => {
  return (
    <>
      <Spin
        className="inline-flex"
        spinning={isLoading}
        delay={deday}
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 30,
              color: "var(--primaryColor)",
              fontWeight: "700",
            }}
            spin
          />
        }
      >
        {children}
      </Spin>

      {/* <Spin
        spinning={isLoading}
        delay={deday}
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
      /> */}

      {/* <Skeleton active loading={isLoading}>
        {children}
      </Skeleton> */}
      {/* <CircularProgress
        active
        disableShrink={isLoading}
        style={{ color: "var(--primaryColor)" }}
      >
        {children}
      </CircularProgress> */}
    </>
  );
};

export default Loading;
