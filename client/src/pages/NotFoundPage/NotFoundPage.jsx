import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="flex w-screen h-screen justify-center items-center text-5xl TradeGodthic-BoldCn  tracking-wider flex-col">
      <div className="flex flex-col justify-center items-center gap-2">
        <span>❌</span>
        <span className="uppercase">Not Found Page</span>
        <a
          onClick={handleHome}
          className="TradeGodthicCn text-base tracking-normal "
        >
          Click to turn back Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
