import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = ({ path, children, icon, dataLength }) => {
  const navigate = useNavigate();
  return (
    <h3 onClick={() => navigate(path)}>
      {children}
      <div className={dataLength ? styles.counterWantToSee : styles.counterWantToSeeHidden}>
        <img src={icon} alt={icon} className={styles.icon} />
        <div className={styles.counter}>{dataLength}</div>
      </div>
    </h3>
  );
};

export default Navbar;
