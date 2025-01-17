import { Spin } from "antd";
import React from "react";
import "./style.scss";
import { LoadingOutlined } from "@ant-design/icons";
const Loading = ({ children, isLoading, deday = 200 }) => {
  return (
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
  );
};

export default Loading;
