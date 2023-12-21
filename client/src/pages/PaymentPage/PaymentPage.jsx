import { Form, Radio } from "antd";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { convertPrice } from "../../utils";
import { useMemo } from "react";

import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserService from "../../services/UserService";
import * as OrderService from "../../services/OrderService";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from "../../components/Message/Message";
import { updateUser } from "../../redux/slides/userSlide";
import { useNavigate } from "react-router-dom";
import { removeAllOrderProduct } from "../../redux/slides/orderSlide";
import { PayPalButtons } from "@paypal/react-paypal-js";
import * as PaymentService from "../../services/PaymentService";
import { EditOutlined } from "@ant-design/icons";
import ButtonSolid from "../../components/ButtonSolid/ButtonSolid.jsx";
import ButtonOutline from "../../components/ButtonOutline/ButtonOutline.jsx";
import "./style.scss";

const PaymentPage = () => {
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const [showSavCanl, setShowSavCanl] = useState(false);
  const [showInformation, setShowInformation] = useState(true);

  const [delivery, setDelivery] = useState("fast");
  const [payment, setPayment] = useState("Cash on delivery");
  const navigate = useNavigate();
  const [sdkReady, setSdkReady] = useState(false);
  const [deliveredAt, setDeliveredAt] = useState(null);
  const [paidAt, setPaidAt] = useState(null);
  const [deliveryFee, setDeliveryFee] = useState(30000); // Giá trị mặc định là 20000

  const [isOpenModalUpdateInfo, setIsOpenModalUpdateInfo] = useState(false);
  const [stateUserDetails, setStateUserDetails] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    email: "",
  });
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const handleToLogin = () => {
    navigate("/sign-in");
  };

  useEffect(() => {
    form.setFieldsValue(stateUserDetails);
  }, [form, stateUserDetails]);

  useEffect(() => {
    setStateUserDetails({
      city: user?.city,
      name: user?.name,
      address: user?.address,
      phone: user?.phone,
      email: user?.email,
    });
    // if (isOpenModalUpdateInfo) {
    // }
  }, [isOpenModalUpdateInfo]);
  const addressForm = document.querySelector(".parentForm");

  const EnableForm = () => {
    if (addressForm.classList.contains("pointer-events-none")) {
      addressForm.classList.remove("pointer-events-none");
    } else {
      addressForm.classList.add("pointer-events-none");
    }
  };
  const handleChangeAddress = () => {
    setIsOpenModalUpdateInfo(true);
    setShowSavCanl(true);
    setShowInformation(false);
  };
  const productPrice = (order) => {
    const mainPrice =
      (order.price - (order.price * order.discount) / 100) * order.amount;
    return convertPrice(mainPrice);
  };
  // const priceMemo = useMemo(() => {
  //   const result = order?.orderItemsSelected?.reduce((total, cur) => {
  //     return total + cur.price * cur.amount;
  //   }, 0);
  //   return result;
  // }, [order]);

  const priceDiscountMemo = useMemo(() => {
    const result = order?.orderItemsSelected?.reduce((total, cur) => {
      return (
        total + (cur.price - (cur.price * cur.discount) / 100) * cur.amount
      );
    }, 0);

    return result;
  }, [order]);

  const deliveryPriceMemo = useMemo(() => {
    // if (priceDiscountMemo > 200000) {
    //   return 10000;
    // } else if (priceDiscountMemo === 0) {
    //   return 0;
    // } else {
    //   return 20000;
    // }
    return deliveryFee;
  }, [priceDiscountMemo, deliveryFee]);

  const handleDilivery = (e) => {
    const selectedDeliveryMethod = e.target.value;
    setDelivery(selectedDeliveryMethod); // Cập nhật state delivery
    setDeliveryFee(selectedDeliveryMethod === "fast" ? 30000 : 15000); // Cập nhật phí vận chuyển
  };

  const totalPriceMemo = useMemo(() => {
    return Number(priceDiscountMemo) + Number(deliveryPriceMemo);
  }, [priceDiscountMemo, deliveryPriceMemo]);

  const handleAddOrder = () => {
    if (
      user?.access_token &&
      order?.orderItemsSelected &&
      user?.name &&
      user?.address &&
      user?.phone &&
      user?.city &&
      priceDiscountMemo &&
      user?.id
    ) {
      // eslint-disable-next-line no-unused-expressions
      mutationAddOrder.mutate({
        token: user?.access_token,
        orderItems: order?.orderItemsSelected,
        fullName: user?.name,
        address: user?.address,
        phone: user?.phone,
        city: user?.city,
        paymentMethod: payment,
        itemsPrice: priceDiscountMemo,
        shippingPrice: deliveryPriceMemo,
        totalPrice: totalPriceMemo,
        user: user?.id,
        email: user?.email,
        deliveredAt: deliveredAt, // Thêm deliveredAt
        paidAt: paidAt, // Thêm paidAt
      });
    }
  };

  const mutationUpdate = useMutationHooks((data) => {
    const { id, token, ...rests } = data;
    const res = UserService.updateUser(id, { ...rests }, token);
    return res;
  });

  const mutationAddOrder = useMutationHooks((data) => {
    const { token, ...rests } = data;
    const res = OrderService.createOrder({ ...rests }, token);
    return res;
  });

  // const { isLoading, data } = mutationUpdate;
  const { isLoading } = mutationUpdate;
  const {
    data: dataAdd,
    isLoading: isLoadingAddOrder,
    isSuccess,
    isError,
  } = mutationAddOrder;

  useEffect(() => {
    if (isSuccess && dataAdd?.status === "OK") {
      const arrayOrdered = [];
      order?.orderItemsSelected?.forEach((element) => {
        arrayOrdered.push(element.product);
      });
      dispatch(removeAllOrderProduct({ listChecked: arrayOrdered }));
      message.success("Order successfully");
      const userEmail = user?.email;
      navigate("/orderSuccess", {
        state: {
          delivery,
          payment,
          orders: order?.orderItemsSelected,
          users: user,
          priceDiscountMemo: priceDiscountMemo,
          deliveryPriceMemo: deliveryPriceMemo,
          totalPriceMemo: totalPriceMemo,
          userEmail,
        },
      });
      console.log("order-success");
    } else if (isError) {
      message.error();
      console.log("order-error");
    }
  }, [isSuccess, isError, dispatch]);

  const handleCancleUpdate = () => {
    setStateUserDetails({
      name: "",
      email: "",
      phone: "",
      isAdmin: false,
    });
    form.resetFields();
    setIsOpenModalUpdateInfo(false);
    setShowSavCanl(false);
    setShowInformation(true);
  };

  // const onSuccessPaypal = (details, data) => {
  const onSuccessPaypal = (details) => {
    mutationAddOrder.mutate({
      token: user?.access_token,
      orderItems: order?.orderItemsSelected,
      fullName: user?.name,
      address: user?.address,
      phone: user?.phone,
      city: user?.city,
      paymentMethod: payment,
      itemsPrice: priceDiscountMemo,
      shippingPrice: deliveryPriceMemo,
      totalPrice: totalPriceMemo,
      user: user?.id,
      isPaid: true,
      paidAt: new Date(),
      email: user?.email,
      deliveredAt: null, // Thêm deliveredAt
    });
    // navigate("/orderSuccess", {
    //   state: {
    //     delivery,
    //     payment,
    //     orders: order?.orderItemsSelected,
    //     priceDiscountMemo: priceDiscountMemo,
    //     deliveryPriceMemo: deliveryPriceMemo,
    //     totalPriceMemo: totalPriceMemo,
    //     email: stateUserDetails.email,
    //   },
    // });
  };

  const handleUpdateInforUser = async (e) => {
    e.preventDefault();
    const { name, address, city, phone } = stateUserDetails;

    if (name && address && city && phone) {
      await mutationUpdate.mutate(
        { id: user?.id, token: user?.access_token, ...stateUserDetails },
        {
          onSuccess: () => {
            dispatch(updateUser({ name, address, city, phone }));
            setIsOpenModalUpdateInfo(false);
          },
        }
      );
    }

    setShowSavCanl(false);
    setShowInformation(true);
  };

  const handleOnchangeDetails = (e) => {
    setStateUserDetails({
      ...stateUserDetails,
      [e.target.name]: e.target.value,
    });
  };
  // const handleDilivery = (e) => {
  //   setDelivery(e.target.value);
  // };

  const handlePayment = (e) => {
    setPayment(e.target.value);
  };

  const addPaypalScript = async () => {
    const { data } = await PaymentService.getConfig();
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      // "https://www.paypal.com/sdk/js?client-id=AdifeAn4M9xQ_vQUbAFHyL75ApAripg_bAlHQsQG0GOS6f5e76P7Ukoxtg9gTAeG51mMFrD5X2eq0xOg";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
    console.log("addPaypalScript ~ script.src:", script.src);
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
      console.log("data", data);
    };
    document.body.appendChild(script);
  };

  useEffect(() => {
    if (!window.paypal) {
      addPaypalScript();
    } else {
      setSdkReady(true);
    }
  }, []);

  // const onUpdateUser = (event) => {
  //   event.preventDefault();
  // };

  return (
    <>
      <div className=" flex overflow-auto justify-between">
        <div className="w-full m-0 lg:w-[52%] lg:pl-20 lg:pr-16">
          <div className="flex flex-col">
            <div className="img-logo my-[21px] px-4">
              <img
                className=" brightness-0 w-[132px] lg:w-[15rem] "
                src="/images/logo/pdg-payment.png"
              />
            </div>
            <div className="w-full lg:max-w-full mt-[-100px] mx-auto flex flex-col pt-8">
              <div className="flex-col mt-10 cursor-pointer lg:hidden">
                <div className="w-full py-5 flex items-center justify-between border-t border-b	px-4">
                  <div className="flex" onClick={() => setShow(!show)}>
                    <span className="order-summary-toggle__icon-wrapper pr-2">
                      <svg
                        width="20"
                        height="19"
                        xmlns="http://www.w3.org/2000/svg"
                        className="order-summary-toggle__icon"
                      >
                        <path d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z"></path>
                      </svg>
                    </span>
                    {show ? "Hide" : "Show"} order summary
                  </div>
                  <div className=" font-semibold items-price">$130.00</div>
                </div>

                {show && (
                  <>
                    {order?.orderItemsSelected?.map((orderM) => {
                      return (
                        <>
                          <div className="bg-priCo text-white flex flex-col transition-all duration-500">
                            <div className="w-full mx-auto p-4">
                              <div className="flex justify-between border-b items-center border-[rgba(248,172,116,0.34)] pb-2">
                                <div className="flex justify-center items-center gap-2">
                                  <div className="w-14 h-14 bg-white flex items-center rounded-lg relative">
                                    <div className="amountNum w-5 h-5 bg-[#727272e6] rounded-full flex items-center justify-center top-[-10px] right-[-8px] absolute font-semibold text-xs">
                                      {orderM?.amount}
                                    </div>
                                    <img src={orderM?.image} />
                                  </div>
                                  <div className="py-5">
                                    <div className=" text-sm ">
                                      {orderM?.name}
                                    </div>
                                    <div className="text-orange-200	0 ">
                                      {orderM?.type}
                                    </div>
                                  </div>
                                </div>

                                <div className=" pl-2">
                                  {productPrice(orderM)}
                                </div>
                              </div>

                              <div className="mt-6 border-[rgba(248,172,116,0.34)] border-b pb-8">
                                <div className="flex justify-between">
                                  <div className="text-sm text-orange-200	 ">
                                    Subtotal
                                  </div>
                                  <div className="text-sm ">
                                    {convertPrice(priceDiscountMemo)}
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <div className="text-sm text-orange-200	 ">
                                    Shipping
                                  </div>
                                  <div className="text-sm text-orange-200	 ">
                                    {convertPrice(deliveryPriceMemo)}
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between mt-6">
                                  <div className="text-white font-normal text-base">
                                    Total
                                  </div>
                                  <div className="flex">
                                    <div className="text-base font-semibold ">
                                      {convertPrice(totalPriceMemo)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </>
                )}
              </div>
              <div className="comten w-full mt-6 px-4 lg:px-0 mb-14">
                <div className="flex justify-between items-baseline">
                  <div className="text-lg mt-6 font-semibold">
                    Shipping address
                  </div>
                  <div className="">
                    <p className="text-sm">
                      <span>Have an account? </span>
                      <button onClick={handleToLogin} className="">
                        Log in
                      </button>
                    </p>
                  </div>
                </div>

                <div className="parentForm pointer-events-none">
                  <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    // onFinish={onUpdateUser}
                    autoComplete="on"
                    form={form}
                  >
                    <input
                      className="border w-full h-[46px] rounded p-1 px-3 mt-4 text-sm   focus:border-2 focus:border-black dark:focus:ring-black"
                      value={stateUserDetails["name"]}
                      onChange={handleOnchangeDetails}
                      name="name"
                      placeholder="Name"
                    />
                    <input
                      className="border w-full h-[46px] rounded p-1 px-3 mt-4 text-sm   focus:border-2 focus:border-black dark:focus:ring-black"
                      value={stateUserDetails["city"]}
                      onChange={handleOnchangeDetails}
                      name="city"
                      placeholder="City"
                    />

                    <input
                      value={stateUserDetails.address}
                      onChange={handleOnchangeDetails}
                      name="address"
                      placeholder="Address"
                      className="border w-full h-[46px] rounded p-1 px-3 mt-4  text-sm  focus:border-2 focus:border-black dark:focus:ring-black"
                    />

                    <input
                      value={stateUserDetails.phone}
                      onChange={handleOnchangeDetails}
                      name="phone"
                      placeholder="Phone"
                      className="border w-full h-[46px] rounded p-1 px-3 my-4 text-sm focus:border-2 focus:border-black dark:focus:ring-black"
                    />
                  </Form>
                </div>
                <div
                  className={`flex ${
                    showInformation === false ? "justify-end" : "justify-start"
                  }`}
                >
                  <Loading isLoading={isLoading}>
                    {showInformation && (
                      <div
                        onClick={() => {
                          handleChangeAddress();
                          EnableForm();
                        }}
                        className="flex justify-end gap-1 items-center"
                        style={{ cursor: "pointer" }}
                      >
                        <span className="text-base">Click to change</span>
                        <EditOutlined className="text-lg"></EditOutlined>
                      </div>
                    )}
                    {showSavCanl && (
                      <div className="flex gap-2 justify-end ">
                        <ButtonSolid
                          onClick={(e) => {
                            handleUpdateInforUser(e);
                            EnableForm();
                          }}
                          style={{ cursor: "pointer" }}
                          child={"Save"}
                          customClass={"!py-2 !px-5"}
                        ></ButtonSolid>
                        <ButtonOutline
                          onClick={() => {
                            handleCancleUpdate();
                            EnableForm();
                          }}
                          style={{ cursor: "pointer" }}
                          child={"Cancel"}
                          customClass={"!py-2 !px-5"}
                        ></ButtonOutline>
                      </div>
                    )}
                  </Loading>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <label className="text-lg font-semibold">
                    Shipping method
                  </label>
                  <Radio.Group
                    className="flex flex-col gap-5"
                    onChange={handleDilivery}
                    value={delivery}
                  >
                    <Radio value="fast">
                      <div className="flex items-center gap-1">
                        <div className="w-8 h-5 flex items-center overflow-hidden rounded-sm bg-red-100">
                          <img
                            src="https://www.pngall.com/wp-content/uploads/11/Fast-Delivery-PNG-Pic.png"
                            alt=""
                          />
                        </div>
                        <span className="font-normal">Fast delivery</span>
                        <span className="font-semibold text-priCo">
                          30.000₫
                        </span>
                      </div>
                    </Radio>
                    <Radio value="economical">
                      <div className="flex items-center gap-1">
                        <div className="w-8 h-5 flex items-center overflow-hidden rounded-sm bg-[#ebf6f0]">
                          <img
                            style={{ width: "inherit", height: "inherit" }}
                            className="object-cover"
                            src="/images/Economical-delivery-icon.jpg"
                          />
                        </div>
                        <span className="font-normal">Economical delivery</span>
                        <span className="font-semibold text-priCo">
                          15.000₫
                        </span>
                      </div>
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <label className="text-lg font-semibold">
                    Payment method
                  </label>
                  <Radio.Group
                    className="flex flex-col gap-5"
                    onChange={handlePayment}
                    value={payment}
                  >
                    <Radio className="font-normal" value="Cash on delivery">
                      <span className="mr-1 px-1 py-[2px] bg-[#4faa7e] text-white rounded-sm font-medium text-xs">
                        COD
                      </span>
                      <span>Cash on delivery</span>
                    </Radio>
                    <Radio className="font-normal" value="Paypal E-Wallet">
                      <div className="flex">
                        <div className="mr-1 px-2 py-[2px] bg-[#ffc439] rounded-sm">
                          <img
                            width={17}
                            height={17}
                            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg"
                            alt=""
                          />
                        </div>
                        <span>Paypal E-Wallet</span>
                      </div>
                    </Radio>
                  </Radio.Group>
                </div>

                <div className="lg:w-full flex flex-col items-end mt-5">
                  <div className="w-full flex flex-col gap-2">
                    <Loading isLoading={isLoadingAddOrder}>
                      {payment === "Paypal E-Wallet" && sdkReady ? (
                        <div className="flex flex-col w-full">
                          <PayPalButtons
                            className="flex z-10"
                            style={{ layout: "horizontal" }}
                            amount={Math.round(totalPriceMemo / 30000)}
                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onApprove={onSuccessPaypal}
                            // onSuccess={onSuccessPaypal}
                            onError={() => {
                              alert("Error");
                            }}
                          />
                        </div>
                      ) : (
                        <div className="flex">
                          <button
                            onClick={() => {
                              handleAddOrder();
                            }}
                            className="bg-black tracking-wide text-white py-5 px-6 rounded w-full text-lg font-medium"
                          >
                            Place order
                          </button>
                        </div>
                      )}
                    </Loading>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex text-xs py-4 font-normal">
                <a className="mr-4 ">Refund policy</a>
                <a className="mr-4 ">Privacy policy</a>
                <a className="">Terms of service</a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:w-[45%] bg-priCo text-white flex-col">
          <div className="w-3/4 pl-[56px] mt-16">
            {order?.orderItemsSelected?.map((order) => {
              return (
                <>
                  <div
                    key={order?.product}
                    className="flex justify-between border-b items-center border-[rgba(248,172,116,0.34)] pb-2"
                  >
                    <div className="imgProduct flex justify-center items-center">
                      <div className="w-16 h-16 bg-white flex items-center rounded-lg relative">
                        <div className="amountNum w-5 h-5 bg-[#727272e6] rounded-full flex items-center justify-center top-[-10px] right-[-8px] absolute font-semibold text-xs">
                          {order?.amount}
                        </div>
                        <img src={order?.image} />
                      </div>
                      <div className="py-5 pl-3">
                        <div className=" text-sm font-medium">
                          {order?.name}
                        </div>
                        <div className="text-orange-200">{order?.type}</div>
                      </div>
                    </div>

                    <div className="font-medium pl-2">
                      {productPrice(order)}
                    </div>
                  </div>
                </>
              );
            })}

            {/* <div className="mt-6 gap-2 flex border-b border-[rgba(248,172,116,0.34)] pb-8">
              <input
                type="text"
                className="!bg-white outline-none rounded border-0 w-full h-[45px]  pl-2"
                placeholder="Discount code or gift card"
              />
              <button className="bg-[#f7a05f] outline-none rounded border-0 h-[45px] w-[80px] ">
                {" "}
                Apply
              </button>
            </div> */}
            <div className="mt-6 border-[rgba(248,172,116,0.34)] border-b pb-8">
              <div className="flex justify-between">
                <div className="text-sm text-orange-200 font-normal">
                  Subtotal
                </div>
                <div className="text-sm font-medium">
                  {convertPrice(priceDiscountMemo)}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm text-orange-200	font-normal">
                  Shipping
                </div>
                <div className="text-sm	font-medium">
                  {convertPrice(deliveryPriceMemo)}
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mt-6">
                <div className="text-white font-normal text-base">Total</div>
                <div className="flex ">
                  <div className="text-lg font-semibold ">
                    {convertPrice(totalPriceMemo)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
