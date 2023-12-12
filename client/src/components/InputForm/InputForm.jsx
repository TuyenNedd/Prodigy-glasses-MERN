const InputForm = (props) => {
  const { customClass, placeholder, value, ...rests } = props;
  const handleOnchangeInput = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <>
      <input
        className={customClass}
        type={props.type}
        placeholder={placeholder}
        value={value}
        {...rests}
        onChange={handleOnchangeInput}
      />
    </>
  );
};
export default InputForm;
