/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Loading from "../../components/LoadingComponent/Loading";
import { useQuery } from "@tanstack/react-query";
import * as OrderService from "../../services/OrderService";
import { useSelector } from "react-redux";
import { convertPrice } from "../../utils";

import { useLocation, useNavigate } from "react-router-dom";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as message from "../../components/Message/Message";
import ButtonOutline from "../../components/ButtonOutline/ButtonOutline.jsx";
import { format, addDays } from "date-fns";
import { enUS } from "date-fns/locale";
import { RightOutlined } from "@ant-design/icons";

const MyOrderPage = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const fetchMyOrder = async () => {
    const res = await OrderService.getOrderByUserId(state?.id, state?.token);
    return res.data;
  };
  const user = useSelector((state) => state.user);
  // const order = useSelector((state) => state.order);
  // console.log("MyOrderPage ~ orders:", orders);

  const queryOrder = useQuery(
    { queryKey: ["orders"], queryFn: fetchMyOrder },
    {
      enabled: state?.id && state?.token,
    }
  );
  const { isLoading, data } = queryOrder;

  const handleDetailsOrder = (id) => {
    navigate(`/details-order/${id}`, {
      state: {
        token: state?.token,
      },
    });
  };
  const handleProductDetails = (id) => {
    navigate(`/product-details/${id}`, {
      state: {
        token: state?.token,
      },
    });
  };

  const mutation = useMutationHooks((data) => {
    const { id, token, orderItems, userId } = data;
    console.log("mutation ~ data:", data);
    const res = OrderService.cancelOrder(id, token, orderItems, userId);
    return res;
  });
  console.log("mutation ~ data:", data);

  const handleCanceOrder = (order) => {
    mutation.mutate(
      {
        id: order._id,
        token: state?.token,
        orderItems: order?.orderItems,
        userId: user.id,
      },
      {
        onSuccess: () => {
          queryOrder.refetch();
        },
      }
    );
  };
  const {
    isLoading: isLoadingCancel,
    isSuccess: isSuccessCancel,
    isError: isErrorCancle,
    data: dataCancel,
  } = mutation;

  useEffect(() => {
    if (isSuccessCancel && dataCancel?.status === "OK") {
      message.success("Cancel successfully");
    } else if (isSuccessCancel && dataCancel?.status === "ERR") {
      message.error(dataCancel?.message);
    } else if (isErrorCancle) {
      message.error();
    }
  }, [isErrorCancle, isSuccessCancel]);

  return (
    <>
      <Loading isLoading={isLoading || isLoadingCancel}>
        <div className="min-h-screen bg-texture p-4 lg:p-8">
          <div className="contain_header flex flex-col lg:p-6 p-4 lg:flex lg:flex-row lg:items-end">
            <h1 className="text-3xl ITCGara duration-700 lg:duration-700 lg:text-5xl block">
              My order
            </h1>
          </div>
          <div className="mx-auto">
            {data && data.length === 0 ? (
              <div className="flex items-center justify-center text-base lg:text-lg TradeGodthicCn h-full">
                <p>You haven't placed any orders yet.</p>
              </div>
            ) : (
              <>
                {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 grid-rows-[masonry]"> */}
                <div className="lg:px-6 px-4 gap-5 columns-1 lg:columns-2 xl:columns-3">
                  {data?.map((order) => {
                    console.log("{data?.map ~ data:", data);
                    const formattedCreatedAt = format(
                      new Date(order.createdAt),
                      "yyyy MMM dd",
                      {
                        locale: enUS,
                      }
                    );

                    const formattedDeliveryAt = order.deliveredAt
                      ? format(new Date(order.deliveredAt), "yyyy MMM dd", {
                          locale: enUS,
                        })
                      : "N/A";

                    const estimatedDay = order.updatedAt
                      ? new Date(order.updatedAt).toLocaleString("en-US", {
                          month: "short",
                          day: "numeric",
                        })
                      : "N/A";

                    const estimatedAfterThreeDay = order.updatedAt
                      ? format(
                          addDays(new Date(order.updatedAt), 3),
                          " MMM dd",
                          {
                            locale: enUS,
                          }
                        )
                      : "N/A";
                    const estimatedAfterFiveDay = order.updatedAt
                      ? format(
                          addDays(new Date(order.updatedAt), 5),
                          " MMM dd",
                          {
                            locale: enUS,
                          }
                        )
                      : "N/A";

                    return (
                      <>
                        <div
                          key={order?._id}
                          className="mb-6 break-inside-avoid rounded-md bg-white overflow-hidden TradeGodthicCn"
                        >
                          <div className="flex flex-col gap-3 p-4">
                            <div className="pro-status rounded-[4px] flex justify-between">
                              <span className="TradeGodthic-BoldCn text-base">
                                {formattedCreatedAt}
                              </span>
                              {order.isDelivered ? (
                                <span className="TradeGodthic-BoldCn">
                                  Order completed
                                </span>
                              ) : (
                                <span className="TradeGodthic-BoldCn">
                                  Order placed
                                </span>
                              )}
                            </div>

                            <div
                              onClick={() => handleDetailsOrder(order?._id)}
                              className="pro-status bg-gray-100 p-4 rounded-[4px] flex justify-between items-center cursor-pointer"
                            >
                              <div className="flex gap-2">
                                <div>
                                  <img src="/images/delivery-icon.svg" alt="" />
                                </div>
                                <div className="TradeGodthic-BoldCn">
                                  {order.isDelivered ? (
                                    <>
                                      <span>
                                        Delivered {formattedDeliveryAt}
                                      </span>
                                      <br />
                                      <span className="TradeGodthicCn text-gray-500">
                                        Your package has been delivered
                                      </span>
                                    </>
                                  ) : (
                                    <>
                                      {order.isDelivered ? (
                                        ""
                                      ) : (
                                        <>
                                          <span className="text-priCo">
                                            Estimated: {estimatedAfterThreeDay}{" "}
                                            - {estimatedAfterFiveDay}
                                          </span>
                                        </>
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>

                              <div className="text-gray-500 text-xs">
                                <span>Details </span>
                                <RightOutlined />
                              </div>
                            </div>

                            <div className="pro-list gap-2 flex flex-col">
                              {order?.orderItems?.map((orderItem) => (
                                <>
                                  <div className="flex flex-col gap-2 border-b-2 py-4">
                                    <div className="flex gap-2">
                                      <div className="w-40">
                                        <img src={orderItem?.image} />
                                      </div>
                                      <div className="flex flex-1 flex-col justify-between">
                                        <div className="flex justify-between">
                                          <div>
                                            <div className="text-base">
                                              <span>{orderItem?.name}</span>
                                            </div>
                                            <div>
                                              <span className="text-gray-400">
                                                {orderItem?.type}
                                              </span>
                                            </div>
                                          </div>
                                          <div className="TradeGodthic-BoldCn">
                                            {order.isPaid ||
                                            order.isDelivered ? (
                                              "Paid"
                                            ) : (
                                              <span className="text-priCo">
                                                Unpaid
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                        <div className="flex justify-between">
                                          <div>
                                            <span className="TradeGodthic-BoldCn text-base">
                                              {convertPrice(
                                                (orderItem.price -
                                                  (orderItem.price *
                                                    orderItem.discount) /
                                                    100) *
                                                  orderItem.amount
                                              )}
                                            </span>
                                          </div>
                                          <div>
                                            <span>x{orderItem?.amount}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {order.isDelivered ? (
                                      <div className="flex justify-end">
                                        <ButtonOutline
                                          onClick={() =>
                                            handleProductDetails(
                                              orderItem?.product
                                            )
                                          }
                                          customClass={"!py-2 !px-4 !text-sm"}
                                          child={"Buy again"}
                                        ></ButtonOutline>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </>
                              ))}
                            </div>

                            <div className="basis-14 py-4">
                              <div className="TradeGodthic-BoldCn flex flex-col gap-0 text-right text-base">
                                <div>
                                  <span>{order?.orderItems?.length} </span>
                                  <span>
                                    {order?.orderItems?.length > 1
                                      ? "items, total: "
                                      : "item: "}{" "}
                                    {convertPrice(order?.totalPrice)}
                                  </span>
                                </div>

                                <div className="flex gap-3 justify-end">
                                  <div>
                                    {order.isDelivered ? (
                                      ""
                                    ) : (
                                      <ButtonOutline
                                        customClass={
                                          "!py-2 !px-4 !text-sm mt-4"
                                        }
                                        onClick={() => handleCanceOrder(order)}
                                        child={"Cancel order"}
                                      ></ButtonOutline>
                                    )}
                                  </div>
                                  {/* <div className="flex gap-3">
                                <ButtonSolid
                                  onClick={() =>
                                    handleProductDetails(order?.orderItems?._id)
                                  }
                                  customClass={"!py-2 !px-4 !text-sm"}
                                  child={"Buy again"}
                                ></ButtonSolid>
                                <ButtonSolid
                                  customClass={"!py-2 !px-4 !text-sm"}
                                  onClick={() => handleDetailsOrder(order?._id)}
                                  child={"See details"}
                                ></ButtonSolid>
                              </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </Loading>
    </>
  );
};

export default MyOrderPage;
