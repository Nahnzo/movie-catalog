import React, { useEffect } from "react";
import styles from "./myCollection.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useSelector } from "react-redux";
import { BsFolder2Open } from "react-icons/bs";

const MyCollection = () => {
  const data = useSelector((state) => state.myCollection);
  useEffect(() => {
    console.log(data);
  }, []);
  const navigate = useNavigate();
  const dataLength = useSelector((state) => state.wantToSee.length);
  return (
    <section className={styles.main}>
      <nav className={styles.header}>
        <h3 onClick={() => navigate(`${ROUTES.home}`)}>Ha главную</h3>
        <h3 onClick={() => navigate(`${ROUTES.wantToSee}`)}>
          Хочу посмотреть
          <div className={dataLength ? styles.counterWantToSee : styles.counterWantToSeeHidden}>
            <BsFolder2Open />
            <div className={styles.counter}>{dataLength}</div>
          </div>
        </h3>
        <h3 onClick={() => navigate(`${ROUTES.whatToSee}`)}>Что посмотреть?</h3>
        <h3 onClick={() => navigate(`${ROUTES.myReviews}`)}>Мои рецензии</h3>
      </nav>
    </section>
  );
};

export default MyCollection;
