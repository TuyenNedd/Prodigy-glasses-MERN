import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonSolid from "../../components/ButtonSolid/ButtonSolid.jsx";
import InputForm from "../../components/InputForm/InputForm";
import Loading from "../../components/LoadingComponent/Loading";
import { useMutationHooks } from "../../hooks/useMutationHook";
import { updateUser } from "../../redux/slides/userSlide";
import * as UserService from "../../services/UserService";
import "./style.scss";
import { message } from "antd";
import { error } from "../../components/Message/Message.jsx";

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  const { data, isLoading, isSuccess, isError } = mutation;

  useEffect(() => {
    if (isSuccess) {
      // if (location?.state) {
      //   navigate(location?.state);
      //   console.log("useEffect ~ location?.state:", location?.state);
      // } else {
      //   navigate("/");
      // }
      localStorage.setItem("access_token", JSON.stringify(data?.access_token));
      localStorage.setItem(
        "refresh_token",
        JSON.stringify(data?.refresh_token)
      );
      if (data?.access_token) {
        const decoded = jwt_decode(data?.access_token);
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token);
          navigate("/");
          // window.location.reload();
        }
      }
    }
  }, [isSuccess]);

  const handleGetDetailsUser = async (id, token) => {
    const storage = localStorage.getItem("refresh_token");
    const refreshToken = JSON.parse(storage);
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token, refreshToken }));
  };

  const handleNavigateSignUp = () => {
    navigate("/sign-up");
  };

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  const handleSignIn = () => {
    mutation.mutate({
      email,
      password,
    });
  };

  return (
    <>
      <section className=" flex flex-col text-left lg:flex-row-reverse h-main items-center">
        <div className="flex flex-col items-center justify-center w-full  lg:p-16 p-4">
          <div className="max-w-md w-full p-4 lg:p-0">
            <form>
              <h1 className="text-[40px] lg:text-[80px] mb-2 mt-0 ITCGara leading-none">
                Login
              </h1>

              <div className="mt-4 relative field my-2">
                <label htmlFor="CustomerEmail" className="form--label text-sm">
                  Email
                </label>
                <InputForm
                  customClass={"form--input w-full placeholder-[#443828]"}
                  placeholder="email"
                  type={"email"}
                  value={email}
                  onChange={handleOnchangeEmail}
                ></InputForm>
                {data?.status === "ERR" && (
                  <span
                    className="TradeGodthicCn tracking-wide"
                    style={{ color: "red" }}
                  >
                    {data?.message === "This user is not defined"
                      ? "This user is not defined"
                      : ""}
                  </span>
                )}
              </div>

              <div className="mt-2 relative field my-2">
                <label className="form--label text-sm">Password</label>
                <InputForm
                  autocomplete="current-password"
                  customClass={"form--input w-full placeholder-[#443828]"}
                  placeholder="password"
                  type={"password"}
                  value={password}
                  onChange={handleOnchangePassword}
                ></InputForm>
                {data?.status === "ERR" && (
                  <span
                    className="TradeGodthicCn tracking-wide"
                    style={{ color: "red" }}
                  >
                    {data?.message === "The password or user is incorrect"
                      ? "The password or user is incorrect"
                      : ""}
                  </span>
                )}
              </div>

              <Loading isLoading={isLoading}>
                <a
                  disabled={!email.length || !password.length}
                  className={`header-main__link priBut_link py-3 px-6 bg-priCo rounded-md TradeGodthic-BoldCn hover:bg-[#ff9647] transition-all duration-300 tracking-wide inline-flex justify-center w-full mt-2 TradeGodthic-BoldCn text-lg ${
                    !email.length || !password.length
                      ? "pointer-events-none"
                      : "pointer-events-auto"
                  }`}
                  onClick={handleSignIn}
                >
                  SIGN IN
                </a>
              </Loading>

              <div className="mt-2 text-sm TradeGodthicCn">
                <a
                  className="link text-sm underline text-black px-1 cursor-pointer"
                  onClick={handleNavigateSignUp}
                >
                  Create account
                </a>

                {/* <a className="link text-sm underline text-black px-1">
                  Forgot your password?
                </a> */}
              </div>
            </form>
          </div>

          <div className="max-w-md w-full p-1 lg:p-0 hidden">
            <h2 className="type--secondary mb-2 mt-0">Reset your password</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInPage;
