import axios from "axios";
export const axiosJWT = axios.create();

export const loginUser = async (data) => {
 
    try {
    const res = await axios.post(`${import.meta.env.VITE_APP_API_KEY}/user/sign-in`, data);
    return res.data;
} catch (error) {
    console.error("Error", error);
  }

    
};
export const signupUser = async (data) => {
  try {
  const res = await axios.post(`${import.meta.env.VITE_APP_API_KEY}/user/sign-up`, data);
  return res.data;
} catch (error) {
  console.error("Error", error);
}};


export const getDetailsUser = async (id, access_token) => {
  try{
    const res = await axiosJWT.get(`${import.meta.env.VITE_APP_API_KEY}/user/get-details/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    },);
    return res.data;
  } catch(error){
    console.error("Error", error);
  }
};

// export const deleteUser = async (id, access_token, data) => {
//     const res = await axiosJWT.delete(`${import.meta.env.REACT_APP_API_URL}/user/delete-user/${id}`, data, {
//         headers: {
//             token: `Bearer ${access_token}`,
//         }
//     },);
//     return res.data;
// };

// export const getAllUser = async (access_token) => {
//     const res = await axiosJWT.get(`${import.meta.env.REACT_APP_API_URL}/user/getAll`, {
//         headers: {
//             token: `Bearer ${access_token}`,
//         }
//     },);
//     return res.data;
// };

export const refreshToken = async () => {
  try{
    const res = await axios.post(`${import.meta.env.VITE_APP_API_KEY}/user/refresh-token`, {
        withCredentials: true
    });
    return res.data;
  }catch(error){
    console.log("Error", error);
  }
};

// export const refreshToken = async (refreshToken) => {
//     console.log("refreshToken", refreshToken);
//     const res = await axios.post(`${import.meta.env.REACT_APP_API_URL}/user/refresh-token`, {} , {
//         headers: {
//             token: `Bearer ${refreshToken}`,
//         }
//     });
//     return res.data;
// };

export const logoutUser = async () => {
  try{
    const res = await axios.post(`${import.meta.env.VITE_APP_API_KEY}/user/log-out`);
    return res.data;
  } catch(error ){
    console.log("error",error);
  }
};

export const updateUser = async (id, data, access_token) => {
  try{
    const res = await axiosJWT.put(`${import.meta.env.VITE_APP_API_KEY}/user/update-user/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    });
    return res.data;
  }catch(error){
    console.log("error", error);
  }
};

// export const deleteManyUser = async (data, access_token) => {
//     const res = await axiosJWT.post(`${import.meta.env.REACT_APP_API_URL}/user/delete-many`, data, {
//         headers: {import { signupUser } from './UserSevice';

//             token: `Bearer ${access_token}`,
//         }
//     });
//     return res.data;
// };