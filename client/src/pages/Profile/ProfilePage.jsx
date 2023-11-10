import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputForm from "../../components/InputForm/InputForm";
import { WrapperLabel, WrapperUploadFile } from "./style";
import { Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import * as UserService from "../../services/UserSevice.js";
import { useMutationHooks } from "./../../hooks/useMutationHook";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slides/useSlide.jsx";
import { getBase64 } from "../../utils.js";


const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch("");
  const mutation = useMutationHooks(
    (data) =>{
    const {id,access_token,...rests} =data ;
    UserService.updateUser(id, rests,access_token);
}
  );
    const { data, isSuccess, isError, isLoading} = mutation;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    setEmail(user?.email);
    setAddress(user?.address);
    setName(user?.name);
    setPhone(user?.phone);
    setAvatar(user?.avatar);
  }, [user]);
  useEffect(()=>{
    if(isSuccess){
      
      
      handlGetDetailsUser (user?.id, user?.access_token);
 }else if(isError){
      message.error("cập nhật thất bại");
    }
  },[isSuccess]);

  const handlGetDetailsUser = async(id,token)=>{
    const res =await UserService.getDetailsUser(id,token);
    dispatch(updateUser({...res?.data,access_token :token}));
    
    console.log(res);

  };
  const handleOnchangeAvatar = async({fileList})=>{
    const file = fileList[0];
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj );
        }
        setAvatar(file.preview);
  };
  const handleOnchangeAddress = (value) => {
    setAddress(value);
  };

  const handleOnchangePhone = (value) => {
    setPhone(value);
  };
  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangeName = (value) => {
    setName(value);
  };
 
  const handleUdate = () => {
    mutation.mutate({id: user?.id,name,email,phone,address,avatar,access_token:user?.access_token});
   
   
  };
  return (
    <>
      <div className="account_container p-4 lg:p-8  lg:mx-14">
        
        <div className="contai_header flex flex-col lg:p-8	 lg:flex lg:flex-row lg:items-end	">
          <h1 className="text-[40px] ITCGara duration-700 lg:duration-700 lg:text-[80px] block">
            My Account
          </h1>
          <div className=" text-base TradeGodthicCn lg:ml-auto mb-2 ">
            Welcom,{user?.name}
          </div>
        </div>
        <hr />
        <div className=" container_info p-4 mt-2 flex flex-col items-center lg:flex lg:flex-col lg:justify-center lg:items-center lg:p-5 lg:mt-3 lg:w-11/12 ">
          <div className="profile_info flex lg:py-2 duration-700 lg:duration-700 ">
            <div className=" p-2 ITCGara text-lg lg:text-2xl lg:w-24  ">
              {" "}
              name:
            </div>
            <div className="input_type h-9 px-1">
              <InputForm
                className="border-0  border-b-[0.5px] h-8 lg:w-[30rem]   px-0 pb-0"
                value={name}
                type={"text"}
                onChange={handleOnchangeName}
              ></InputForm>
            </div>
            <button
              className=" TradeGodthicCn font-bold lg:px-3"
              onClick={handleUdate}
            >
              EDIT
            </button>
          </div>
          <div className="profile_info flex  lg:py-2 duration-700 lg:duration-700">
            <div className=" p-2 ITCGara text-lg  lg:text-2xl lg:w-24  ">
              {" "}
              Email:
            </div>
            <div className="input_type h-9 px-1">
              <InputForm
                className="border-0  border-b-[0.5px] h-8 lg:w-[30rem]   px-0 pb-0"
                value={email}
                type={"text"}
                onChange={handleOnchangeEmail}
              ></InputForm>
            </div>
            <button
              className=" TradeGodthicCn font-bold lg:px-3"
              onClick={handleUdate}
            >
              EDIT
            </button>
          </div>
          <div className="profile_info flex lg:py-2 duration-700 lg:duration-700">
            <div className=" p-2 ITCGara text-lg lg:text-2xl lg:w-24  ">
              {" "}
              Phone:
            </div>
            <div className="input_type h-9 px-1">
              <InputForm
                className="border-0  border-b-[0.5px] h-8 lg:w-[30rem]  px-0 pb-0"
                value={phone}
                type={"text"}
                onChange={handleOnchangePhone}
              ></InputForm>
            </div>
            <button
              className=" TradeGodthicCn font-bold lg:px-3"
              onClick={handleUdate}
            >
              EDIT
            </button>
          </div>
          {/* <div className="profile_info flex lg:py-2 duration-700 lg:duration-700">
            <div className=" p-2 ITCGara text-lg lg:text-2xl lg:w-24  "> Avatar:</div>
            <div className="input_type h-9 px-1">
              <InputForm
                className="border-0  border-b-[0.5px] h-8 w-[100px] lg:w-full  px-0 pb-0"
                value={avatar}
                type={"file"}
                onChange={handleOnchangeAvatar}
              ></InputForm>
            </div> */}
          <WrapperLabel htmlFor="avatar">Avatar</WrapperLabel>
          
          <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
            <Button icon={<UploadOutlined />}>Select File</Button>
          </WrapperUploadFile>
          {avatar && (
            <img
              src={avatar}
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              alt="avatar"
            />
          )}
          <button
            className=" TradeGodthicCn font-bold lg:px-3"
            onClick={handleUdate}
          >
            EDIT
          </button>
          {/* </div>  */}
          <div className="profile_info flex lg:py-2 duration-700 lg:duration-700 ">
            <div className=" p-2 ITCGara text-lg  lg:text-2xl lg:w-24 ">
              {" "}
              Address:
            </div>
            <div className="input_type h-9 px-1">
              <InputForm
                className="border-0  border-b-[0.5px] h-8 lg:w-[30rem]   px-0 pb-0"
                value={address}
                type={"text"}
                onChange={handleOnchangeAddress}
              ></InputForm>
            </div>
            <button
              className=" TradeGodthicCn font-bold lg:px-3"
              onClick={handleUdate}
            >
              EDIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
