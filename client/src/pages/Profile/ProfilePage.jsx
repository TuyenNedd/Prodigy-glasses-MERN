import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputForm from "../../components/InputForm/InputForm";
import { WrapperUploadFile } from "./style";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as message from "../../components/Message/Message";
import { updateUser } from "../../redux/slides/userSlide";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getBase64 } from "../../utils";
import "./style.scss";
import { PlusOutlined, CameraFilled } from "@ant-design/icons";
import Loading from "../../components/LoadingComponent/Loading.jsx";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isEditMode, setIsEditMode] = useState(false); // New state to track edit mode
  const mutation = useMutationHooks((data) => {
    const { id, access_token, ...rests } = data;
    UserService.updateUser(id, rests, access_token);
  });

  const dispatch = useDispatch();
  const { data, isLoading, isSuccess, isError } = mutation;

  useEffect(() => {
    setEmail(user?.email);
    setName(user?.name);
    setPhone(user?.phone);
    setAddress(user?.address);
    setAvatar(user?.avatar);
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      message.success();
      handleGetDetailsUser(user?.id, user?.access_token);
    } else if (isError) {
      message.error();
    }
  }, [isSuccess, isError]);

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangeName = (value) => {
    setName(value);
  };
  const handleOnchangePhone = (value) => {
    setPhone(value);
  };
  const handleOnchangeAddress = (value) => {
    setAddress(value);
  };

  const handleOnchangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setAvatar(file.preview);
  };

  const changeDetails = () => {
    const changeAction = document.querySelectorAll(".change-action");

    changeAction.forEach((form) => {
      if (form.classList.contains("acc-form-disable")) {
        form.classList.remove("acc-form-disable");
      } else {
        form.classList.add("acc-form-disable");
      }
    });
  };

  const toggleEditMode = () => {
    setIsEditMode((prevMode) => !prevMode);
  };

  const handleUpdate = () => {
    mutation.mutate({
      id: user?.id,
      email,
      name,
      phone,
      address,
      avatar,
      access_token: user?.access_token,
    });
    toggleEditMode();
    changeDetails();
  };
  return (
    <>
      <Loading isLoading={isLoading}>
        <div className="account_container p-4 lg:p-8 bg-texture">
          <div className="contain_header flex flex-col p-2 lg:p-6 lg:flex lg:flex-row lg:items-end	border-b-[0.8px] border-[#61584e80]">
            <h1 className="text-3xl ITCGara duration-700 lg:duration-700 lg:text-5xl block">
              My Account
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="user-avatar p-4 lg:p-8 border-none lg:border-r-[0.8px] border-[#61584e80] flex justify-center lg:block">
              <div className="relative inline-flex">
                {/* {avatar && ( */}
                <div className="w-40 overflow-hidden rounded-full aspect-square border-4 border-white">
                  <img src={avatar || "/images/none-user.png"} alt="avatar" />
                </div>
                {/* )} */}

                <div className="absolute bottom-[10%] right-0 change-action acc-form-disable">
                  <Upload onChange={handleOnchangeAvatar} maxCount={1}>
                    <div className="bg-[#61584e] inline-flex p-2 rounded-full aspect-square justify-center border-2 border-white">
                      <div className="flex text-base text-white">
                        <CameraFilled />
                      </div>
                    </div>
                  </Upload>
                </div>
              </div>
            </div>
            <div className="form-user p-4 lg:p-8 w-full">
              <h2 className="mt-0 mb-5 text-base lg:text-2xl TradeGodthicCn px-2">
                Account details
              </h2>

              <div className="flex justify-between items-start gap-3">
                <div className="flex flex-col gap-2 w-full lg:w-2/5 TradeGodthicCn text-base">
                  <div className="input_type">
                    <InputForm
                      className="acc-form change-action acc-form-disable border rounded px-2 focus:border focus:border-black dark:focus:ring-black tracking-wide"
                      value={name}
                      type={"text"}
                      onChange={handleOnchangeName}
                    ></InputForm>
                  </div>
                  <div className="input_type">
                    <InputForm
                      className="acc-form change-action acc-form-disable border rounded px-2 focus:border focus:border-black dark:focus:ring-black tracking-wide"
                      value={email}
                      type={"text"}
                      onChange={handleOnchangeEmail}
                    ></InputForm>
                  </div>

                  <div className="input_type">
                    <InputForm
                      className="acc-form change-action acc-form-disable border rounded px-2 focus:border focus:border-black dark:focus:ring-black tracking-wide"
                      value={phone}
                      type={"text"}
                      onChange={handleOnchangePhone}
                    ></InputForm>
                  </div>

                  <div className="input_type">
                    <InputForm
                      className="acc-form change-action acc-form-disable border rounded px-2 focus:border focus:border-black dark:focus:ring-black tracking-wide"
                      value={address}
                      type={"text"}
                      onChange={handleOnchangeAddress}
                    ></InputForm>
                  </div>
                </div>
                <Loading isLoading={isLoading}>
                  <div className="flex gap-3 flex-col lg:flex-row">
                    <button
                      className="TradeGodthicCn font-bold tracking-wider text-[16px] border-b-2 border-black pb-2 leading-none hover:text-[var(--primaryColor)] hover:border-b-[var(--primaryColor)] transition-all duration-300"
                      onClick={handleUpdate}
                      style={{ display: isEditMode ? "block" : "none" }} // Show only in edit mode
                    >
                      UPDATE
                    </button>
                    <button
                      className="TradeGodthicCn font-bold tracking-wider text-[16px] border-b-2 border-black pb-2 leading-none hover:text-[var(--primaryColor)] hover:border-b-[var(--primaryColor)] transition-all duration-300"
                      onClick={() => {
                        toggleEditMode();
                        changeDetails();
                      }}
                    >
                      {isEditMode ? "CANCEL" : "EDIT"}
                    </button>
                  </div>
                </Loading>
              </div>
            </div>
          </div>
        </div>
      </Loading>
    </>
  );
};

export default ProfilePage;
