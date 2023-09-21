import { useState, useEffect } from "react";
import axios from "axios";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Gửi yêu cầu API bằng Axios khi thành phần được tạo (componentDidMount)
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data.users); // Lưu dữ liệu vào state
        console.log(".then ~ data:", data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>My Component</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
