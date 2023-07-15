import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { BsFolder2Open } from "react-icons/bs";
import styles from "./header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dataLength = useSelector((state) => state.wantToSee.length);
  return (
    <section className={styles.header}>
      <nav className={styles.navigation}>
        <h3 onClick={() => navigate(`${ROUTES.wantToSee}`)}>
          Хочу посмотреть
          <div className={dataLength ? styles.counterWantToSee : styles.counterWantToSeeHidden}>
            <BsFolder2Open />
            <div className={styles.counter}>{dataLength}</div>
          </div>
        </h3>
        <h3 onClick={() => navigate(`${ROUTES.myCollection}`)}>Моя коллекция</h3>
        <h3 onClick={() => navigate(`${ROUTES.whatToSee}`)}>Что посмотреть?</h3>
        <h3 onClick={() => navigate(`${ROUTES.myReviews}`)}>Мои рецензии</h3>
      </nav>
    </section>
  );
};

export default Header;
