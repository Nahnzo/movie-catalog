import React from "react";
import styles from "./wantToSee.module.css";
import { useSelector } from "react-redux";
const WantToSee = () => {
  const data = useSelector((state) => state.wantToSee.wantToSee);
  if (data.length) {
    return <section className={styles.main}>{data.map((item) => item.name)}</section>;
  } else {
    return (
      <section className={styles.main}>
        <p>Здесь пусто</p>;
      </section>
    );
  }
};

export default WantToSee;
