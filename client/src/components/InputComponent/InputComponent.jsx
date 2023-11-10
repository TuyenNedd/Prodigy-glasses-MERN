
const InputComponent = ({size, placeholder, style, ...rests }) => {
    return (
       <>
       <input type="text" size={size} 
        placeholder={placeholder} 
        // bordered={bordered} 
        style={style}
        {...rests} />
       </>
    );
};

export default InputComponent;