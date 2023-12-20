import React from "react";
import { WrapperHeader, WrapperUploadFile } from "./style";
import { Button, Form, Select, Space } from "antd";
import ModalComponent from "../ModalComponent/ModalComponent";
import InputComponent from "../InputComponent/InputComponent";
import { getBase64, renderOptions } from "../../utils";
import { useQuery } from "@tanstack/react-query";

const ModalAddProduct = ({
  isModalOpen,
  handleCancel,
  onFinish,
  handleChangeSelect,
  stateProduct,
  handleOnchange,
  handleOnchangeAvatar,
  handleOnchangeAvatarImageHover,
  handleOnchangeAvatarImageDetail,
  fetchTypeProduct,
}) => {
  const [form] = Form.useForm();
  const typeProduct = useQuery({
    queryKey: ["type-product"],
    queryFn: fetchAllTypeProduct,
  });
  const queryProduct = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct();
    return res;
  };

  return (
    <div>
      <ModalComponent
        forceRender
        title="Tạo sản phẩm"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {/* <Loading isLoading={isLoading}> */}
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
          autoComplete="on"
          form={form}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <InputComponent
              value={stateProduct["name"]}
              onChange={handleOnchange}
              name="name"
            />
          </Form.Item>

          <Form.Item
            label="Type"
            name="type"
            rules={[{ required: true, message: "Please input your type!" }]}
          >
            <Select
              name="type"
              // defaultValue="lucy"
              // style={{ width: 120 }}
              value={stateProduct.type}
              onChange={handleChangeSelect}
              options={renderOptions(typeProduct?.data?.data)}
            />
          </Form.Item>
          {stateProduct.type === "add_type" && (
            <Form.Item
              label="New type"
              name="newType"
              rules={[{ required: true, message: "Please input your type!" }]}
            >
              <InputComponent
                value={stateProduct.newType}
                onChange={handleOnchange}
                name="newType"
              />
            </Form.Item>
          )}
          <Form.Item
            label="Count inStock"
            name="countInStock"
            rules={[
              { required: true, message: "Please input your count inStock!" },
            ]}
          >
            <InputComponent
              value={stateProduct.countInStock}
              onChange={handleOnchange}
              name="countInStock"
            />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please input your count price!" },
            ]}
          >
            <InputComponent
              value={stateProduct.price}
              onChange={handleOnchange}
              name="price"
            />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your count description!",
              },
            ]}
          >
            <InputComponent
              value={stateProduct.description}
              onChange={handleOnchange}
              name="description"
            />
          </Form.Item>
          <Form.Item
            label="Rating"
            name="rating"
            rules={[
              { required: true, message: "Please input your count rating!" },
            ]}
          >
            <InputComponent
              value={stateProduct.rating}
              onChange={handleOnchange}
              name="rating"
            />
          </Form.Item>
          <Form.Item
            label="Discount"
            name="discount"
            rules={[
              {
                required: true,
                message: "Please input your discount of product!",
              },
            ]}
          >
            <InputComponent
              value={stateProduct.discount}
              onChange={handleOnchange}
              name="discount"
            />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            rules={[
              { required: true, message: "Please input your count image!" },
            ]}
          >
            <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
              <Button>Select File</Button>
              {stateProduct?.image && (
                <img
                  src={stateProduct?.image}
                  style={{
                    height: "60px",
                    width: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginLeft: "10px",
                  }}
                  alt="avatar"
                />
              )}
            </WrapperUploadFile>
          </Form.Item>
          <Form.Item
            label="ImageHover"
            name="imageHover"
            rules={[
              {
                required: true,
                message: "Please input your count imageHover!",
              },
            ]}
          >
            <WrapperUploadFile
              onChange={handleOnchangeAvatarImageHover}
              maxCount={1}
            >
              <Button>Select File</Button>
              {stateProduct?.imageHover && (
                <img
                  src={stateProduct?.imageHover}
                  style={{
                    height: "60px",
                    width: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginLeft: "10px",
                  }}
                  alt="avatar"
                />
              )}
            </WrapperUploadFile>
          </Form.Item>
          <Form.Item
            label="ImageDetail"
            name="ImageDetail"
            rules={[
              {
                required: true,
                message: "Please input your count imageDetail!",
              },
            ]}
          >
            <WrapperUploadFile
              onChange={handleOnchangeAvatarImageDetail}
              maxCount={1}
            >
              <Button>Select File</Button>
              {stateProduct?.imageDetail && (
                <img
                  src={stateProduct?.imageDetail}
                  style={{
                    height: "60px",
                    width: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginLeft: "10px",
                  }}
                  alt="avatar"
                />
              )}
            </WrapperUploadFile>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {/* </Loading> */}
      </ModalComponent>
    </div>
  );
};

export default ModalAddProduct;
