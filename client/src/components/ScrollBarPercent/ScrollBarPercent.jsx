import { useEffect } from "react";
import "./style.scss";

const ScrollBarPercent = () => {
  useEffect(() => {
    function percentPage() {
      const percent = document.querySelector(".progress-bar .percent");
      const scrollY = window.scrollY,
        bodyHeight = document.documentElement.scrollHeight,
        screenHeight = document.documentElement.clientHeight,
        progressBar = `${(scrollY / (bodyHeight - screenHeight)) * 100}`;

      // Style Percent Width
      percent.style.width = `${progressBar < 100 ? progressBar : 100}%`;
    }

    percentPage();
    window.addEventListener("scroll", percentPage);

    // Cleanup listener on unmount or if dependencies change
    return () => {
      window.removeEventListener("scroll", percentPage);
    };
  }, []); // Empty dependency array means useEffect runs once on mount

  return (
    <>
      <div className="progress-bar">
        <div className="percent"></div>
      </div>
    </>
  );
};

export default ScrollBarPercent;
