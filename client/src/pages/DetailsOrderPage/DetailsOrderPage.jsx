import { useLocation, useParams } from "react-router-dom";
import * as OrderService from "../../services/OrderService";
import { useQuery } from "@tanstack/react-query";
import { convertPrice } from "../../utils";
import { useMemo } from "react";
import Loading from "../../components/LoadingComponent/Loading";

import { formatDate, addDayFormat } from "../../utils";

import {
  EnvironmentFilled,
  HomeFilled,
  PhoneFilled,
  MailFilled,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

const DetailsOrderPage = () => {
  const user = useSelector((state) => state.user);

  const params = useParams();
  const location = useLocation();
  const { state } = location;
  const { id } = params;

  const fetchDetailsOrder = async () => {
    const res = await OrderService.getDetailsOrder(id, state?.token);
    return res.data;
  };

  const queryOrder = useQuery(
    { queryKey: ["orders-details"], queryFn: fetchDetailsOrder },
    {
      enabled: id,
    }
  );
  const { isLoading, data } = queryOrder;

  const priceMemo = useMemo(() => {
    const result = data?.orderItems?.reduce((total, cur) => {
      return total + cur.price * cur.amount;
    }, 0);
    return result;
  }, [data]);

  const formattedCreatedAt = data?.createdAt
    ? formatDate(data?.createdAt, "MMM dd, yyyy HH:mm")
    : "N/A";

  const formattedDeliveryAt = data?.deliveredAt
    ? formatDate(data?.deliveredAt, "MMM dd")
    : "N/A";
  const deliveryDate = data?.deliveredAt
    ? formatDate(data?.deliveredAt, "MMM dd, yyyy HH:mm")
    : "N/A";

  const paymentTime = data?.paidAt
    ? formatDate(data?.paidAt, "MMM dd, yyyy HH:mm")
    : "N/A";

  const formattedRefundDay = data?.deliveredAt
    ? addDayFormat(data?.deliveredAt, 7)
    : "N/A";

  const estimatedDay = data?.updatedAt
    ? formatDate(data.updatedAt, "MMM dd")
    : "N/A";

  const estimatedAfterThreeDay = data?.updatedAt
    ? addDayFormat(data?.updatedAt, 3)
    : "N/A";

  const estimatedAfterFiveDay = data?.updatedAt
    ? addDayFormat(data?.updatedAt, 5)
    : "N/A";

  return (
    <>
      <Loading isLoading={isLoading}>
        <div className="min-h-screen bg-texture p-4 lg:p-8">
          <div className="contain_header flex flex-col lg:p-6 p-4">
            <h1 className="text-3xl duration-700 lg:duration-700 lg:text-5xl block">
              {data?.isDelivered ? (
                <span className="TradeGodthic-BoldCn">Order completed</span>
              ) : (
                <span className="TradeGodthic-BoldCn">Order placed</span>
              )}
            </h1>

            <div className="text-base">
              <p>
                {data?.isDelivered ? (
                  <span className="TradeGodthicCn">
                    Delivered on{" "}
                    <span className="TradeGodthic-BoldCn">
                      {formattedDeliveryAt}
                    </span>
                    . You can request return/refund until{" "}
                    <span className="TradeGodthic-BoldCn">
                      {formattedRefundDay}
                    </span>
                    .
                  </span>
                ) : (
                  <span className="TradeGodthicCn">Order placed</span>
                )}
              </p>
            </div>
          </div>

          {/* <div className="lg:px-6 px-4 gap-3 columns-1 lg:columns-3"> */}
          <div className="lg:px-6 px-4 gap-3 grid grid-cols-1 lg:grid-cols-3">
            <div className="addressOrder rounded-md bg-white h-fit overflow-hidden TradeGodthicCn">
              <div className="p-4">
                {/* <div className="flex TradeGodthic-BoldCn text-base gap-3">
                  <span className="flex gap-1">
                    <EnvironmentFilled className="text-gray-400" />
                    {data?.shippingAddress?.fullName}
                  </span>
                  <span className="TradeGodthicCn text-gray-500">
                    ({data?.shippingAddress?.phone})
                  </span>
                </div> */}
                <div className="break-all">
                  {/* <span className="text-gray-500 TradeGodthicCn">
                    {data?.shippingAddress?.address},
                    {data?.shippingAddress?.city}
                  </span> */}

                  <div className="bg-gray-100 rounded-[4px] relative h-24 mb-7">
                    <div className="absolute -bottom-6 left-3 rounded-full overflow-hidden border-3 border-white aspect-square w-24">
                      <img
                        src={user?.avatar || "/images/none-user.png"}
                        alt=""
                      />
                    </div>
                  </div>
                  <h1 className="text-4xl duration-700 lg:duration-700 lg:text-4xl block TradeGodthic-BoldCn mb-1">
                    {data?.shippingAddress?.fullName}
                  </h1>
                  <div className="text-base">
                    <div className="py-1">
                      <span>
                        <MailFilled className="text-gray-400" />
                        &nbsp;&nbsp;Email
                        {"  "}
                        <span className="TradeGodthic-BoldCn">
                          {user?.email}
                        </span>
                      </span>
                    </div>
                    <div className="py-1">
                      <span>
                        <PhoneFilled className="text-gray-400" />
                        &nbsp;&nbsp;Phone{" "}
                        <span className="TradeGodthic-BoldCn">
                          {data?.shippingAddress?.phone}
                        </span>
                      </span>
                    </div>

                    <div className="py-1">
                      <span>
                        <HomeFilled className="text-gray-400" />
                        &nbsp;&nbsp;Address{" "}
                        <span className="TradeGodthic-BoldCn">
                          {data?.shippingAddress?.address}
                        </span>
                      </span>
                    </div>
                    <div className="py-1">
                      <span>
                        <EnvironmentFilled className="text-gray-400" />
                        &nbsp;&nbsp;City{" "}
                        <span className="TradeGodthic-BoldCn">
                          {data?.shippingAddress?.city}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="productOrder p-4 rounded-md bg-white overflow-hidden TradeGodthicCn flex flex-col gap-3 h-fit">
              {data?.orderItems?.map((order) => {
                return (
                  <>
                    {/* {order?.orderItems?.map((orderItem)=>{<></>})} */}
                    <div
                      key={order?._id}
                      className="rounded-md bg-white overflow-hidden TradeGodthicCn"
                    >
                      <div>
                        <div className="flex gap-2 bg-gray-100 p-4 rounded-[4px]">
                          <div className="w-40">
                            <img
                              className="mix-blend-darken"
                              src={order?.image}
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-between">
                            <div className="flex justify-between">
                              <div>
                                <div className="text-base">
                                  <span>{order?.name}</span>
                                </div>
                                <div>
                                  <span className="text-gray-400">
                                    {order?.type}
                                  </span>
                                </div>
                              </div>
                              <div className="TradeGodthic-BoldCn">
                                {data.isPaid || data.isDelivered ? (
                                  "Paid"
                                ) : (
                                  <span className="text-priCo">Unpaid</span>
                                )}
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <div>
                                <span className="TradeGodthic-BoldCn text-base">
                                  {convertPrice(data?.itemsPrice)}
                                </span>
                              </div>
                              <div>
                                <span>x{order?.amount}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="flex flex-col gap-3">
              <div className="summaryOrder rounded-md bg-white h-fit overflow-hidden TradeGodthicCn">
                <div className="flex flex-col gap-2 p-4">
                  <div className="rounded-[4px] flex justify-between">
                    <span className="TradeGodthic-BoldCn text-lg">
                      Order summary
                    </span>
                  </div>
                  <div className="rounded-[4px] flex justify-between">
                    <span className="TradeGodthicCn text-base">Subtotal</span>
                    <span className="TradeGodthicCn">
                      {convertPrice(data?.itemsPrice)}
                    </span>
                  </div>
                  <div className="rounded-[4px] flex justify-between">
                    <span className="TradeGodthicCn text-base">Shipping</span>
                    <span className="TradeGodthicCn">
                      {" "}
                      {convertPrice(data?.shippingPrice)}
                    </span>
                  </div>
                  <div className="rounded-[4px] flex justify-between">
                    <span className="TradeGodthic-BoldCn text-base">Total</span>
                    <span className="TradeGodthic-BoldCn">
                      {" "}
                      {convertPrice(data?.totalPrice)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="detailsOrder rounded-md bg-white h-fit overflow-hidden TradeGodthicCn">
                <div className="flex flex-col gap-2 p-4">
                  <div className="rounded-[4px] flex justify-between">
                    <span className="TradeGodthic-BoldCn text-lg">
                      Order details
                    </span>
                  </div>
                  <div className="rounded-[4px] flex justify-between">
                    <span className="TradeGodthicCn text-base">
                      Order identification
                    </span>
                    <span className="TradeGodthicCn">{data?._id}</span>
                  </div>
                  <div className="rounded-[4px] flex justify-between">
                    <span className="TradeGodthicCn text-base">Order date</span>
                    <span className="TradeGodthicCn">{formattedCreatedAt}</span>
                  </div>
                  <div className="rounded-[4px] flex justify-between">
                    <span className="TradeGodthicCn text-base">
                      Payment method
                    </span>
                    <span className="TradeGodthicCn">
                      {data?.paymentMethod}
                    </span>
                  </div>
                  <div className="rounded-[4px] flex justify-between">
                    <span className="TradeGodthicCn text-base">
                      Payment time
                    </span>
                    <span className="TradeGodthicCn">
                      {/* {paymentTime}{" "} */}
                      {data?.paymentMethod === "Paypal E-Wallet" ? (
                        <>{formattedCreatedAt}</>
                      ) : (
                        <>{paymentTime}</>
                      )}
                    </span>
                  </div>
                  <div className="rounded-[4px] flex justify-between">
                    <span className="TradeGodthicCn text-base">
                      Delivery date
                    </span>
                    <span className="TradeGodthicCn">{deliveryDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Loading>
    </>
  );
};

export default DetailsOrderPage;
