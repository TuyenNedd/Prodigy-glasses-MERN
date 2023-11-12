/* eslint-disable react/no-unescaped-entities */
import "./signup.scss";
import AwwMenu from "../../components/AwwMenu/AwwMenu.jsx";
import ButtonSolid from "../../components/ButtonSolid/ButtonSolid.jsx";
import { useState } from "react";
import InputForm from "../../components/InputForm/InputForm";
// import Header from "../../components/Header/Header.jsx";
import { useMutationHooks } from "./../../hooks/useMutationHook";
import * as UserService from "../../services/UserSevice.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import  *as message from "../../components/Message/Message";
import Loading from "../../components/LoadingComponent/Loading.jsx";


const SignUpPage = () => {
  const mutation = useMutationHooks(data => UserService.signupUser(data));

  
 
const {data ,isError, isSuccess,isLoading}=mutation;
const navigate = useNavigate();


useEffect(()=>{
  if(isSuccess ){
    message.success();
    setTimeout(()=>handleNavigate,2000);
  }else if (isError) {
    message.error();
  }
 
},[isSuccess]);
const handleNavigate = () => {
  if (data) {
    navigate("/sign-in");
  } else {
    console.log("err");
  }
};


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const handleOnchangeName = (value) => {
    setName(value);
  };
  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangePasswordl = (value) => {
    setPassword(value);
  };
  const handleOnchangeConfirmPassword = (value) => {
    setconfirmPassword(value);
  };
  const handleOnchangePhone = (value) => {
    setPhone(value);
  };

  const handleSubmitSignUp = () => {
    mutation.mutate({
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      phone: phone,
    });
  };

  // const navigator = useNavigate();
  // const handleOncick=()=>{
  //   navigator("/sign-in");
  // };
  return (
    <>
      {/* <Header></Header> */}
      <AwwMenu></AwwMenu>
      <section className=" flex flex-col text-left lg:flex-row-reverse h-main items-center">
        <div className="flex flex-col items-center justify-center w-full  lg:p-16 p-4">
          <div className="max-w-md w-full p-4 lg:p-0">
            <form
             
            >
              <input type="hidden" name="form_type" value="customer_login" />
              <input type="hidden" name="utf8" value="✓" />
              <h1 className="text-[40px] lg:text-[80px] mb-2 mt-0 ITCGara leading-none">
                Create Account
              </h1>

              <div className=" relative field my-1">
                <label  className="form--label text-sm">
                  Your Name
                </label>
                <InputForm
                  customClass={"form--input w-full placeholder-[#443828]"}
                  placeholder="name"
                  type={"text"}
                  value={name}
                  onChange={handleOnchangeName}
                ></InputForm>
              </div>

              <div className="relative field my-1">
                <label  className="form--label text-sm">
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

              <div className=" relative field my-1">
                <label
                  
                  className="form--label text-sm"
                >
                  Password
                </label>
                <InputForm
                  customClass={"form--input w-full placeholder-[#443828]"}
                  placeholder="password"
                  type={"password"}
                  value={password}
                  onChange={handleOnchangePasswordl}
                ></InputForm>
              </div>
              <div className=" relative field my-1">
                <label
                  className="form--label text-sm"
                >
                  Confirm Password
                </label>
                <InputForm
                  customClass={"form--input w-full placeholder-[#443828]"}
                  placeholder="confirmPassword"
                  type={"password"}
                  value={confirmPassword}
                  onChange={handleOnchangeConfirmPassword}
                ></InputForm>
              </div>
              <div className=" relative field my-1">
                <label
                  
                  className="form--label text-sm"
                >
                  Phone
                </label>
                <InputForm
                  customClass={"form--input w-full placeholder-[#443828]"}
                  placeholder="phone"
                  type={"tel"}
                  value={phone}
                  onChange={handleOnchangePhone}
                ></InputForm>
              </div>
              {data?.status ==="ERR" && <span>{data?.message}</span>}
              <Loading isLoading={isLoading}>
              <ButtonSolid
                onClick={handleSubmitSignUp}
                disabled={
                  !name ||
                  !email ||
                  !password ||
                  !confirmPassword ||
                  !phone ||
                  email.length === 0 ||
                  password.length === 0 ||
                  name.length === 0 ||
                  confirmPassword.length === 0 ||
                  phone.length === 0
                }
                child={"CREATE"}
                customClass={"w-full mt-2 TradeGodthic-BoldCn text-lg"}
              ></ButtonSolid>
              </Loading>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
