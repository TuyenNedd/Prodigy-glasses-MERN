import {
  UserOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  CommentOutlined,
} from "@ant-design/icons";

const CustomizedContent = (props) => {
  const { data, colors, setKeySelected } = props;
  return (
    <div className="flex gap-3 flex-1">
      {Object.keys(data) &&
        Object.keys(data)?.map((item) => {
          return (
            <div
              className="flex p-4 h-52 flex-1"
              key={Math.random()}
              style={{
                background: `${colors[item] && colors[item][0]}`,
                display: "flex",
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={() => setKeySelected(item)}
            >
              <span style={{ color: "#fff", fontSize: 30 }}>
                {item === "users" && <UserOutlined />}
                {item === "products" && <AppstoreOutlined />}
                {item === "orders" && <ShoppingCartOutlined />}
                {item === "comment" && <CommentOutlined />}
              </span>
              <span
                className="font-semibold"
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {item}
              </span>
              <span
                className="font-semibold"
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {data[item]}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default CustomizedContent;
