import { useEffect, useState } from "react";
import AwwMenu from "../../components/AwwMenu/AwwMenu.jsx";
import ButtonSolid from "../../components/ButtonSolid/ButtonSolid.jsx";
// import Header from "../../components/Header/Header.jsx";
import "./signin.scss";
import { useNavigate } from "react-router-dom";
import InputForm from "../../components/InputForm/InputForm.jsx";

import * as UserService from "../../services/UserSevice.js";
import { useMutationHooks } from "./../../hooks/useMutationHook";
import * as message from "../../components/Message/Message";
import { useMutation } from "@tanstack/react-query";
import Loading from "../../components/LoadingComponent/Loading.jsx";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slides/useSlide.jsx";

/* eslint-disable react/no-unescaped-entities */

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  const dispatch = useDispatch();
  const mutation = useMutationHooks((data) => UserService.loginUser(data));

  const { data, isSuccess, isError, isLoading } = mutation;

  useEffect(() => {
    if (isSuccess) {
      message.success("chờ 2s");
      setTimeout(() => handleNextpage(), 2000);
      localStorage.setItem("access_token", JSON.stringify(data?.access_token));
      console.log("aaa", data?.access_token);
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        console.log("decoooo", decoded);
        if (decoded?.id) {
          handlGetDetailsUser(decoded?.id, data?.access_token);
        }
      }
    } else if (isError) {
      message.error();
    }
  }, [isSuccess]);
  const handlGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));

    console.log(res);
  };

  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  const handleNextpage = () => {
    if (data) {
      navigate("/");
    } else {
      console.log("err");
    }
  };

  const handleSubmitSignin = () => {
    console.log("submit");
    mutation.mutate({
      email,
      password,
    });
  };
  return (
    <>
      {/* <Header></Header> */}
      <AwwMenu></AwwMenu>
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
              </div>

              <div className="mt-2 relative field my-2">
                <label className="form--label text-sm">Password</label>

                <InputForm
                  customClass={"form--input w-full placeholder-[#443828]"}
                  placeholder="password"
                  type={"password"}
                  value={password}
                  onChange={handleOnchangePassword}
                ></InputForm>
              </div>

              {data?.status === "ERR" && (
                <span style={{ color: "black" }}>{data?.message}</span>
              )}
              <Loading isLoading={isLoading}>
                <ButtonSolid
                  disabled={
                    !email ||
                    !password ||
                    email.length === 0 ||
                    password.length === 0
                  }
                  onClick={handleSubmitSignin}
                  child={"SIGN IN"}
                  customClass={"w-full mt-2 TradeGodthic-BoldCn text-lg"}
                ></ButtonSolid>
              </Loading>

              <div className="mt-2 text-sm TradeGodthicCn">
                <a
                  className="link text-sm underline text-black px-1 cursor-pointer"
                  onClick={handleSignUp}
                >
                  Create account
                </a>

                <a
                  href="#recover"
                  className="link text-sm underline text-black px-1"
                  data-recover-toggle=""
                >
                  Forgot your password?
                </a>
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
