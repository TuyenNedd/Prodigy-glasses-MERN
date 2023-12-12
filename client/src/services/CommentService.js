import axios from "axios";
export const getAllComment = async (access_token) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_API_KEY}/comment/get-all`,
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
  console.log("iddđ",id);
  console.log("accasasdasdas",access_token);
  const res = await axios.delete(`${import.meta.env.VITE_APP_API_KEY}/comment/delete-comment/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
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
