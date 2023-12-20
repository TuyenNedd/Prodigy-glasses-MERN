import { useNavigate } from "react-router-dom";

const WrapProductRoute = ({ idenPro, children, customClass }) => {
  const navigate = useNavigate();
  const handleNavigatetype = (iden) => {
    navigate(
      `/product-details/${iden
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        ?.replace(/ /g, "")}`,
      { state: iden }
    );
  };
  return (
    <>
      <span
        onClick={() => handleNavigatetype(idenPro)}
        className={`h-fit w-fit ${customClass}`}
      >
        {children}
      </span>
    </>
  );
};

export default WrapProductRoute;
