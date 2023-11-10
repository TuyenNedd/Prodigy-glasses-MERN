const ButtonSolid = ({ child, customClass, hidden, disabled, ...rests }) => {
  return (
    <>
      <div className={`${hidden} priBut`} {...rests}>
        <a
          
          className={` header-main__link hidden-sm priBut_link py-3 px-6 bg-[#f48029] text-base rounded-md TradeGodthic-BoldCn hover:bg-[#ff9647] transition-all duration-300 tracking-wide inline-flex justify-center ${customClass}`}
          style={{
          
            cursor: disabled ? "not-allowed": "pointer"
          }}
       
          {...rests}
        >
        
          {child}
          
        </a>
      </div>
    </>
  );
};

export default ButtonSolid;
