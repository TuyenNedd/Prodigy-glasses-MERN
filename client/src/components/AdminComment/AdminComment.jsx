import TableComponent from "../TableComponent/TableComponent";
import * as CommentService from "../../services/CommentService";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { DeleteFilled, PlusCircleOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import Loading from "../LoadingComponent/Loading";
import * as message from "../../components/Message/Message";
import { useMutationHooks } from "./../../hooks/useMutationHook";
import * as UserService from "../../services/UserSevice.js";

const AdminComment = () => {
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [rowSelected, setRowSelected] = useState("");
  const [idRowSelected, setIdRowSelected] = useState("");

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
      dataIndex: "user",
      render: (text, record) => {
        return record?.user; // Đặt tên người dùng thích hợp tại đây
      },
    },
    {
      title: "product",
      dataIndex: "product",
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

  const getAllComment = async () => {
    const res = await CommentService.getAllComment(user?.access_token);
    return res;
  };

  const queryComment = useQuery({
    queryKey: ["Comment"],
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
  const handleDelete = async () => {
    mutation.mutate(
      { id: idRowSelected, access_token: user?.access_token ,userId:Comment?.user},
      {
        onSuccess: () => {
          queryComment.refetch();
        },
      }
    );
    setIsModalOpenDelete(false);
  };
  // const handleDelete = () => {
  //   mutation.mutate({id:Comment?.data._id,content : Comment?.data.content,user:Comment?.data.user,product: Comment?.data.p,access_token:user?.access_token});

  // };

  // const mutationDeleted = useMutationHooks((data) => {
  //   const { id, ...rest } = data;
  //   console.log("dâdasdas", data);
  //   const res = CommentService.deleteComment(id);
  //   return res;
  // });

  console.log("row", Comment);

  const dataTable =
    Comment?.data.length &&
    Comment?.data.map((comment) => {
      return {
        ...comment,
        key: comment?._id,
      };
    });

  return (
    <div className=" w-full">
      <h1 className=" pl-5 text-xl pt-5 w-full">Quản lý Comment</h1>
      <button className=" h-40 w-40 border border-solid hover:bg-sky-700 ">
        {" "}
        <PlusCircleOutlined style={{ fontSize: "50px" }} />
      </button>
      <TableComponent
        isLoading={isLoadingComment}
        comment={Comment?.data}
        columns={columns}
        data={dataTable}
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
      ;
    </div>
  );
};

export default AdminComment;
