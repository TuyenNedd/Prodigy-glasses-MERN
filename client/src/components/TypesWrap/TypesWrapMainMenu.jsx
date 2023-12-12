import React from "react";
import { useNavigate } from "react-router-dom";
const TypesWrapMainMenu = ({ name, children }) => {
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
      <a
        onClick={() => handleNavigatetype(name)}
        className="block h-full relative group border border-l-0 border-t-0 swiper-slide__flex--border w-full"
      >
        {children}
      </a>
    </>
  );
};

export default TypesWrapMainMenu;
