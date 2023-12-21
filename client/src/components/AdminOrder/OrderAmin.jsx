import { Button, Form, Space } from "antd";
import React from "react";
import { WrapperHeader } from "./style";
import TableComponent from "../TableComponent/TableComponent";
import InputComponent from "../InputComponent/InputComponent";
import { convertPrice, getBase64 } from "../../utils";
import { Excel } from "antd-table-saveas-excel";
import { useMemo } from "react";
import * as OrderService from "../../services/OrderService";
import { useQuery } from "@tanstack/react-query";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { orderContant } from "../../contant";
import PieChartComponent from "./PieChart";
import { CiExport } from "react-icons/ci";
const OrderAdmin = () => {
  const user = useSelector((state) => state?.user);

  const getAllOrder = async () => {
    const res = await OrderService.getAllOrder(user?.access_token);
    return res;
  };

  const queryOrder = useQuery({ queryKey: ["orders"], queryFn: getAllOrder });
  const { isLoading: isLoadingOrders, data: orders } = queryOrder;

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <InputComponent
          // ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          // onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            // onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            // onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
      }
    },
  });

  const columns = [
    {
      title: "User name",
      dataIndex: "userName",
      sorter: (a, b) => a.userName.length - b.userName.length,
      ...getColumnSearchProps("userName"),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      sorter: (a, b) => a.phone.length - b.phone.length,
      ...getColumnSearchProps("phone"),
    },
    {
      title: "Address",
      dataIndex: "address",
      sorter: (a, b) => a.address.length - b.address.length,
      ...getColumnSearchProps("address"),
    },
    {
      title: "Paided",
      dataIndex: "isPaid",
      sorter: (a, b) => a.isPaid.length - b.isPaid.length,
      ...getColumnSearchProps("isPaid"),
    },
    {
      title: "Shipped",
      dataIndex: "isDelivered",
      sorter: (a, b) => a.isDelivered.length - b.isDelivered.length,
      ...getColumnSearchProps("isDelivered"),
    },
    {
      title: "Payment method",
      dataIndex: "paymentMethod",
      sorter: (a, b) => a.paymentMethod.length - b.paymentMethod.length,
      ...getColumnSearchProps("paymentMethod"),
    },
    {
      title: "Total price",
      dataIndex: "totalPrice",
      sorter: (a, b) => a.totalPrice.length - b.totalPrice.length,
      ...getColumnSearchProps("totalPrice"),
    },
  ];

  const dataTable =
    orders?.data?.length &&
    orders?.data?.map((order) => {
      // console.log("user", order);
      console.log("orders?.data?.map ~ order?.totalPrice:", order?.totalPrice);

      return {
        ...order,
        key: order._id,
        userName: order?.shippingAddress?.fullName,
        phone: order?.shippingAddress?.phone,
        address: order?.shippingAddress?.address,
        paymentMethod:
          order?.paymentMethod === "Cash on delivery" ? (
            <>
              <span className="text-white p-2 bg-[#0088FE] rounded-full">
                Cash on delivery
              </span>
            </>
          ) : (
            <>
              <span className="text-white p-2 bg-[#00C49F] rounded-full">
                Paypal E-Wallet
              </span>
            </>
          ),
        isPaid: order?.isPaid ? "Paid" : "Unpaid",
        isDelivered: order?.isDelivered ? "Delivered" : "Not delivery",
        totalPrice: convertPrice(order?.totalPrice),
      };
    });

  const dataRevenue =
    orders?.data?.length &&
    orders?.data
      .filter((order) => order?.isPaid)
      .map((order) => {
        return {
          totalPrice: order?.totalPrice,
        };
      });

  const totalRevenue = dataRevenue.reduce((accumulator, order) => {
    return accumulator + order.totalPrice;
  }, 0);

  const newColumnExport = useMemo(() => {
    const arr = columns?.filter((col) => col.dataIndex !== "action");
    return arr;
  }, [columns]);

  const exportExcel = () => {
    const excel = new Excel();
    excel
      .addSheet("order")
      .addColumns(newColumnExport)
      .addDataSource(dataTable)
      .saveAs("Order.xlsx");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "20px",
          backgroundColor: "white",
          padding: "20px",
          marginBottom: "-20px",
        }}
      >
        <div className="flex-col" style={{ display: "flex" }}>
          <div className="flex">
            <WrapperHeader style={{ fontWeight: "bold", fontSize: "20px" }}>
              ORDER MANAGEMENT
            </WrapperHeader>

            {/* <Button style={{marginLeft:'20px'}} onClick={()=>{exportExcel()}}>Export Excel</Button> */}
            <Button
              style={{
                marginLeft: "20px",
                borderRadius: "5px",
                height: "38px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                exportExcel();
              }}
            >
              {" "}
              <span style={{ fontSize: 20, paddingRight: "5px" }}>
                <CiExport />
              </span>{" "}
              Export Excel
            </Button>
          </div>
          <div style={{ height: 200, width: 200 }}>
            <PieChartComponent data={orders?.data} />
          </div>
        </div>

        <div className="text-right flex flex-col justify-end">
          <h1 className="text-xl font-bold">Total revenue</h1>
          <br />
          <span className="font-semibold">{convertPrice(totalRevenue)}</span>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <TableComponent
          columns={columns}
          isLoading={isLoadingOrders}
          data={dataTable}
        />
      </div>
    </div>
  );
};

export default OrderAdmin;
