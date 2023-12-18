import axios from "axios";
import { axiosJWT } from "./UserService.js";
export const getAllComment = async (access_token) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL_BACKEND}/comment/get-all`,
      {
        headers: {
          token: `Bearer ${access_token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (id, access_token) => {
  console.log("deleteComment ~ access_token:", access_token);
  console.log("deleteComment ~ id:", id);
  try {
    const res = await axiosJWT.delete(
      `${import.meta.env.VITE_API_URL_BACKEND}/comment/delete-comment/${id}`,
      {
        headers: {
          token: `Bearer ${access_token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("deleteComment ~ error:", error);
  }
};

export const createComment = async (data) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL_BACKEND}/comment/create`,
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// export const getUserById = async (id, access_token) => {
//   console.log("íisiss",id);
//   try {
//     const response = await axios.get(
//       `${import.meta.env.VITE_APP_API_KEY}/user/get-details/${id}`,
//       {import { message } from 'antd';

//         headers: {
//           token: `Bearer ${access_token}`,
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error("Error fetching user details", error);
//     throw error;
//   }
// };
