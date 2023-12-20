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
    navigate("/my-order", {
      state: {
        id: user?.id,
        token: user?.access_token,
      },
    });
    // window.location.reload;
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
    </>
  );
};

export default OrderSuccess;
