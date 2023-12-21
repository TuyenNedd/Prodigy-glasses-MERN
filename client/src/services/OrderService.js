import { axiosJWT } from "./UserService";

// export const createProduct = async (data) => {
//   const res = await axios.post(`${import.meta.env.VITE_API_URL_BACKEND}/product/create`, data)
//   return res.data
// // }
// http://localhost:3001/api/order/get-order-details/639724669c6dda4fa11edcde
export const createOrder = async (data, access_token) => {
  // try {
  const res = await axiosJWT.post(
    `${import.meta.env.VITE_API_URL_BACKEND}/order/create/${data.user}`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  console.log("createOrder ~ res:", res);
  return res.data;
  // } catch (error) {
  // console.log(error);
  // throw error;
  // }
};

export const getOrderByUserId = async (id, access_token) => {
  const res = await axiosJWT.get(
    `${import.meta.env.VITE_API_URL_BACKEND}/order/get-all-order/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const getDetailsOrder = async (id, access_token) => {
  const res = await axiosJWT.get(
    `${import.meta.env.VITE_API_URL_BACKEND}/order/get-details-order/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const cancelOrder = async (id, access_token, orderItems, userId) => {
  const data = { orderItems, orderId: id };
  const res = await axiosJWT.delete(
    `${import.meta.env.VITE_API_URL_BACKEND}/order/cancel-order/${userId}`,

    {
      headers: {
        token: `Bearer ${access_token}`,
      },
      data,
    }
  );
  return res.data;
};

export const getAllOrder = async (access_token) => {
  const res = await axiosJWT.get(
    `${import.meta.env.VITE_API_URL_BACKEND}/order/get-all-order`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};
