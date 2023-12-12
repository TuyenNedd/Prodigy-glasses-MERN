import { useEffect, useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./style.scss";

const ScrollToTop = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  useEffect(() => {
    // const topScroll = document.querySelector(".topScroll");

    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight / 2;
      // const isScrolled = window.scrollY > document.body.scrollHeight - window.innerHeight - 200;

      setShowScrollToTop(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* {showScrollToTop && ( */}
      <a
        href="#"
        className={`topScroll flex items-center justify-center w-10 h-10 bg-[var(--primaryColor)] fixed bottom-6 md:bottom-[45px] left-[10%] z-[90] rounded-lg mix-blend-difference ${
          showScrollToTop ? "active" : ""
        }`}
      >
        <ArrowUpOutlined />
      </a>
      {/* )} */}
    </>
  );
};

export default ScrollToTop;
