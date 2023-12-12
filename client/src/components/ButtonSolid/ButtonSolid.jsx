const ButtonSolid = ({ child, customClass, hidden, ...rests }) => {
  return (
    <>
      <div className={`${hidden} priBut`} {...rests}>
        <a
          className={` header-main__link priBut_link py-3 px-6 bg-[var(--primaryColor)] text-base rounded-md TradeGodthic-BoldCn hover:bg-[#ff9647] transition-all duration-300 tracking-wide inline-flex justify-center border-solid border-[#f48029] border-[1px] ${customClass}`}
        >
          {child}
        </a>
      </div>
    </>
  );
};

export default ButtonSolid;
