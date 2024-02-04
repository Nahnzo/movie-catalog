const Button = ({ styles, children, handler }) => {
  return (
    <button className={`${styles}`} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
