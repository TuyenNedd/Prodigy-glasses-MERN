const ButtonOutline = ({ child, ...rests }) => {
  return (
    <>
      <div className="priBut hidden-sm " {...rests}>
        <a className="header-main__link hidden-sm priBut_link py-3 px-6 border-solid border-[#f48029] border-[1px] text-base rounded-md TradeGodthic-BoldCn hover:bg-[#ff9647] transition-all duration-300 tracking-wide">
          {child}
        </a>
      </div>
    </>
  );
};

export default ButtonOutline;
