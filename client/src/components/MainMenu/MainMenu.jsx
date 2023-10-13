const MainMenu = ({ children }) => {
  const child = [
    {
      name: "glass",
    },
    {
      name: "sunglass",
    },
    {
      name: "proglass",
    },
  ];
  return (
    <ul>
      {children.map((child, index) => (
        <li key={index}>
          <a className="menu-float__item js-menu-anchor text-red-700" href="#!">
            {child.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default MainMenu;
