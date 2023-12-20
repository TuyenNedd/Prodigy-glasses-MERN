import { useEffect, useState } from "react";
import ButtonSolid from "../ButtonSolid/ButtonSolid.jsx";
import { useSelector } from "react-redux";
import { Rate, message } from "antd";
import * as CommentService from "../../services/CommentService.js";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as UserService from "../../services/UserService.js";
import { formatDate } from "../../utils.js";
import VerifyRemoveComment from "../VerifyRemoveComment/VerifyRemoveComment.jsx";
import { useMutationHooks } from "../../hooks/useMutationHook.js";
import Loading from "../LoadingComponent/Loading.jsx";
// import Notification from "../Notification/Notification.jsx";
import { UserOutlined } from "@ant-design/icons";

const CommentsComponent = ({
  imageR,
  proNameR,
  typeR,
  openF,
  productId,
  setCommentCount,
  setAverageRating,
}) => {
  const user = useSelector((state) => state.user);
  const [userDetails, setUserDetails] = useState({});
  const [confirmRemove, setConfirmRemove] = useState(false);
  const [id, setId] = useState("");
  // const [showNotification, setShowNotification] = useState(false);

  // console.log("CommentsComponent ~ id:", id);

  const handelConfirmRemove = () => {
    setConfirmRemove(true);
  };
  const handelCancelRemove = () => {
    setConfirmRemove(false);
  };

  // Function to get user name based on user ID
  const getUserName = async (userId) => {
    if (!userDetails[userId]) {
      try {
        const userRes = await UserService.getUserById(
          userId,
          user?.access_token
        );
        setUserDetails((prevUserDetails) => ({
          ...prevUserDetails,
          [userId]: {
            name: userRes?.data?.name || "Unknown",
            avatar: userRes?.data?.avatar, // Replace with the actual default avatar URL
          },
        }));
      } catch (error) {
        console.error(`Error fetching user details for user ${userId}:`, error);
        setTimeout(() => getUserName(userId), 3000);
      }
    }
  };

  const getAllComment = async () => {
    const res = CommentService.getAllComment(user?.access_token);
    return res;
  };
  const queryComment = useQuery({
    queryKey: ["Comments"],
    queryFn: getAllComment,
  });

  const { isLoading: isLoadingComment, data: Comment } = queryComment;
  // console.log("CommentsComponent ~ Comment:", Comment);

  // Filter comments for the specific product
  const productComments =
    Comment?.data.filter((comment) => comment.product === productId) || [];
  // console.log(
  //   "CommentsComponent ~ productComments.length:",
  //   productComments.length
  // );

  useEffect(() => {
    // Fetch user names when comments data is available
    if (Comment?.data) {
      Comment.data.forEach((comment) => {
        getUserName(comment?.user);
        // console.log("Comment.data.forEach ~ comment?.user:", comment?.user);
      });
    }
  }, [Comment?.data]);

  const mutation = useMutationHooks((data) => {
    const { id, access_token } = data;
    console.log("mutation ~ data:", data);

    const res = CommentService.deleteComment(id, access_token);
    return res;
  });

  const { data, isLoading, isSuccess, isError } = mutation;
  useEffect(() => {
    if (isSuccess) {
      message.success("This comment has been deleted");
      // setShowNotification(true);
      // setTimeout(() => {
      //   setShowNotification(false);
      // }, 2000);
      handelCancelRemove();
    } else if (isError) {
      message.error("Error");
    }
  }, [isSuccess]);

  const queryClient = useQueryClient();

  const deleteComment = async () => {
    mutation.mutate(
      {
        id: id,
        access_token: user?.access_token,
      },
      // {
      //   onSuccess: () => {
      //     message.success("Success");
      //     setConfirmRemove(false);
      //   },
      // },

      {
        onSettled: () => {
          queryClient.invalidateQueries(["Comments"]);
        },
      }
    );
  };

  //   // Kiểm tra xem Comment và Comment.data có tồn tại không
  //   if (Comment && Comment.data && Comment.data._id) {
  //     mutation.mutate({
  //       id: Comment.data._id,
  //       access_token: user?.access_token,
  //     });
  //   } else {
  //     console.error("Comment or Comment.data is undefined");
  //   }
  // };
  // console.log("deleteComment ~ Comment.data._id:", Comment.data._id);
  useEffect(() => {
    setCommentCount(productComments.length);
  }, [productComments]);

  const calculateAverageRating = (comments) => {
    if (!comments || comments.length === 0) {
      return 0;
    }

    const totalRating = comments.reduce(
      (sum, comment) => sum + comment.star,
      0
    );
    const averageRating = totalRating / comments.length;

    return averageRating;
  };

  const averageRating = calculateAverageRating(productComments);

  const roundedAverageRating = Math.round(averageRating * 10) / 10;

  useEffect(() => {
    setAverageRating(averageRating);
  }, [averageRating]);

  return (
    <>
      <section className="bg-texture">
        <div className="py-8 lg:px-8 lg:py-16">
          <div className="mb-4 tabs">
            <div className="flex gap-x-8 mb-8 border-b border-gray-300 mx-4">
              <span className="ITCGara font-heading !normal-case text-2xl lg:text-3xl">
                Reviews
              </span>
            </div>
          </div>

          <div className="flex justify-center py-3 px-4 flex-col items-center">
            <div className="flex flex-col">
              {productComments.length === 0 ? (
                ""
              ) : (
                <div className="h-fit flex items-center gap-2">
                  <span className="ITCGara text-[40px] lg:text-[64px] leading-none">
                    {roundedAverageRating}
                  </span>
                  <Rate
                    className="text-[var(--primaryColor)] text-[24px] mt-3 pointer-events-none proStar"
                    allowHalf
                    defaultValue={0}
                    value={averageRating}
                  />
                </div>
              )}

              <ButtonSolid
                onClick={openF}
                customClass={"text-lg w-full"}
                child={"WRITE A REVIEW"}
              ></ButtonSolid>
            </div>
          </div>

          <div className="comment-list flex flex-col gap-3 px-4">
            {productComments.length === 0 ? (
              <>
                <div className="TradeGodthicCn text-base flex justify-center p-5">
                  This product has no comments yet
                </div>
              </>
            ) : (
              <>
                {productComments?.map((comment) => {
                  const formattedCmtDate = comment?.createdAt
                    ? formatDate(comment?.createdAt, "MMM dd, yyyy")
                    : "N/A";

                  const idComment = comment?._id;

                  return (
                    <>
                      {comment?.product === productId && (
                        <>
                          <div
                            key={comment?._id}
                            className="child-review p-8 bg-white rounded-md"
                          >
                            <div className="review-content">
                              <div className="flex flex-col">
                                <div className="flex flex-col mb-6 gap-1">
                                  <div className="name-reviewer flex justify-between">
                                    <div className="flex items-center gap-1">
                                      <div className="w-7 rounded-full overflow-hidden">
                                        {userDetails[comment?.user]?.avatar ? (
                                          <img
                                            src={
                                              userDetails[comment?.user]?.avatar
                                            }
                                            className="avatar-img object-cover"
                                          />
                                        ) : (
                                          <UserOutlined
                                            style={{ fontSize: "30px" }}
                                          />
                                        )}
                                      </div>
                                      <span className="TradeGodthic-BoldCn">
                                        {userDetails[comment?.user]?.name ||
                                          "Unknown"}
                                      </span>
                                    </div>
                                    <span className="TradeGodthicCn text-xs">
                                      {formattedCmtDate}
                                    </span>
                                  </div>
                                  <div className="star-reviewer pointer-events-none">
                                    <Rate
                                      className="text-[var(--primaryColor)] text-sm"
                                      allowHalf
                                      defaultValue={0}
                                      value={comment?.star}
                                    />
                                  </div>
                                  <div className="product-reviewer flex gap-2">
                                    <div className="imageR">
                                      <div className="w-20">
                                        <img src={imageR} />
                                      </div>
                                    </div>
                                    <div className="proName flex flex-col justify-center">
                                      <span className="TradeGodthicCn text-xs">
                                        About
                                      </span>
                                      <span className="TradeGodthicCn text-xs font-bold underline">
                                        {proNameR} | {typeR}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="comment-text">
                                  <div className="mb-4 flex justify-between">
                                    <span className="TradeGodthicCn text-sm">
                                      {comment?.content}
                                    </span>
                                    {user?.id === comment?.user ? (
                                      <>
                                        <span
                                          onClick={() => {
                                            handelConfirmRemove();
                                            setId(idComment);
                                          }}
                                          className="TradeGodthicCn text-sm cursor-pointer"
                                        >
                                          Remove
                                        </span>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </section>

      {confirmRemove && (
        <VerifyRemoveComment
          loadingDelete={isLoading}
          deleteBut={deleteComment}
          cancelBut={handelCancelRemove}
        ></VerifyRemoveComment>
      )}

      {/* {showNotification && (
        <Notification notiText={"✔ This comment has been deleted"} />
      )} */}
    </>
  );
};

export default CommentsComponent;
