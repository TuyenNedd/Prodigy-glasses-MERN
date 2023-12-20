const ButtonSolid = ({ child, customClass, hidden, ...rests }) => {
  return (
    <>
      <div className={`${hidden} priBut`}>
        <a
          className={` header-main__link text-black priBut_link py-3 px-6 bg-[var(--primaryColor)] text-base rounded-md TradeGodthic-BoldCn hover:bg-[#ff9647] transition-all duration-300 tracking-wide inline-flex justify-center border-solid border-priCo border-[1px] ${customClass}`}
          {...rests}
        >
          {child}
        </a>
      </div>
    </>
  );
};

export default ButtonSolid;
