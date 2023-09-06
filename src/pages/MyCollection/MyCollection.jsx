import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useDispatch, useSelector } from "react-redux";
import { BsFolder2Open } from "react-icons/bs";
import Footer from "../../components/Footer/Footer";
import styles from "./myCollection.module.css";
import CardForCollection from "../../components/CardForCollection/CardForCollection";
import { clearAll } from "../../Slices/MyCollectionSlice";

const MyCollection = () => {
  const data = useSelector((state) => state.myCollection);
  const navigate = useNavigate();
  const dataWantToSee = useSelector((state) => state.wantToSee.length);
  const dispatch = useDispatch();

  return (
    <section className={styles.main}>
      <nav className={styles.header}>
        <h3 onClick={() => navigate(`${ROUTES.home}`)}>Ha главную</h3>
        <h3 onClick={() => navigate(`${ROUTES.wantToSee}`)}>
          Хочу посмотреть
          <div className={dataWantToSee ? styles.counterWantToSee : styles.counterWantToSeeHidden}>
            <BsFolder2Open />
            <div className={styles.counter}>{dataWantToSee}</div>
          </div>
        </h3>
        <h3 onClick={() => navigate(`${ROUTES.whatToSee}`)}>Что посмотреть?</h3>
        <h3 onClick={() => navigate(`${ROUTES.myReviews}`)}>Мои рецензии</h3>
        {data.myCollection.length !== 0 ? (
          <button className={styles.deleteAll} onClick={() => dispatch(clearAll())}>
            Очистить список <div className={styles.counter}>({data.length})</div>
          </button>
        ) : (
          ""
        )}
      </nav>
      <section
        className={styles.wrapper}
        style={{ borderRight: data.myCollection.length ? "2px solid white" : "none" }}
      >
        <div className={styles.myCollection}>
          {data.myCollection.length === 0 ? (
            <h1 style={{ fontSize: "26px" }}>Список пуст</h1>
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
