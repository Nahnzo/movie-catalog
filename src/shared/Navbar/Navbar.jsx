/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { useEffect } from "react";

const Navbar = ({ path, children, icon, dataLength }) => {
  const navigate = useNavigate();
  return (
    <h3 onClick={() => navigate(path)}>
      {children}
      <div className={dataLength ? styles.counterWantToSee : styles.counterWantToSeeHidden}>
        {icon}
        <div className={styles.counter}>{dataLength}</div>
      </div>
    </h3>
  );
};

export default Navbar;
