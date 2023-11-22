import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = ({ path, children, dataLength }) => {
  const navigate = useNavigate();
  return (
    <h3 onClick={() => navigate(path)}>
      {children}
      <div className={dataLength ? styles.counterWrapper : styles.counterWrapperHidden}>
        <div className={styles.counter}>{dataLength}</div>
      </div>
    </h3>
  );
};

export default Navbar;
