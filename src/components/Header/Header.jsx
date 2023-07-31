import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { BsFolder2Open } from "react-icons/bs";
import { useSelector } from "react-redux";
import { BiCameraMovie } from "react-icons/bi";
import styles from "./header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const dataLengthWantToSee = useSelector((state) => state.wantToSee.length);
  const dataLengthMyCollection = useSelector((state) => state.myCollection.length);
  return (
    <section className={styles.header}>
      <nav className={styles.navigation}>
        <h3 onClick={() => navigate(`${ROUTES.wantToSee}`)}>
          Хочу посмотреть
          <div
            className={
              dataLengthWantToSee ? styles.counterWantToSee : styles.counterWantToSeeHidden
            }
          >
            <BsFolder2Open />
            <div className={styles.counter}>{dataLengthWantToSee}</div>
          </div>
        </h3>
        <h3 onClick={() => navigate(`${ROUTES.myCollection}`)}>
          Моя коллекция
          <div
            className={
              dataLengthMyCollection ? styles.counterWantToSee : styles.counterWantToSeeHidden
            }
          >
            <BiCameraMovie />
            <div className={styles.counter}>{dataLengthMyCollection}</div>
          </div>
        </h3>
        <h3 onClick={() => navigate(`${ROUTES.whatToSee}`)}>Что посмотреть?</h3>
        <h3 onClick={() => navigate(`${ROUTES.myReviews}`)}>Мои рецензии</h3>
      </nav>
    </section>
  );
};

export default Header;
