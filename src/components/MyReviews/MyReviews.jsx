import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useSelector } from "react-redux";
import { BiCameraMovie } from "react-icons/bi";
import { BsFolder2Open } from "react-icons/bs";
import Footer from "../Footer/Footer";
import styles from "./myReviews.module.css";
import CardForMyReviews from "../CardForMyReviews/CardForMyReviews";
import LeaveReview from "../LeaveReview/LeaveReview";
import { useEffect, useState } from "react";

const MyReviews = () => {
  const { myCollection, wantToSee, arrayReview } = useSelector((data) => data);
  const navigate = useNavigate();
  console.log(arrayReview);

  return (
    <section className={styles.main}>
      <section className={styles.header}>
        <nav className={styles.navigation}>
          <h3 onClick={() => navigate(ROUTES.home)}>На главную</h3>
          <h3 onClick={() => navigate(ROUTES.wantToSee)}>
            Хочу посмотреть
            <div
              className={styles.icons}
              style={{ display: wantToSee.length ? "inline-flex" : "none" }}
            >
              <BsFolder2Open />
              <div className={styles.counter}>{wantToSee.length}</div>
            </div>
          </h3>
          <h3 onClick={() => navigate(ROUTES.myCollection)}>
            Моя коллекция
            <div
              className={styles.icons}
              style={{ display: myCollection.length ? "inline-flex" : "none" }}
            >
              <BiCameraMovie />
              <div className={styles.counter}>{myCollection.length}</div>
            </div>
          </h3>
          <h3 onClick={() => navigate(ROUTES.whatToSee)}>Что посмотреть?</h3>
        </nav>
      </section>
      <LeaveReview />
      <div className={styles.wrapper}>
        {arrayReview.movies.map((item) => (
          <CardForMyReviews movie={item} key={item.id} />
        ))}
      </div>
      <div className={styles.footer}>{/* <Footer /> */}</div>
    </section>
  );
};

export default MyReviews;
