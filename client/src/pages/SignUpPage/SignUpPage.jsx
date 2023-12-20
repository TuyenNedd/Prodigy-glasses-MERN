import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonSolid from "../../components/ButtonSolid/ButtonSolid.jsx";
import InputForm from "../../components/InputForm/InputForm";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from "../../components/Message/Message";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserService from "../../services/UserService";

const SignUpPage = () => {
  const navigate = useNavigate();

  // const [isShowPassword, setIsShowPassword] = useState(false);
  // const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  const handleOnchangePhone = (value) => {
    setPhone(value);
  };

  const mutation = useMutationHooks((data) => UserService.signupUser(data));

  const { data, isLoading, isSuccess, isError } = mutation;

  useEffect(() => {
    if (isSuccess) {
      message.success();
      handleNavigateSignIn();
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);

  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  const handleNavigateSignIn = () => {
    navigate("/sign-in");
  };

  const handleSignUp = () => {
    mutation.mutate({
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      phone: phone,
    });
  };

  const handleOnchangeName = (value) => {
    setName(value);
  };

  return (
    <section className=" flex flex-col text-left lg:flex-row-reverse h-main items-center">
      <div className="flex flex-col items-center justify-center w-full  lg:p-16 p-4">
        <div className="max-w-md w-full p-4 lg:p-0">
          <form>
            <h1 className="text-[40px] lg:text-[80px] mb-2 mt-0 ITCGara leading-none">
              Create Account
            </h1>

            <div className=" relative field my-1">
              <label className="form--label text-sm">Your Name</label>
              <InputForm
                customClass={"form--input w-full placeholder-[#443828]"}
                placeholder="name"
                type={"text"}
                value={name}
                onChange={handleOnchangeName}
              ></InputForm>
            </div>

            <div className="relative field my-1">
              <label className="form--label text-sm">Email</label>
              <InputForm
                customClass={"form--input w-full placeholder-[#443828]"}
                placeholder="email"
                type={"email"}
                value={email}
                onChange={handleOnchangeEmail}
              ></InputForm>
            </div>

            <div className=" relative field my-1">
              <label className="form--label text-sm">Password</label>
              <InputForm
                autocomplete="current-password"
                customClass={"form--input w-full placeholder-[#443828]"}
                placeholder="password"
                type={"password"}
                value={password}
                onChange={handleOnchangePassword}
              ></InputForm>
            </div>
            <div className=" relative field my-1">
              <label className="form--label text-sm">Confirm Password</label>
              <InputForm
                customClass={"form--input w-full placeholder-[#443828]"}
                placeholder="confirmPassword"
                type={"password"}
                value={confirmPassword}
                onChange={handleOnchangeConfirmPassword}
              ></InputForm>
            </div>
            <div className=" relative field my-1">
              <label className="form--label text-sm">Phone</label>
              <InputForm
                customClass={"form--input w-full placeholder-[#443828]"}
                placeholder="phone"
                type={"tel"}
                value={phone}
                onChange={handleOnchangePhone}
              ></InputForm>
            </div>
            {data?.status === "ERR" && <span>{data?.message}</span>}
            <Loading isLoading={isLoading}>
              <ButtonSolid
                onClick={handleSignUp}
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
  );
};

export default SignUpPage;
