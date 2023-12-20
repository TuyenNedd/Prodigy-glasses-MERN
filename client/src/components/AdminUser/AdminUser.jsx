// import { Button, Col, Form, Modal, Space ,Popconfirm} from "antd";
// import React from "react";
// import { WrapperHeader, WrapperUploadFile } from "./style";
// import TableComponent from "../TableComponent/TableComponent";
// import InputComponent from "../InputComponent/InputComponent";
// import Loading from "../LoadingComponent/Loading";
// import ModalComponent from "../ModalComponent/ModalComponent";
// import { getBase64 } from "../../utils";
// import { useEffect } from "react";
// import * as message from "../../components/Message/Message";
// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { useRef } from "react";
// import { useMutationHooks } from "../../hooks/useMutationHook";
// import * as UserService from "../../services/UserService";
// import { useIsFetching, useQuery, useQueryClient } from "@tanstack/react-query";
// import {
//   DeleteOutlined,
//   EditOutlined,
//   // SearchOutlined,
// } from "@ant-design/icons";
// import { Excel } from "antd-table-saveas-excel";
// import { useMemo } from "react";
// import './style.scss'
// import { CiExport } from "react-icons/ci";

// const AdminUser = () => {
//   const [rowSelected, setRowSelected] = useState("");
//   const [isOpenDrawer, setIsOpenDrawer] = useState(false);
//   const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
//   const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
//   const user = useSelector((state) => state?.user);


//   const [stateUserDetails, setStateUserDetails] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     isAdmin: false,
//     avatar: "",
//     address: "",
//   });

//   const [form] = Form.useForm();

//   const mutationUpdate = useMutationHooks((data) => {
//     const { id, token, ...rests } = data;
//     const res = UserService.updateUser(id, { ...rests }, token);
//     return res;
//   });

//   const mutationDeletedMany = useMutationHooks((data) => {
//     const { token, ...ids } = data;
//     const res = UserService.deleteManyUser(ids, token);
//     return res;
//   });

//   const handleDeleteManyUsers = (ids) => {
//     mutationDeletedMany.mutate(
//       { ids: ids, token: user?.access_token },
//       {
//         onSettled: () => {
//           queryClient.invalidateQueries(["users"]);
//         },
//       }
//     );
//   };

//   const mutationDeleted = useMutationHooks((data) => {
//     const { id, token } = data;
//     const res = UserService.deleteUser(id, token);
//     return res;
//   });

//   const fetchGetDetailsUser = async (rowSelected) => {
//     const res = await UserService.getDetailsUser(rowSelected);
//     if (res?.data) {
//       setStateUserDetails({
//         name: res?.data?.name,
//         email: res?.data?.email,
//         phone: res?.data?.phone,
//         isAdmin: res?.data?.isAdmin,
//         address: res?.data?.address,
//         avatar: res.data?.avatar,
//       });
//     }
//     setIsLoadingUpdate(false);
//   };

//   useEffect(() => {
//     form.setFieldsValue(stateUserDetails);
//   }, [form, stateUserDetails]);

//   useEffect(() => {
//     if (rowSelected && isOpenDrawer) {
//       setIsLoadingUpdate(true);
//       fetchGetDetailsUser(rowSelected);
//     }
//   }, [rowSelected, isOpenDrawer]);

//   const handleDetailsProduct = () => {
//     setIsOpenDrawer(true);
//   };

//   const {
//     data: dataUpdated,
//     isLoading: isLoadingUpdated,
//     isSuccess: isSuccessUpdated,
//     isError: isErrorUpdated,
//   } = mutationUpdate;
//   const {
//     data: dataDeleted,
//     isLoading: isLoadingDeleted,
//     isSuccess: isSuccessDelected,
//     isError: isErrorDeleted,
//   } = mutationDeleted;
//   const {
//     data: dataDeletedMany,
//     isLoading: isLoadingDeletedMany,
//     isSuccess: isSuccessDelectedMany,
//     isError: isErrorDeletedMany,
//   } = mutationDeletedMany;

//   const queryClient = useQueryClient();
//   const users = queryClient.getQueryData(["users"]);
//   const isFetchingUser = useIsFetching(["users"]);
//   const renderAction = () => {
//     return (
//       <div>
//       <Popconfirm

//           placement="bottomRight"
//           title={'Confirm'}
//           description={'Do you want delete user'}
//           okText="Yes"
//           cancelText="No"
//           onConfirm={handleDeleteUser}
//         >
//             <DeleteOutlined
//           className="actionBtn deleteBtn"
//         />
//         </Popconfirm>

//         <EditOutlined
//           className="actionBtn editBtn"
//           onClick={handleDetailsProduct}
//         />
//       </div>
//     );
//   };

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       sorter: (a, b) => a.name.length - b.name.length,
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       sorter: (a, b) => a.email.length - b.email.length,
//     },
//     {
//       title: "Address",
//       dataIndex: "address",
//       sorter: (a, b) => a.address.length - b.address.length,
//     },
//     {
//       title: "Admin",
//       dataIndex: "isAdmin",

//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//       sorter: (a, b) => a.phone - b.phone,
//     },
//     {
//       title: "Action",
//       dataIndex: "action",
//       render: renderAction,
//     },
//   ];
//   const dataTable =
//     users?.data?.length > 0 &&
//     users?.data?.map((user) => {
//       return {
//         ...user,
//         key: user._id,
//         isAdmin: user.isAdmin ? "TRUE" : "FALSE",
//       };
//     });

//   useEffect(() => {
//     if (isSuccessDelected && dataDeleted?.status === "OK") {
//       message.success();
//       handleCancelDelete();
//     } else if (isErrorDeleted) {
//       message.error();
//     }
//   }, [isSuccessDelected]);

//   useEffect(() => {
//     if (isSuccessDelectedMany && dataDeletedMany?.status === "OK") {
//       message.success();
//     } else if (isErrorDeletedMany) {
//       message.error();
//     }
//   }, [isSuccessDelectedMany]);



//   useEffect(() => {
//     if (isSuccessUpdated && dataUpdated?.status === "OK") {
//       message.success();
//     } else if (isErrorUpdated) {
//       message.error();
//     }
//   }, [isSuccessUpdated]);

//   const handleCancelDelete = () => {
//     setIsModalOpenDelete(false);
//   };

//   const handleDeleteUser = () => {
//     mutationDeleted.mutate(
//       { id: rowSelected, token: user?.access_token },
//       {
//         onSettled: () => {
//           queryClient.invalidateQueries(["users"]);
//         },
//       }
//     );
//   };

//   const handleOnchangeDetails = (e) => {
//     setStateUserDetails({
//       ...stateUserDetails,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleOnchangeAvatarDetails = async ({ fileList }) => {
//     const file = fileList[0];
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj);
//     }
//     setStateUserDetails({
//       ...stateUserDetails,
//       avatar: file.preview,
//     });
//   };
//   const onUpdateUser = () => {
//     mutationUpdate.mutate(
//       { id: rowSelected, token: user?.access_token, ...stateUserDetails },
//       {
//         onSettled: () => {
//           queryClient.invalidateQueries(["users"]);
//         },
//       }
//     );
//   };

//   const newColumnExport = useMemo(() => {
//     const arr = columns?.filter((col) => col.dataIndex !== "action");
//     return arr;
//   }, [columns]);

//   const exportExcel = () => {
//     const excel = new Excel();
//     excel
//       .addSheet("user")
//       .addColumns(newColumnExport)
//       .addDataSource(dataTable)
//       .saveAs("user.xlsx");
//   };

//   return (
//     <div>
//        <div style={{display:'flex' ,justifyContent:'space-between' , paddingRight:'20px' , backgroundColor:'white', padding:'20px', marginBottom:'-20px' }}>
//      <div style={{display:'flex'}}>
//      <WrapperHeader style={{fontWeight:'bold', fontSize:'20px'}}>USER MANAGEMENT</WrapperHeader>
//      <Button style={{ marginLeft: '20px', borderRadius: '5px',height:'38px' , display:'flex', justifyContent:'center', alignItems:'center' }} onClick={() => { exportExcel() }}> <span style={{fontSize:20 , paddingRight:'5px'}}><CiExport /></span> Export Excel</Button>
//      </div>
//      </div>
//       <div style={{ marginTop: "20px" }}>
//         <TableComponent
//           handleDeleteMany={handleDeleteManyUsers}
//           columns={columns}
//           isLoading={isFetchingUser}
//           data={dataTable}
//           onRow={(record, rowIndex) => {
//             return {
//               onClick: (event) => {
//                 setRowSelected(record._id);
//               },
//             };
//           }}
//         />
//       </div>

//       {/* edit */}
//       <ModalComponent
//         title="USER DETAIL"
//         isOpen={isOpenDrawer}
//         onCancel={() => setIsOpenDrawer(false)}
//         width="30%"
//         footer={null}
//       >
//         <Loading isLoading={isLoadingUpdate || isLoadingUpdated}>
//           <Form
//             name="basic"
//             onFinish={onUpdateUser}
//             autoComplete="on"
//             form={form}
//             footer
//           >
//             <Col span={24}>
//               <Form.Item
//               labelCol={{span:24}}
//                 label="Name"
//                 name="name"
//                 rules={[{ required: true, message: "Please input your name!" }]}
//               >
//                 <InputComponent
//                   value={stateUserDetails["name"]}
//                   onChange={handleOnchangeDetails}
//                   name="name"
//                 />
//               </Form.Item>
//             </Col>

//             <Col span={24}>
//               <Form.Item
//               labelCol={{span:24}}
//                 label="Email"
//                 name="email"
//                 rules={[{ required: true, message: "Please input your email!" }]}
//               >
//                 <InputComponent
//                   value={stateUserDetails["email"]}
//                   onChange={handleOnchangeDetails}
//                   name="email"
//                 />
//               </Form.Item>
//             </Col>

//             <Col span={24}>
//             <Form.Item
//             labelCol={{span:24}}
//               label="Phone"
//               name="phone"
//               rules={[{ required: true, message: "Please input your  phone!" }]}
//             >
//               <InputComponent
//                 value={stateUserDetails.phone}
//                 onChange={handleOnchangeDetails}
//                 name="phone"
//               />
//             </Form.Item>
//             </Col>

//           <Col span={24}>
//           <Form.Item
//           labelCol={{span:24}}
//               label="Adress"
//               name="address"
//               rules={[
//                 { required: true, message: "Please input your  address!" },
//               ]}
//             >
//               <InputComponent
//                 value={stateUserDetails.address}
//                 onChange={handleOnchangeDetails}
//                 name="address"
//               />
//             </Form.Item>
//           </Col>

//             <Form.Item
//               label="Avatar"
//               name="avatar"
//               rules={[{ required: true, message: "Please input your image!" }]}
//             >
//               <WrapperUploadFile
//                 onChange={handleOnchangeAvatarDetails}
//                 maxCount={1}
//               >
//                 <Button>Select File</Button>
//                 {stateUserDetails?.avatar && (
//                   <img
//                     src={stateUserDetails?.avatar}
//                     style={{
//                       height: "60px",
//                       width: "60px",
//                       borderRadius: "50%",
//                       objectFit: "cover",
//                       marginLeft: "10px",
//                       marginTop:'10px'
//                     }}
//                     alt="avatar"
//                   />
//                 )}
//               </WrapperUploadFile>
//             </Form.Item>
//             <Form.Item wrapperCol={{ offset: 19, span: 16 }}>
//               <Button style={{borderRadius:'4px',backgroundColor:'blue', padding:'0 22px' , display:'flex', alignItems:'center'}} type="primary" htmlType="submit">
//                 Update
//               </Button>
//             </Form.Item>
//           </Form>
//         </Loading>
//       </ModalComponent>

//     </div>
//   );
// };

// export default AdminUser;


import { Button, Col, Form, Modal, Space, Popconfirm, Select } from "antd";
import React from "react";
import { WrapperHeader, WrapperUploadFile } from "./style";
import TableComponent from "../TableComponent/TableComponent";
import InputComponent from "../InputComponent/InputComponent";
import Loading from "../LoadingComponent/Loading";
import ModalComponent from "../ModalComponent/ModalComponent";
import { getBase64 } from "../../utils";
import { useEffect } from "react";
import * as message from "../../components/Message/Message";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserService from "../../services/UserService";
import { useIsFetching, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Excel } from "antd-table-saveas-excel";
import { useMemo } from "react";
import './style.scss'
import { CiExport } from "react-icons/ci";

const AdminUser = () => {
  const [rowSelected, setRowSelected] = useState("");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const user = useSelector((state) => state?.user);
  const [form] = Form.useForm();



  const [stateUserDetails, setStateUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    isAdmin: false,
    avatar: "",
    address: "",
  });


  const mutationUpdate = useMutationHooks((data) => {
    const { id, token, ...rests } = data;
    const res = UserService.updateUser(id, { ...rests }, token);
    return res;
  });

  const mutationDeletedMany = useMutationHooks((data) => {
    const { token, ...ids } = data;
    const res = UserService.deleteManyUser(ids, token);
    return res;
  });

  const handleDeleteManyUsers = (ids) => {
    mutationDeletedMany.mutate(
      { ids: ids, token: user?.access_token },
      {
        onSettled: () => {
          queryClient.invalidateQueries(["users"]);
        },
      }
    );
  };

  const mutationDeleted = useMutationHooks((data) => {
    const { id, token } = data;
    const res = UserService.deleteUser(id, token);
    return res;
  });

  const fetchGetDetailsUser = async (rowSelected) => {
    const res = await UserService.getDetailsUser(rowSelected);
    if (res?.data) {
      setStateUserDetails({
        name: res?.data?.name,
        email: res?.data?.email,
        phone: res?.data?.phone,
        isAdmin: res?.data?.isAdmin,
        address: res?.data?.address,
        avatar: res.data?.avatar,
      });
    }
    setIsLoadingUpdate(false);
  };


  useEffect(() => {
    form.setFieldsValue(stateUserDetails);
  }, [form, stateUserDetails]);

  useEffect(() => {
    if (rowSelected && isOpenDrawer) {
      setIsLoadingUpdate(true);
      fetchGetDetailsUser(rowSelected);
    }
  }, [rowSelected, isOpenDrawer]);

  const handleDetailsProduct = () => {
    fetchGetDetailsUser(rowSelected);
    setIsOpenDrawer(true);
  };

  const {
    data: dataUpdated,
    isLoading: isLoadingUpdated,
    isSuccess: isSuccessUpdated,
    isError: isErrorUpdated,
  } = mutationUpdate;
  const {
    data: dataDeleted,
    isLoading: isLoadingDeleted,
    isSuccess: isSuccessDelected,
    isError: isErrorDeleted,
  } = mutationDeleted;
  const {
    data: dataDeletedMany,
    isLoading: isLoadingDeletedMany,
    isSuccess: isSuccessDelectedMany,
    isError: isErrorDeletedMany,
  } = mutationDeletedMany;

  const queryClient = useQueryClient();
  const users = queryClient.getQueryData(["users"]);
  const isFetchingUser = useIsFetching(["users"]);
  const renderAction = () => {
    return (
      <div>
        <Popconfirm
          placement="bottomRight"
          title={'Confirm'}
          description={'Do you want delete user'}
          okText="Yes"
          cancelText="No"
          onConfirm={handleDeleteUser}
        >
          <DeleteOutlined
            className="actionBtn deleteBtn"
          />
        </Popconfirm>

        <EditOutlined
          className="actionBtn editBtn"
          onClick={handleDetailsProduct}
        />
      </div>
    );
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Address",
      dataIndex: "address",
      sorter: (a, b) => a.address.length - b.address.length,
    },
    {
      title: "Admin",
      dataIndex: "isAdmin",

    },
    {
      title: "Phone",
      dataIndex: "phone",
      sorter: (a, b) => a.phone - b.phone,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: renderAction,
    },
  ];
  const dataTable =
    users?.data?.length > 0 &&
    users?.data?.map((user) => {
      return {
        ...user,
        key: user._id,
        isAdmin: user.isAdmin ? "TRUE" : "FALSE", //ud
      };
    });

  useEffect(() => {
    if (isSuccessDelected && dataDeleted?.status === "OK") {
      message.success('Delete Succesfully');
    } else if (isErrorDeleted) {
      message.error();
    }
  }, [isSuccessDelected]);

  useEffect(() => {
    if (isSuccessDelectedMany && dataDeletedMany?.status === "OK") {
      message.success();
    } else if (isErrorDeletedMany) {
      message.error();
    }
  }, [isSuccessDelectedMany]);



  useEffect(() => {
    if (isSuccessUpdated && dataUpdated?.status === "OK") {
      message.success('Update Succesfully');
    } else if (isErrorUpdated) {
      message.error();
    }
  }, [isSuccessUpdated]);


  const handleDeleteUser = () => {
    mutationDeleted.mutate(
      { id: rowSelected, token: user?.access_token },
      {
        onSettled: () => {
          queryClient.invalidateQueries(["users"]);
        },
      }
    );
  };

  const handleOnchangeDetails = (e) => {
    setStateUserDetails({
      ...stateUserDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnchangeAvatarDetails = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateUserDetails({
      ...stateUserDetails,
      avatar: file.preview,
    });
  };
  const onUpdateUser = () => {
    mutationUpdate.mutate(
      { id: rowSelected, token: user?.access_token, ...stateUserDetails },
      {
        onSettled: () => {
          queryClient.invalidateQueries(["users"]);
        },
      }
    );
  };

  const newColumnExport = useMemo(() => {
    const arr = columns?.filter((col) => col.dataIndex !== "action");
    return arr;
  }, [columns]);

  const exportExcel = () => {
    const excel = new Excel();
    excel
      .addSheet("user")
      .addColumns(newColumnExport)
      .addDataSource(dataTable)
      .saveAs("user.xlsx");
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px', backgroundColor: 'white', padding: '20px', marginBottom: '-20px' }}>
        <div style={{ display: 'flex' }}>
          <WrapperHeader style={{ fontWeight: 'bold', fontSize: '20px' }}>USER MANAGEMENT</WrapperHeader>
          <Button style={{ marginLeft: '20px', borderRadius: '5px', height: '38px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => { exportExcel() }}> <span style={{ fontSize: 20, paddingRight: '5px' }}><CiExport /></span> Export Excel</Button>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <TableComponent
          handleDeleteMany={handleDeleteManyUsers}
          columns={columns}
          isLoading={isFetchingUser}
          data={dataTable}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                setRowSelected(record._id);
              },
            };
          }}
        />
      </div>

      {/* edit */}
      <ModalComponent
        title="USER DETAIL"
        isOpen={isOpenDrawer}
        onCancel={() => setIsOpenDrawer(false)}
        width="30%"
        footer={null}
      >
        <Loading isLoading={isLoadingUpdate || isLoadingUpdated}>
          <Form
            name="basic"
            onFinish={onUpdateUser}
            autoComplete="on"
            form={form}
            footer
          >
            <Col span={24}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <InputComponent
                  value={stateUserDetails["name"]}
                  onChange={handleOnchangeDetails}
                  name="name"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <InputComponent
                  value={stateUserDetails["email"]}
                  onChange={handleOnchangeDetails}
                  name="email"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Phone"
                name="phone"
                rules={[{ required: true, message: "Please input your  phone!" }]}
              >
                <InputComponent
                  value={stateUserDetails.phone}
                  onChange={handleOnchangeDetails}
                  name="phone"
                />
              </Form.Item>
            </Col>

            <Form.Item
              labelCol={{ span: 24 }}
              label="Role"
              name="role"
              rules={[{ required: true, message: "Please input your role!" }]}
            >
              <Select
                defaultValue={stateUserDetails.isAdmin}
                value={stateUserDetails.isAdmin}
                style={{
                  width: 120,
                }}
                allowClear
                onChange={(value) =>
                  setStateUserDetails({
                    ...stateUserDetails,
                    isAdmin: value,
                  })
                }
                options={[
                  {
                    value: false,
                    label: "False",
                  },
                  {
                    value: true,
                    label: "True",
                  },
                ]}
              />
            </Form.Item>

            <Col span={24}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Adress"
                name="address"
                rules={[
                  { required: true, message: "Please input your  address!" },
                ]}
              >
                <InputComponent
                  value={stateUserDetails.address}
                  onChange={handleOnchangeDetails}
                  name="address"
                />
              </Form.Item>
            </Col>

            <Form.Item
              label="Avatar"
              name="avatar"
              rules={[{ required: true, message: "Please input your image!" }]}
            >
              <WrapperUploadFile
                onChange={handleOnchangeAvatarDetails}
                maxCount={1}
              >
                <Button>Select File</Button>
                {stateUserDetails?.avatar && (
                  <img
                    src={stateUserDetails?.avatar}
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginLeft: "10px",
                      marginTop: '10px'
                    }}
                    alt="avatar"
                  />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 19, span: 16 }}>
              <Button style={{ borderRadius: '4px', backgroundColor: 'blue', padding: '0 22px', display: 'flex', alignItems: 'center' }} type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </ModalComponent>

    </div>
  );
};

export default AdminUser;

