import axios from "axios";

export const axiosJWT = axios.create();

export const loginUser = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL_BACKEND}/user/sign-in`,
    data
  );
  return res.data;
};

export const signupUser = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL_BACKEND}/user/sign-up`,
    data
  );
  console.log("signupUser ~ res.data:", res.data);
  return res.data;
};

export const getDetailsUser = async (id, access_token) => {
  const res = await axiosJWT.get(
    `${import.meta.env.VITE_API_URL_BACKEND}/user/get-details/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const deleteUser = async (id, access_token) => {
  const res = await axiosJWT.delete(
    `${import.meta.env.VITE_API_URL_BACKEND}/user/delete-user/${id}`,

    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const getAllUser = async (access_token) => {
  const res = await axiosJWT.get(
    `${import.meta.env.VITE_API_URL_BACKEND}/user/getAll`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

// export const refreshToken = async () => {
//     const res = await axios.post(`${import.meta.env.VITE_API_URL_BACKEND}/user/refresh-token`, {
//         withCredentials: true
//     })
//     return res.data
// }

export const refreshToken = async (refreshToken) => {
  console.log("refreshToken", refreshToken);
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL_BACKEND}/user/refresh-token`,
    {},
    {
      headers: {
        token: `Bearer ${refreshToken}`,
      },
    }
  );
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL_BACKEND}/user/log-out`
  );
  return res.data;
};

export const updateUser = async (id, data, access_token) => {
  const res = await axiosJWT.put(
    `${import.meta.env.VITE_API_URL_BACKEND}/user/update-user/${id}`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const deleteManyUser = async (data, access_token) => {
  const res = await axiosJWT.post(
    `${import.meta.env.VITE_API_URL_BACKEND}/user/delete-many`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};
export const getUserById = async (userId, access_token) => {
  try {
    const res = await axiosJWT.get(
      `${import.meta.env.VITE_API_URL_BACKEND}/user/get-user/${userId}`,
      {
        headers: {
          token: `Bearer ${access_token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching user details by ID:", error);
    throw error; // You may want to handle the error appropriately in your application
  }
};
