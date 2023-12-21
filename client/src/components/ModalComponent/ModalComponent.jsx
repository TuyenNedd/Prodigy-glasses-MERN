import { Modal } from "antd";
import React from "react";
import "./style.scss";

const ModalComponent = ({
  title = "Modal",
  isOpen = false,
  children,
  ...rests
}) => {
  return (
    <Modal title={title} open={isOpen} {...rests}>
      {children}
    </Modal>
  );
};

export default ModalComponent;
