import {
  KeyOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Skeleton } from "@mui/material";
import { Popover } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchProduct } from "../../redux/slides/productSlide";
import { resetUser } from "../../redux/slides/userSlide";
import * as UserService from "../../services/UserService";
import ButtonOutline from "../ButtonOutline/ButtonOutline.jsx";
import ButtonSolid from "../ButtonSolid/ButtonSolid.jsx";
import HeaderSearchResult from "../HeaderSearchResult/HeaderSearchResult.jsx";
import Loading from "../LoadingComponent/Loading.jsx";
import "./style.scss";
const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setUserName(user?.name);
    setUserAvatar(user?.avatar);
    setLoading(false);
    const jsSearchInput = document.querySelector(".js-search-input");
    const headerSearch = document.querySelector(".header-search");
    const overlay = document.querySelector(".header-search__overlay");

    const inputClickOpen = () => {
      headerSearch.classList.add("show-results");
      headerSearch.classList.add("z-[95]");
      disableScroll();
    };
    const inputClickClose = () => {
      headerSearch.classList.remove("show-results");
      headerSearch.classList.remove("z-[95]");
      enableScroll();
    };
    jsSearchInput.addEventListener("click", inputClickOpen);

    overlay.addEventListener("click", inputClickClose);

    return () => {
      jsSearchInput.removeEventListener("click", inputClickOpen);
      overlay.removeEventListener("click", inputClickClose);
      // clearTimeout(timer);
    };
  }, [user?.name, user?.avatar]);

  const content = (
    <div className="rounded-lg">
      <div
        className="py-2 pop-child text-base tracking-wide"
        onClick={() => handleClickNavigate("profile")}
      >
        Account <UserOutlined />
      </div>
      {user?.isAdmin && (
        <div
          className="py-2 pop-child text-base tracking-wide"
          onClick={() => handleClickNavigate("admin")}
        >
          Admin <KeyOutlined />
        </div>
      )}
      <div
        className="py-2 pop-child text-base tracking-wide"
        onClick={() => handleClickNavigate("my-order")}
      >
        My order <ShoppingCartOutlined />
      </div>
      <div
        className="py-2 pop-child text-base tracking-wide"
        onClick={() => handleClickNavigate()}
      >
        Log out <LogoutOutlined />
      </div>
    </div>
  );

  const handleClickNavigate = (type) => {
    if (type === "profile") {
      navigate("/profile-user");
    } else if (type === "admin") {
      navigate("/system/admin");
    } else if (type === "my-order") {
      navigate("/my-order", {
        state: {
          id: user?.id,
          token: user?.access_token,
        },
      });
    } else {
      handleLogout();
      navigate("/");
    }
    setIsOpenPopup(false);
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
    dispatch(searchProduct(e.target.value));
  };

  const enableScroll = () => {
    document.body.style.overflowY = "auto";
  };

  const disableScroll = () => {
    document.body.style.overflowY = "hidden";
  };

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/sign-in");
  };
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  const handleLogout = async () => {
    setLoading(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    setLoading(false);
    localStorage.clear();
    // window.location.reload();
  };

  return (
    <>
      <header id="header">
        <div className="inner">
          <div className="header-main px-5 lg:px-9">
            <div className="header-main__left flex flex-none lg:flex-1 mr-3">
              <a href="/" className="header-main__logo">
                <img
                  src="/images/logo/pdglogo.svg"
                  alt=""
                  className="logoLarge w-20 h-6 lg:w-32 lg:h-10"
                />
                <img
                  src="/images/logo/pdglogo-mobile.svg"
                  alt=""
                  className="logoSmall"
                  width={30}
                />
              </a>
            </div>
            <div className="header-search">
              <div className="header-search__overlay"></div>
              <div className="search-form">
                <div className="search-form__field">
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="search-form__input js-search-input TradeGodthicCn placeholder-[#443828] lg:text-xl text-lg text-[#443828]"
                    style={{ width: "7.7px" }}
                    onChange={onSearch}
                  />
                  <button
                    type="submit"
                    className="search-form__button"
                    aria-label="Search"
                  >
                    <img
                      src="/images/search-outline.svg"
                      className="w-fit h-7"
                    />
                  </button>
                </div>
              </div>
              <HeaderSearchResult></HeaderSearchResult>
            </div>
            <div className="header-main__right flex-none lg:flex-1">
              <div className="header-main__user flex-1 justify-end">
                {user?.access_token ? (
                  <>
                    {loading ? (
                      <>
                        <Loading></Loading>
                      </>
                    ) : (
                      <>
                        <Popover
                          showArrow={false}
                          content={content}
                          trigger="hover"
                          className="rounded-lg"
                          placement="bottomRight"
                        >
                          <div
                            className="user_Main flex items-center gap-3 TradeGodthic-BoldCn text-sm lg:text-base"
                            style={{
                              cursor: "pointer",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            <div className="gap-0 tracking-wide hidden lg:block">
                              Hi,
                              <span className="uppercase ">
                                {userName?.length ? userName : user?.email}
                              </span>
                            </div>
                            {loading ? (
                              <>
                                <Skeleton
                                  animation="wave"
                                  variant="rectangular"
                                  height={80}
                                  sx={{ bgcolor: "grey.400" }}
                                ></Skeleton>
                                <Loading></Loading>
                              </>
                            ) : (
                              <div
                                style={{
                                  height: "30px",
                                  width: "30px",
                                }}
                                className="ava"
                              >
                                {userAvatar ? (
                                  <img
                                    className="object-cover"
                                    src={userAvatar}
                                    alt="avatar"
                                    style={{
                                      height: "30px",
                                      width: "30px",
                                      borderRadius: "50%",
                                      objectFit: "cover",
                                    }}
                                  />
                                ) : (
                                  <UserOutlined style={{ fontSize: "30px" }} />
                                )}
                              </div>
                            )}
                          </div>
                        </Popover>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <ButtonSolid
                      onClick={handleLogin}
                      child={"Login"}
                      hidden={"hidden-sm"}
                    ></ButtonSolid>
                    <ButtonOutline
                      hidden={"hidden-sm"}
                      child={"Sign up"}
                      onClick={handleSignUp}
                    ></ButtonOutline>
                  </>
                )}

                {/* <span className="header-main__ico">
                  <img src="/images/user-check.svg" alt="" width={23} />
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
