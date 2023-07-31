import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useSelector } from "react-redux";
import { BsFolder2Open } from "react-icons/bs";
import Footer from "../Footer/Footer";
import styles from "./myCollection.module.css";
import CardForCollection from "../CardForCollection/CardForCollection";

const MyCollection = () => {
  const data = useSelector((state) => state.myCollection);
  useEffect(() => {
    console.log(data.myCollection);
  }, []);
  const navigate = useNavigate();
  const dataLength = useSelector((state) => state.myCollection.length);
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
      <section className={styles.wrapper}>
        <div className={styles.myCollection}>
          {data.myCollection.length === 0 ? (
            <h2>Список пуст</h2>
          ) : (
            data.myCollection.map((item) => <CardForCollection movie={item} key={item.id} />)
          )}
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default MyCollection;
