import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = ({ path, children, pathname }) => {
  const navigate = useNavigate();
  const isActive = path === pathname;
  return (
    <h3 onClick={() => navigate(path)} className={isActive ? styles.textActive : ""}>
      {children}
    </h3>
  );
};

export default Navbar;
