import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonSolid from "../../components/ButtonSolid/ButtonSolid.jsx";
import * as message from "../../components/Message/Message";
import {
  decreaseAmount,
  increaseAmount,
  removeAllOrderProduct,
  removeOrderProduct,
  selectedOrder,
} from "../../redux/slides/orderSlide";
import { convertPrice } from "../../utils";
import { CustomCheckbox } from "./style.js";
import "./style.scss";

const OrderCart = ({ isVisible, onCartClick }) => {
  const order = useSelector((state) => state.order);

  const [listChecked, setListChecked] = useState([]);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onChange = (e) => {
    if (listChecked.includes(e.target.value)) {
      const newListChecked = listChecked.filter(
        (item) => item !== e.target.value
      );
      setListChecked(newListChecked);
    } else {
      setListChecked([...listChecked, e.target.value]);
    }
  };

  const handleChangeCount = (type, idProduct, limited) => {
    if (type === "increase") {
      if (!limited) {
        dispatch(increaseAmount({ idProduct }));
      }
    } else {
      if (!limited) {
        dispatch(decreaseAmount({ idProduct }));
      }
    }
  };

  const handleDeleteOrder = (idProduct) => {
    dispatch(removeOrderProduct({ idProduct }));
  };

  const handleOnchangeCheckAll = (e) => {
    if (e.target.checked) {
      const newListChecked = [];
      order?.orderItems?.forEach((item) => {
        newListChecked.push(item?.product);
      });
      setListChecked(newListChecked);
    } else {
      setListChecked([]);
    }
  };

  useEffect(() => {
    dispatch(selectedOrder({ listChecked }));
  }, [listChecked]);

  const productPrice = (order) => {
    const mainPrice = order.price - (order.price * order.discount) / 100;
    return convertPrice(mainPrice);
  };

  const priceDiscountMemo = useMemo(() => {
    const result = order?.orderItemsSelected?.reduce((total, cur) => {
      return (
        total + (cur.price - (cur.price * cur.discount) / 100) * cur.amount
      );
    }, 0);

    return result;
  }, [order]);

  const totalPriceMemo = useMemo(() => {
    return Number(priceDiscountMemo);
  }, [priceDiscountMemo]);

  const handleRemoveAllOrder = () => {
    if (listChecked?.length > 1) {
      dispatch(removeAllOrderProduct({ listChecked }));
    }
  };

  const handleAddCard = () => {
    if (!order?.orderItemsSelected?.length) {
      message.warning("Please choose product");
    } else {
      navigate("/payment");
      onCartClick();
    }
  };

  const enableScroll = () => {
    if (document.body.classList.contains("!overflow-y-hidden")) {
      document.body.classList.remove("!overflow-y-hidden");
    } else {
      document.body.classList.add("!overflow-y-hidden");
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-screen duration-500 ease-in-out bg-white modal-right animate transition-alls active z-[96] ${
          isVisible ? "w-full lg:w-1/3 visible show-cart" : "w-0  invisible"
        }`}
        // className={`fixed top-0 right-0 h-screen duration-500 ease-in-out bg-white modal-right animate transition-alls active z-[96] w-full lg:w-1/3 ${
        //   isVisible ? " visible show-cart opacity-100" : "invisible opacity-0"
        // }`}
      >
        <section className="relative flex flex-col h-full bg-white z-[96]">
          <header className="cart--header">
            <article className="cart__header flex items-center justify-between lg:px-8 p-4">
              <h2 className="m-0 text-base TradeGodthic-BoldCn uppercase tracking-wider">
                Your cart
              </h2>

              <div className="top-0 left-0 text-left cart__close">
                <button
                  onClick={() => {
                    onCartClick();
                    enableScroll();
                  }}
                  className="flex items-center justify-center bg-transparent border-none cursor-pointer white"
                >
                  <span className="uppercase text-sm TradeGodthicCn">
                    close
                  </span>
                </button>
              </div>
            </article>
          </header>

          <main className="mainCart relative flex-grow h-full overflow-y-scroll cart-body smooth-scroll overscroll-contain">
            {order?.orderItems?.length === 0 ? (
              <>
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <p className="cart__empty-text text-base TradeGodthicCn tracking-wide">
                      Your cart is empty
                    </p>

                    <ButtonSolid
                      onClick={() => {
                        onCartClick();
                        enableScroll();
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
            ) : (
              <>
                <article className="cart__header flex items-center justify-between lg:px-8 p-4">
                  <span className="m-0 text-base TradeGodthicCn tracking-wider">
                    <CustomCheckbox
                      className="allCheck mr-2"
                      type="checkbox"
                      onChange={handleOnchangeCheckAll}
                      checked={
                        listChecked?.length === order?.orderItems?.length
                      }
                    ></CustomCheckbox>
                    <span>
                      All ({order?.orderItems?.length}
                      {order?.orderItems?.length === 1
                        ? " product"
                        : " products"}
                      )
                    </span>
                  </span>

                  <div
                    onClick={handleRemoveAllOrder}
                    className="top-0 left-0 text-left cart__close"
                  >
                    <button
                      disabled={listChecked?.length > 1 ? "" : "disabled"}
                      className={`flex items-center justify-center bg-transparent border-none cursor-pointer white ${
                        listChecked?.length > 1 ? "" : "cursor-not-allowed"
                      }`}
                    >
                      <span className="uppercase text-sm TradeGodthicCn">
                        remove all
                      </span>
                    </button>
                  </div>
                </article>
                {order?.orderItems?.map((order) => {
                  return (
                    <>
                      <article
                        key={order?.product}
                        className="cart__item lg:px-8 px-4 m-0-75"
                      >
                        <div className="border-b border-gray-200 w-full flex group lg:py-8 py-4">
                          <CustomCheckbox
                            className="childCheck"
                            type="checkbox"
                            onChange={onChange}
                            value={order?.product}
                            checked={listChecked.includes(order?.product)}
                          ></CustomCheckbox>
                          <div className="cart__item-img w-24">
                            <a className="block product-item__image-wrapper aspect-w-1 aspect-h-1">
                              <img
                                src={order?.image}
                                className="w-full h-full absolute object-contain left-0 right-0"
                              />
                            </a>
                          </div>

                          <div className="flex flex-col justify-between w-fit lg:pl-8 pl-4 ">
                            <a className="flex flex-col w-fit no-underline black link mb-2 text-sm lg:text-base TradeGodthicCn">
                              <h2 className="product-item__title mb-1 mt-0 text-base TradeGodthic-BoldCn">
                                {order?.name}
                              </h2>

                              <p className="m-0 text-sm">Type: {order?.type}</p>
                              <p className="m-0 text-sm">
                                Discount: {order?.discount}%
                              </p>
                            </a>

                            <div className="cart-item__bottom-details flex items-center justify-between">
                              <div className="flex items-center mt-auto TradeGodthicCn">
                                <div className="flex items-center field field-plus-minus">
                                  <button
                                    onClick={() =>
                                      handleChangeCount(
                                        "decrease",
                                        order?.product,
                                        order?.amount === 1
                                      )
                                    }
                                  >
                                    <span className="pb-1">–</span>
                                  </button>
                                  <input
                                    // defaultValue={order?.amount}
                                    value={order?.amount}
                                    size="small"
                                    min={1}
                                    max={order?.countInstock}
                                    type="text"
                                  />
                                  <button
                                    onClick={() =>
                                      handleChangeCount(
                                        "increase",
                                        order?.product,
                                        order?.amount === order.countInstock,
                                        order?.amount === 1
                                      )
                                    }
                                  >
                                    <span className="pb-1">+</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="cart-item__end-details flex flex-col items-end justify-between ml-auto w-fit">
                            <button
                              onClick={() => handleDeleteOrder(order?.product)}
                              className="cart-item__remove border-none bg-white text-gray-400 cursor-pointer hover:text-black transition-all ease-linear"
                            >
                              <p className="uppercase text-xs TradeGodthicCn">
                                remove
                              </p>
                            </button>
                            <div className="priceNum text-right">
                              <p className="my-0 text-base font-body font-subheading ITCGara text-red-600">
                                {productPrice(order)}
                              </p>
                              <p className="my-0 text-sm font-body font-subheading ITCGara line-through text-gray-500">
                                {convertPrice(order?.price)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    </>
                  );
                })}
              </>
            )}
          </main>
          {order?.orderItems?.length === 0 ? (
            ""
          ) : (
            <footer className="cart__footer b--light-gray lg:p-8 p-4 pb-8 z-10">
              <article className="flex flex-col justify-start items-center">
                <div className="w-full">
                  <p className="mt-0 mb-2 TradeGodthic-BoldCn text-base uppercase">
                    Summary
                  </p>
                  <p className="text-base TradeGodthicCn">
                    Taxes and shipping calculated at checkout
                  </p>
                </div>

                <div className="flex items-center justify-between w-full">
                  <p className="text-base TradeGodthicCn mt-1">Subtotal</p>
                  <p className="text-base TradeGodthicCn mt-1">
                    {convertPrice(totalPriceMemo)}
                  </p>
                </div>
              </article>

              <ButtonSolid
                onClick={() => {
                  handleAddCard();
                  enableScroll();
                }}
                hidden={"pt-4"}
                customClass={
                  "inline-flex !py-4 !px-5 w-full TradeGodthic-BoldCn text-lg"
                }
                child={"CHECKOUT"}
              ></ButtonSolid>
            </footer>
          )}
        </section>
        <div
          onClick={() => {
            enableScroll();
            onCartClick();
          }}
          className="modal-overlay"
        ></div>
      </div>
    </>
  );
};

export default OrderCart;
