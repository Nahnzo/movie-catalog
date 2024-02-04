import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = ({ path, children }) => {
  const navigate = useNavigate();
  return (
    <h3 onClick={() => navigate(path)} className={styles.text}>
      {children}
    </h3>
  );
};

export default Navbar;
