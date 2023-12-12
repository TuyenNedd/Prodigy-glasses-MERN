import { useNavigate } from "react-router-dom";
const TypesWrap = ({ name, children, open }) => {
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

  return (
    <>
      <li>
        <a
          onClick={() => {
            handleNavigatetype(name);
            open();
          }}
          className="menu-float__sub-item"
        >
          <span>{name}</span>
          {children}
        </a>
      </li>
    </>
  );
};

export default TypesWrap;
