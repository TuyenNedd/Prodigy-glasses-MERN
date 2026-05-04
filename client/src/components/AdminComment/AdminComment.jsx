import TableComponent from "../TableComponent/TableComponent";
import * as CommentService from "../../services/CommentService";
import * as UserService from "../../services/UserService";
import * as ProductService from "../../services/ProductService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { DeleteFilled, PlusCircleOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import Loading from "../LoadingComponent/Loading";
import * as message from "../../components/Message/Message";
import { useMutationHooks } from "./../../hooks/useMutationHook";
import { WrapperHeader } from "../AdminOrder/style.js";

const AdminComment = () => {
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [rowSelected, setRowSelected] = useState("");
  const [idRowSelected, setIdRowSelected] = useState("");
  const [dataTable, setDataTable] = useState([]);

  const user = useSelector((state) => state.user);

  const handleGetDetailsComment = () => {
    setIsModalOpenDelete(true);
  };
  const handleCancelDelete = () => {
    setIsModalOpenDelete(false);
  };

  const renderAction = () => {
    return (
      <div>
        <DeleteFilled
          onClick={handleGetDetailsComment}
          style={{ color: "#fa8c16", fontSize: "30px", cursor: "pointer" }}
        />
      </div>
    );
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "userName",
    },
    {
      title: "product",
      dataIndex: "productName",
    },
    {
      title: "content",
      dataIndex: "content",
    },
    {
      title: "star",
      dataIndex: "star",
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: renderAction,
    },
  ];
  const queryClient = useQueryClient();
  const getAllComment = async () => {
    const res = await CommentService.getAllComment(user?.access_token);
    return res;
  };
  const queryComment = useQuery({
    queryKey: ["comments"],
    queryFn: getAllComment,
  });

  const { isLoading: isLoadingComment, data: Comment } = queryComment;

  console.log("user???", Comment);
  const mutation = useMutationHooks((data) => {
    console.log("anhoongg", data);
    const { id, access_token } = data;

    const res = CommentService.deleteComment(id, access_token);
    return res;
  });
  const { isSuccess, data, isError } = mutation;
  useEffect(() => {
    if (isSuccess) {
      message.success("delete successs");
    } else if (isError) {
      message.error("Delete failed");
    }
  }, [isSuccess]);

  const handleDelete = async () => {
    mutation.mutate(
      { id: idRowSelected, access_token: user?.access_token },
      {
        onSettled: () => {
          queryClient.invalidateQueries(["comments"]);
        },
      }
    );
    setIsModalOpenDelete(false);
  };

  console.log("row", Comment);
  useEffect(() => {
    const fetchData = async () => {
      if (Comment?.data) {
        // Extract unique IDs to prevent N+1 query spam causing 429 Too Many Requests
        const uniqueUserIds = [...new Set(Comment.data.map(c => c.user).filter(Boolean))];
        const uniqueProductIds = [...new Set(Comment.data.map(c => c.product).filter(Boolean))];

        const userMap = {};
        const productMap = {};

        // Fetch users concurrently, but only once per unique user
        await Promise.all(
          uniqueUserIds.map(async (userId) => {
            try {
              const res = await UserService.getDetailsUser(userId, user?.access_token);
              userMap[userId] = res;
            } catch (err) {
              console.error(err);
            }
          })
        );

        // Fetch products concurrently, but only once per unique product
        await Promise.all(
          uniqueProductIds.map(async (productId) => {
            try {
              const res = await ProductService.getDetailsProduct(productId, user?.access_token);
              productMap[productId] = res;
            } catch (err) {
              console.error(err);
            }
          })
        );

        const newDataTable = Comment?.data.map((comment) => {
          const userDetails = userMap[comment?.user];
          const productDetails = productMap[comment?.product];
          const userName = userDetails?.data?.name || "Unknown";
          const productName = productDetails?.data?.name || "Unknown";
          return {
            ...comment,
            key: comment?._id,
            userName: userName,
            productName: productName,
          };
        });

        setDataTable(newDataTable);
      }
    };

    fetchData();
  }, [Comment?.data, user?.access_token]);

  return (
    <div className=" w-full">
      <WrapperHeader style={{ fontWeight: "bold", fontSize: "20px" }}>
        ORDER MANAGEMENT
      </WrapperHeader>
      {/* <button className=" h-40 w-40 border border-solid hover:bg-sky-700 ">
        {" "}
        <PlusCircleOutlined style={{ fontSize: "50px" }} />
      </button> */}
      <TableComponent
        isLoading={isLoadingComment}
        comment={Comment?.data}
        columns={columns}
        // data={dataTable}
        data={dataTable} // Wait for all user details to be fetched
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              setRowSelected(record._id);
              setIdRowSelected(record._id);
            },
          };
        }}
      />
      <ModalComponent
        title="Xóa sản phẩm"
        open={isModalOpenDelete}
        onCancel={handleCancelDelete}
        onOk={handleDelete}
      >
        <div>Bạn có chắc xóa sản phẩm này không?</div>
      </ModalComponent>
    </div>
  );
};

export default AdminComment;
