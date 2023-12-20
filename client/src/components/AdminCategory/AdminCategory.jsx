import React from "react";
import * as ProductService from "../../services//ProductService";
import { useQuery } from "@tanstack/react-query";
import TableComponent from "../TableComponent/TableComponent";
import { Button, Modal, Input, Form, Select, Col, Table } from "antd";

import { useState } from "react";

import TypeChart from "../TypeChart/TypeChart";
const AdminCategory = () => {
  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct();
    console.log(res);
    return res;
  };
  const getAllProducts = async () => {
    const res = await ProductService.getAllProduct();
    const dataProduct = res;
    console.log("res dataTable all", res);
    return res;
  };

  const typeProduct = useQuery({
    queryKey: ["type-product"],
    queryFn: fetchAllTypeProduct,
  });
  const queryProduct = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  const { isLoadingType, data: types } = typeProduct;
  const { isLoadingAllP, data: AllP } = queryProduct;

  const columns = [
    {
      title: "All Type",
      dataIndex: "type",
    },
  ];

  const columnsAllP = [
    {
      title: "allP",
      dataIndex: "allP",
    },
  ];
  const dataTable =
    types?.data?.length &&
    types?.data?.map((type, index) => {
      return { type, key: index };
    });

  const dataTableAllP =
    AllP?.data?.length &&
    AllP?.data?.map((AllP, parky) => {
      return { ...AllP, key: parky };
    });

  console.log("dataTable", dataTable);
  console.log("data AllP", dataTableAllP);
  const [stateProduct, setStateProduct] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();
  const onFinish = () => {
    const params = {
      type:
        stateProduct.type === "add_type"
          ? stateProduct.newType
          : stateProduct.type,
    };
    mutation.mutate(params, {
      onSettled: () => {
        queryProduct.refetch();
      },
    });
  };
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setStateProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const calculateTypeCounts = (data) => {
    const typeCounts = {};

    data.forEach((item) => {
      const type = item.type;
      if (typeCounts[type]) {
        typeCounts[type].uv++;
      } else {
        typeCounts[type] = { type, uv: 1 };
      }
    });
    return Object.values(typeCounts);
  };
  // Gọi hàm
  const typeCounts = calculateTypeCounts(dataTableAllP);
  console.log("TypeCounts", typeCounts);

  return (
    <div>
      <TypeChart typeCounts={typeCounts} />

      <Table
        columns={columns}
        isLoading={isLoadingType}
        dataSource={dataTable}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              // setRowSelected(rowIndex); // Use rowIndex or update as per your needs
            },
          };
        }}
      />

      <Modal
        title="Basic Modal"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form name="basic" onFinish={onFinish} autoComplete="on" form={form}>
          {/* Remove unnecessary <Col> */}
          <Form.Item
            labelCol={{ span: 24 }}
            label="New type"
            name="newType"
            rules={[
              {
                required: true,
                message: "Please input your new type!",
                validator: (_, value) =>
                  stateProduct.type === "add_type" && !value
                    ? Promise.reject("Please input your new type!")
                    : Promise.resolve(),
              },
            ]}
          >
            <Input
              value={stateProduct.newType}
              onChange={handleOnchange}
              name="newType"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminCategory;
