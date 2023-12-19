const Input = ({ styles, disabled, placeholder, handler }) => {
  return <input className={`${styles}`} disabled={disabled} placeholder={placeholder} onChange={handler} />;
};

export default Input;
