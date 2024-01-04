import { createPortal } from "react-dom";

const Portal = (props) => {
  const { children, element = document.body } = props;
  return createPortal(children, element);
};

export default Portal;
