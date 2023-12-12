const ButtonOutline = ({ child, customClass, hidden, ...rests }) => {
  return (
    <>
      <div className={`${hidden} priBut`} {...rests}>
        <a
          className={`header-main__link priBut_link py-3 px-6 border-solid border-[#f48029] border-[1px] text-base rounded-md TradeGodthic-BoldCn hover:bg-[#ff9647] transition-all duration-300 tracking-wide inline-flex justify-center ${customClass}`}
        >
          {child}
        </a>
      </div>
    </>
  );
};

export default ButtonOutline;
