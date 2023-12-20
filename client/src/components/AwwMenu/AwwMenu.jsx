import TypesWrap from "../TypesWrap/TypesWrap.jsx";
import "./menu.scss";
import { useEffect, useState } from "react";
import * as ProductService from "../../services/ProductService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/slides/userSlide";
import { routes } from "../../routes/index.js";
import { useLocation } from "react-router-dom";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const AwwMenu = ({ onCartClick }) => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [isVisible, setIsVisible] = useState(false);
  const [isMarginMenu, setIsMarginMenu] = useState(false);

  const [typeProducts, setTypeProducts] = useState([]);
  // const searchDebounce = useDebounce(searchProduct, 500);
  const order = useSelector((state) => state.order);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [currentMenuName, setCurrentMenuName] = useState("");

  const handleLogout = async () => {
    // setLoading(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    // setLoading(false);
  };

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct();
    if (res?.status === "OK") {
      setTypeProducts(res?.data);
    }
  };

  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    const currentPath = window.location.pathname;

    // Tìm route tương ứng với path hiện tại
    const currentRoute = routes.find((route) => route.path === currentPath);

    if (currentPath.includes("/product-details/")) {
      setCurrentMenuName("Details");
    } else if (path.includes("product")) {
      setCurrentMenuName("Product");
    } else if (path.includes("details-order")) {
      setCurrentMenuName("Details");
    } else {
      // Tiếp tục kiểm tra trong danh sách routes và thiết lập menuName dựa trên path
      const currentRoute = routes.find((route) => route.path === currentPath);
      if (currentRoute) {
        setCurrentMenuName(currentRoute.menuName);
      } else {
        setCurrentMenuName("Error");
      }
    }

    const jsMenuFloat = document.querySelector(".js-menufloat-show");

    const menuFloatWrap = document.querySelector(".menu-float__wrapper"); //is-open is-open-main
    const e = document.documentElement;
    let t = window.innerHeight - 95;
    e.style.setProperty("--mft-height", `${t}px`);

    var prevScrollpos = window.scrollY;
    var scrollingDown = false; // Biến để theo dõi hướng cuộn

    window.onscroll = function () {
      var currentScrollPos = window.scrollY;

      if (prevScrollpos > currentScrollPos) {
        scrollingDown = false; // Ngừng cuộn lên
      } else {
        scrollingDown = true; // Cuộn xuống
      }

      if (scrollingDown && currentScrollPos >= 150) {
        jsMenuFloat.style.transform = "translateY(500px)";
      } else {
        jsMenuFloat.style.transform = "translateY(0%)";
      }

      prevScrollpos = currentScrollPos;
    };

    menuFloatWrap.addEventListener("mouseleave", function () {
      setIsVisible(false);
      setTimeout(() => {
        setIsMarginMenu(false);
      }, 300);
      enableScroll();
    });

    fetchAllTypeProduct();
  }, [path]);

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
    } else if (type === "sign-in") {
      navigate("/sign-in");
    } else {
      handleLogout();
    }
    setIsOpenPopup(false);
  };

  const openMenu = () => {
    setIsVisible(!isVisible);
  };

  const marginMenu = () => {
    setIsMarginMenu(!isMarginMenu);
  };

  const enableScroll = () => {
    if (document.body.style.overflowY === "hidden") {
      document.body.style.overflowY = "auto";
    }
  };

  const disableScroll = () => {
    if (document.body.style.overflowY === "hidden") {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
    console.log("dis");
  };
  const CartDisableScroll = () => {
    document.body.classList.add("!overflow-y-hidden");
  };

  return (
    <>
      <div className="menu-float js-menufloat-show is-visible">
        <div className="inner">
          <div className="menu-float__inner">
            <div
              className={`menu-float__wrapper ${
                isVisible ? "is-open is-open-main" : ""
              }`}
              style={{ minWidth: "421px" }}
            >
              <div
                className={`menu-float__top ${isMarginMenu ? "mb-[6px]" : ""}`}
              >
                <div
                  className={`menu-float__menu menu-main ${
                    isVisible ? "is-active" : ""
                  }`}
                  id="menu-main"
                >
                  <div
                    className={`menu-float__menu-content ${
                      isVisible ? "is-show" : ""
                    }`}
                  >
                    <div className="menu-float__menu--main">
                      <div className="menu-float__menu-col ">
                        <div className="menu-float__menu-section TradeGodthic-BoldCm text-sm uppercase tracking-wider">
                          Glasses
                        </div>
                        <ul className="menu-float__menu-nav">
                          {/* {typeProducts.map((item) => {
                            return ( */}
                          <TypesWrap
                            open={openMenu}
                            name={typeProducts[4]}
                            key={typeProducts[4]}
                          />
                          <TypesWrap
                            open={openMenu}
                            name={typeProducts[3]}
                            key={typeProducts[3]}
                          />
                          <TypesWrap
                            open={openMenu}
                            name={typeProducts[1]}
                            key={typeProducts[1]}
                          />
                          {/* );
                          })} */}
                        </ul>
                      </div>
                      <div className="menu-float__menu-col ">
                        <div className="menu-float__menu-row ">
                          <div className="menu-float__menu-section TradeGodthic-BoldCm text-sm uppercase tracking-wider">
                            <span>Sunglasses</span>
                          </div>
                          <ul className="menu-float__menu-nav">
                            {/* {typeProducts.map((item) => {
                              return <TypesWrap name={item} key={item} />;
                            })} */}
                            <TypesWrap
                              open={openMenu}
                              name={typeProducts[7]}
                              key={typeProducts[7]}
                            />
                            <TypesWrap
                              open={openMenu}
                              name={typeProducts[6]}
                              key={typeProducts[6]}
                            />
                            <TypesWrap
                              open={openMenu}
                              name={typeProducts[5]}
                              key={typeProducts[5]}
                            />
                            <TypesWrap
                              open={openMenu}
                              name={typeProducts[2]}
                              key={typeProducts[2]}
                            />
                            <TypesWrap
                              open={openMenu}
                              name={typeProducts[0]}
                              key={typeProducts[0]}
                            />
                          </ul>
                        </div>
                      </div>
                      <div className="menu-float__menu-col ">
                        <div className="menu-float__menu-row ">
                          <div className="menu-float__menu-section TradeGodthic-BoldCm text-sm uppercase tracking-wider">
                            Feature
                          </div>
                          <ul className="menu-float__menu-nav">
                            <li>
                              <a className="menu-float__sub-item">
                                <span>Best Sellers</span>
                              </a>
                            </li>
                            <li>
                              <a className="menu-float__sub-item">
                                <span>New Arrivals</span>
                              </a>
                            </li>
                            <li>
                              <a className="menu-float__sub-item">
                                <span>Accessories</span>
                              </a>
                            </li>
                            <li>
                              <a className="menu-float__sub-item">
                                <span>Narrow Styles</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-float__bottom TradeGodthic-BoldCm uppercase">
                <div className="menu-float__layout menu-float__layout--primary">
                  <div className="menu-float__content">
                    <a
                      onClick={handleHome}
                      className="menu-float__logo w-[25px]"
                    >
                      <img
                        width={25}
                        src="/images/logo/pdglogo-mobile.svg"
                        alt=""
                      />
                    </a>
                    <div className="menu-float__breadcrumb">
                      <strong className="menu-float__title">
                        {currentMenuName}
                      </strong>
                    </div>
                    <div
                      onClick={() => {
                        openMenu();
                        marginMenu();
                        disableScroll();
                      }}
                      className="menu-float__hamburger js-menufloat-hamburger"
                    >
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>

                <div className="menu-float__layout menu-float__layout--secondary">
                  <div className="menu-float__content">
                    <div className="menu-float__progress">
                      <div className="menu-float__bar js-menu-progress"></div>
                    </div>
                    {/* <strong className="menu-float__title-section">Home</strong> */}
                    <ul className="menu-float__nav">
                      <li>
                        <a
                          onClick={() => {
                            openMenu();
                            marginMenu();
                            disableScroll();
                          }}
                          className="menu-float__item js-menu-anchor type-js"
                        >
                          <span>Glasses</span>
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            openMenu();
                            marginMenu();
                            disableScroll();
                          }}
                          className="menu-float__item js-menu-anchor type-js"
                        >
                          <span>Sunglasses</span>
                        </a>
                      </li>
                      {user?.access_token ? (
                        <li>
                          <a
                            className="menu-float__item js-menu-anchor "
                            onClick={() => handleClickNavigate("profile")}
                          >
                            <span>Account</span>
                          </a>
                        </li>
                      ) : (
                        <>
                          <li>
                            <a
                              className="menu-float__item js-menu-anchor "
                              onClick={() => handleClickNavigate("sign-in")}
                            >
                              <span>Account</span>
                            </a>
                          </li>
                        </>
                      )}
                      <li>
                        <a
                          className="menu-float__item js-menu-anchor order-cart"
                          onClick={() => {
                            onCartClick();
                            CartDisableScroll();
                          }}
                        >
                          <span>Cart</span>
                          <div
                            className={`number-cart flex items-center justify-center text-white text-xs ${
                              order?.orderItems?.length === 0 ? "hidden" : ""
                            }`}
                          >
                            {order?.orderItems?.length}
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-float__layout menu-float__layout--secondary menu-float__layout--secondary--mobile">
                  <div className="menu-float__content justify-center p-0">
                    <div className="menu-float__progress">
                      <div className="menu-float__bar js-menu-progress"></div>
                    </div>
                    <ul className="menu-float__nav">
                      {user?.access_token ? (
                        <li>
                          <a
                            className="menu-float__item js-menu-anchor px-1 m-0"
                            onClick={() => handleClickNavigate("profile")}
                          >
                            <span>
                              <UserOutlined className="text-xl"></UserOutlined>
                            </span>
                          </a>
                        </li>
                      ) : (
                        <>
                          <li>
                            <a
                              className="menu-float__item js-menu-anchor px-1 "
                              onClick={() => handleClickNavigate("sign-in")}
                            >
                              <span>
                                <UserOutlined className="text-xl"></UserOutlined>
                              </span>
                            </a>
                          </li>
                        </>
                      )}
                      <li>
                        <a
                          className="menu-float__item js-menu-anchor order-cart px-1 "
                          onClick={() => {
                            onCartClick();
                            CartDisableScroll();
                          }}
                        >
                          <span>
                            <ShoppingCartOutlined className="text-xl"></ShoppingCartOutlined>
                          </span>
                          <div
                            className={`number-cart flex items-center justify-center text-white text-xs ${
                              order?.orderItems?.length === 0 ? "hidden" : ""
                            }`}
                          >
                            {order?.orderItems?.length}
                          </div>
                        </a>
                      </li>
                    </ul>
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

export default AwwMenu;
