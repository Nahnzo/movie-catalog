import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useSelector } from "react-redux";
import { BiCameraMovie } from "react-icons/bi";
import { BsFolder2Open } from "react-icons/bs";
import styles from "./myReviews.module.css";

const MyReviews = () => {
  const { myCollection, wantToSee } = useSelector((data) => data);

  const navigate = useNavigate();
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
        </nav>
      </section>
    </section>
  );
};

export default MyReviews;
