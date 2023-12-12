import axios from "axios";

export const getConfig = async () => {
  const res = await axios.get(
    "http://localhost:3000/api/payment/config"
    // `${import.meta.env.VITE_API_URL_BACKEND}/payment/config`
  );
  return res.data;
};
