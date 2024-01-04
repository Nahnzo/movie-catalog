const Input = ({ styles, disabled, placeholder, handler, value }) => {
  return (
    <input className={`${styles}`} disabled={disabled} placeholder={placeholder} onChange={handler} value={value} />
  );
};

export default Input;
