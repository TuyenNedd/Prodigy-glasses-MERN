// import Loading from "../../components/LoadingComponent/Loading";
// import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { orderContant } from "../../contant";
import { convertPrice } from "../../utils";
import { CheckCircleFilled } from "@ant-design/icons";
import ButtonSolid from "../../components/ButtonSolid/ButtonSolid.jsx";
import { useSelector } from "react-redux";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const { state } = location;

  const backHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex p-10 flex-col items-center gap-2">
          <CheckCircleFilled className="text-9xl text-[#4faa7e]" />
          <h1 className="text-4xl font-semibold">Order successful</h1>

          <p>
            We have sent your order confirmation and invoice to
            <span className="font-semibold"> {user?.email}</span>
          </p>

          <ButtonSolid
            onClick={() => {
              backHome();
            }}
            hidden={"pt-4"}
            customClass={
              "inline-flex !py-4 !px-5 w-full TradeGodthic-BoldCn text-lg uppercase"
            }
            child={"Continue shopping"}
          ></ButtonSolid>
        </div>
      </div>
      {/* <div className="hidden lg:flex lg:w-full bg-[#f48029] text-white flex-col">
        <div className="w-3/5 pl-[56px] my-16">
          {state.user?.map((user) => {
            return (
              <>
                <span key={user?.email}>{user?.email}</span>
              </>
            );
          })}
          {state.orders?.map((order) => {
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
                      <div className=" text-sm font-medium">{order?.name} </div>
                      <div className="text-orange-200">{order?.type}</div>
                    </div>
                  </div>

                  <div className="font-medium pl-2">{productPrice(order)}</div>
                </div>
              </>
            );
          })}
          <div className="mt-6 border-[rgba(248,172,116,0.34)] border-b pb-8 flex flex-col gap-3">
            <div className="flex justify-between">
              <div className="text-sm text-orange-200 font-normal">
                Subtotal
              </div>
              <div className="text-sm font-medium">
                {convertPrice(state?.priceDiscountMemo)}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-sm text-orange-200	font-normal">Shipping</div>
              <div className="text-sm	font-medium">
                {convertPrice(state?.deliveryPriceMemo)}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-sm text-orange-200	font-normal">
                Payment method
              </div>
              <div className="text-sm	font-medium">
                <span>{orderContant.payment[state?.payment]}</span>
                {orderContant.payment[state?.payment] === "Cash on delivery" ? (
                  <span className="ml-1 px-1 py-[2px] bg-[#4faa7e] text-white rounded-sm font-medium text-xs">
                    COD
                  </span>
                ) : (
                  <div className="mr-1 px-2 py-[2px] bg-[#ffc439] rounded-sm">
                    <img
                      width={17}
                      height={17}
                      src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg"
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-sm text-orange-200	font-normal">
                Shipping method
              </div>
              {orderContant.delivery[state?.delivery] === "Fast delivery" ? (
                <>
                  <div className="flex items-center gap-1">
                    <span>{orderContant.delivery[state?.delivery]}</span>
                    <div className="w-8 h-5 flex items-center overflow-hidden rounded-sm bg-red-100">
                      <img
                        src="https://www.pngall.com/wp-content/uploads/11/Fast-Delivery-PNG-Pic.png"
                        alt=""
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-1">
                  <span>{orderContant.delivery[state?.delivery]}</span>
                  <span className="w-8 h-5 flex items-center overflow-hidden rounded-sm bg-[#ebf6f0]">
                    <img
                      style={{ width: "inherit", height: "inherit" }}
                      className="object-cover"
                      src="/images/Economical-delivery-icon.jpg"
                    />
                  </span>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-6">
              <div className="text-white font-normal text-base">Total</div>
              <div className="flex ">
                <div className="text-lg font-semibold ">
                  {convertPrice(state?.totalPriceMemo)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default OrderSuccess;
