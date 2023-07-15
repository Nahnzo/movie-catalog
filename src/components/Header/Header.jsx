import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import styles from "./header.module.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.header}>
      <nav className={styles.navigation}>
        <h3 onClick={() => navigate(`${ROUTES.wantToSee}`)}>Хочу посмотреть</h3>
        <h3 onClick={() => navigate(`${ROUTES.myCollection}`)}>Моя коллекция</h3>
        <h3 onClick={() => navigate(`${ROUTES.whatToSee}`)}>Что посмотреть?</h3>
        <h3 onClick={() => navigate(`${ROUTES.myReviews}`)}>Мои рецензии</h3>
      </nav>
    </section>
  );
};

export default Header;
