const ButtonSolid = ({ child, customClass, hidden }) => {
  return (
    <>
      <div className={`${hidden} priBut`}>
        <a
          href="!#"
          className={`${customClass} header-main__link hidden-sm priBut_link py-3 px-6 bg-[#f48029] text-base rounded-md TradeGodthic-BoldCn hover:bg-[#ff9647] transition-all duration-300 tracking-wide inline-flex`}
        >
          {child}
        </a>
      </div>
    </>
  );
};

export default ButtonSolid;
