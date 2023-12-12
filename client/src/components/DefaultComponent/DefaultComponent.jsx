import Header from "../Header/Header.jsx";
import Marquee from "../Marquee/Marquee.jsx";
import AwwMenu from "../AwwMenu/AwwMenu.jsx";
import Footer from "../../layout/Footer/Footer.jsx";
import OrderCart from "../OrderCart/OrderCart.jsx";
import { useState } from "react";
import ScrollBarPercent from "../ScrollBarPercent/ScrollBarPercent.jsx";
import ScrollToTop from "../ScrollToTop/ScrollToTop.jsx";
const DefaultComponent = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <ScrollBarPercent></ScrollBarPercent>
      <Marquee></Marquee>
      <Header></Header>
      <AwwMenu onCartClick={handleToggleCart} />
      <ScrollToTop></ScrollToTop>
      <OrderCart onCartClick={handleToggleCart} isVisible={isCartOpen} />
      {children}
      <Footer></Footer>
    </div>
  );
};

export default DefaultComponent;
