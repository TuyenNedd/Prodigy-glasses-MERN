import AdminComment from "../../components/AdminComment/AdminComment";
import { CommentOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { getItem } from "../../utils";

const AdminPage = () => {
  const renderPage = (key) => {
    switch (key) {
      case "Comment":
        return <AdminComment />;
      default:
        break;
    }
  };

  const [keySelected, setKeySelected] = useState("");

  const items = [getItem("Comment", "Comment", <CommentOutlined />)];

  const handleOnclick = ({ key }) => {
    setKeySelected(key);
   
  };
  return (
    <div className="flex w-full">
      <Menu
        mode="inline"
        style={{
          width: 256,
        }}
        items={items}
        onClick={handleOnclick}
      />
      <div className=" w-full">
       {renderPage(keySelected)}
      </div>

    </div>
  );
};

export default AdminPage;
