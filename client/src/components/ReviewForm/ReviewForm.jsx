/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Rate, message } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./style.scss";
import ButtonSolid from "../ButtonSolid/ButtonSolid.jsx";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as CommentService from "../../services/CommentService.js";
import { useSelector } from "react-redux";
import Loading from "../LoadingComponent/Loading.jsx";
import { useQuery, useQueryClient } from "@tanstack/react-query";
const ReviewForm = ({
  imageR,
  proNameR,
  typeR,
  closeF,
  productId,
  userId,
  onReviewSubmit,
}) => {
  const user = useSelector((state) => state.user);
  const [star, setStar] = useState(0);
  const [content, setContent] = useState("");
  // console.log("ReviewForm ~ rating:", rating);
  const handleRatingChange = (value) => {
    setStar(value);
  };

  const mutation = useMutationHooks((data) =>
    CommentService.createComment(data)
  );

  // const handleReviewChange = (value) => {
  //   setContent(value);
  // };

  const getAllComment = async () => {
    const res = CommentService.getAllComment(user?.access_token);
    return res;
  };
  const queryComment = useQuery({
    queryKey: ["Comments"],
    queryFn: getAllComment,
  });

  const { isLoading: isLoadingComment, data: Comment } = queryComment;

  const queryClient = useQueryClient();

  const handleReviewChange = (event) => {
    // Extract the value from the event object
    const value = event.target.value;
    // Update the content state with the extracted value
    setContent(value);
    // console.log("ReviewForm ~ content:", value);
  };

  const { data, isLoading, isError, isSuccess } = mutation;

  useEffect(() => {
    if (isSuccess) {
      // message.success("Success");
      onReviewSubmit();
    } else if (isError) {
      message.success("Error");
    }
  }, [isSuccess]);

  const handleSubmitReview = () => {
    mutation.mutate(
      {
        content: content,
        star: star,
        productId: productId,
        userId: userId,
      },
      {
        onSettled: () => {
          queryClient.invalidateQueries(["Comments"]);
        },
      }
      // {
      //   // onSuccess: () => {
      //   //   message.success("Success");
      //   //   // Call the callback function if provided
      //   //   if (onReviewSubmit) {
      //   //     onReviewSubmit();
      //   //   }
      //   // },
      // }
    );
  };

  return (
    <>
      <div className="submission-modal">
        <div className="review-form fixed top-0 left-0 w-screen h-full z-[100] transition-all duration-300 bg-[#000000b3] overflow-auto">
          <div className="modal-container rounded-md bg-white relative max-w-2xl w-[94%] mx-auto my-5 py-6 px-4">
            <div className="close-but flex justify-end text-black hover:text-[#00000094]">
              <button onClick={closeF}>
                <CloseOutlined />
              </button>
            </div>

            <div className="modal-body">
              <div className="submission-mediator">
                <div className="form-c pt-2">
                  <form className="form-r">
                    <div className="form-header flex mb-6 gap-2">
                      <div className="head-left">
                        <div className="ITCGara text-2xl mb-1">
                          Please share your experience
                        </div>
                        <div className="TradeGodthicCn text-xs text-[#00000094] mb-2">
                          {proNameR} | {typeR}
                        </div>
                        <p className="mb-2 TradeGodthicCn text-sm">
                          Your feedback will help other shoppers make good
                          choices, and we'll use it to improve our products.
                        </p>

                        <details
                          className="TradeGodthicCn text-xs"
                          type="accordion"
                        >
                          <summary className="TradeGodthicCn text-xs underline cursor-pointer">
                            Review guidelines
                          </summary>
                          <article>
                            <div className="mt-4 p-5 leading-4">
                              <p>
                                We value your input and invite you to rate and
                                review your purchases. Be sure to explain why
                                you like or dislike the product and focus on the
                                product's features and your own experience using
                                it.
                              </p>
                              <p>
                                If you wish to comment about product selection,
                                pricing, ordering, delivery or other issues,
                                please contact our customer support.
                              </p>
                              <p>
                                Please refrain from including any of the
                                following in your review:
                              </p>
                              <ul className="pl-4 mb-4">
                                <li className="mb-1">
                                  Obscene or discriminatory language
                                </li>
                                <li className="mb-1">
                                  Critical or inappropriate comments about other
                                  reviews and shoppers
                                </li>
                                <li className="mb-1">
                                  Advertising, spam, references to other
                                  websites or retailers
                                </li>
                                <li className="mb-1">
                                  Personal information such as email addresses,
                                  phone numbers or physical addresses
                                </li>
                              </ul>
                              <p>
                                All reviews are subject to our store's Terms of
                                Use.
                              </p>
                            </div>
                          </article>
                        </details>
                      </div>

                      <div className="head-right">
                        <img
                          src={imageR}
                          className="md:max-w-[10rem] md:h-40 max-w-[5rem] h-20 object-contain"
                        />
                      </div>
                    </div>

                    <fieldset className="mt-8">
                      <fieldset className="overall-rating mt-4">
                        <legend className="mb-2 TradeGodthicCn text-sm">
                          <span>Overall rating</span>
                          <span className="text-red-600"> *</span>
                        </legend>

                        <div>
                          <Rate
                            className="text-[var(--primaryColor)] text-[45px] font-light"
                            allowHalf
                            defaultValue={0}
                            onChange={handleRatingChange}
                            value={star}
                          />
                        </div>
                      </fieldset>

                      <div className="body-text mt-2">
                        <label className="mb-2 TradeGodthicCn text-sm block">
                          <span>Review</span>
                          <span className="text-red-600"> *</span>
                        </label>

                        <textarea
                          className="border-[var(--borderColor)] border-[0.8px] resize-none w-full block py-2 px-4 TradeGodthicCn rounded-md"
                          rows="5"
                          onChange={handleReviewChange}
                          value={content}
                        ></textarea>

                        <div className="hint-text">
                          <InfoCircleOutlined className="text-[#00000094]" />
                          <span className="TradeGodthicCn text-xs text-[#00000094] ml-1">
                            Make your review great: Describe what you liked,
                            what you didn’t like, and other key things shoppers
                            should know.
                          </span>
                        </div>
                      </div>

                      <div
                        className={`submit-review mt-6 ${
                          !content.trim() || star < 1
                            ? "pointer-events-none"
                            : ""
                        }`}
                      >
                        <Loading isLoading={isLoading}>
                          <ButtonSolid
                            onClick={() => {
                              if (!content.trim() || star <= 0.5) {
                                // Content is empty or star is less than or equal to 0.5, do not proceed with the action
                                return;
                              }
                              handleSubmitReview();
                            }}
                            // onClick={handleSubmitReview}
                            child={"SUBMIT"}
                            customClass={"text-lg mb-6"}
                            disabled={!content.trim() || star < 1}
                          ></ButtonSolid>
                        </Loading>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
