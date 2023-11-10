import { message } from "antd";

const success = (mes = "Sucess") => {
  message.success(mes);
};

const error = (mes = "Error") => {
  message.error(mes);
};

const warning = (mes = "Warning") => {
  message.warning(mes);
};

export { success, error, warning };
