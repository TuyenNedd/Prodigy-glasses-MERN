import React from "react";
import { useNavigate } from "react-router-dom";
const TypesWrapMainMenu = ({ name, children, customClass }) => {
  const navigate = useNavigate();
  const handleNavigatetype = (type) => {
    navigate(
      `/product/${type
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        ?.replace(/ /g, "")}`,
      { state: type }
    );
  };
  // console.log(name);
  return (
    <>
      <div
        onClick={() => handleNavigatetype(name)}
        className={`block h-full border border-l-0 border-t-0 swiper-slide__flex--border w-full ${customClass}`}
      >
        {children}
      </div>
    </>
  );
};

export default TypesWrapMainMenu;
