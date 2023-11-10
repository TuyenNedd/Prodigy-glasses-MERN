import React from "react";
import { Spin } from "antd";

const Loading = ({children, isLoading, deplay = 500}) => {
  return (
    <Spin spinning={isLoading} delay={deplay}>
      {children}
    </Spin>
  );
};
export default Loading;
