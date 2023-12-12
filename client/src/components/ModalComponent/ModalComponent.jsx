import { Modal } from "antd";
import React from "react";
import "./Modal.scss"

const ModalComponent = ({
  title = "Modal",
  isOpen = false,
  children,
  ...rests
}) => {
  return (
    <Modal className=" text-black" okType="primary" title={title} open={isOpen} {...rests}>
      {children}
    </Modal>
  );
};

export default ModalComponent;
