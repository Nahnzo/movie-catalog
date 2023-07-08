import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.header}>
      <nav className={styles.navigation}>
        <h3 onClick={() => navigate("wanttosee")}>Хочу посмотреть</h3>
        <h3 onClick={() => navigate("mycollection")}>Моя коллекция</h3>
        <h3 onClick={() => navigate("whattosee")}>Что посмотреть?</h3>
        <h3 onClick={() => navigate("myreviews")}>Мои рецензии</h3>
      </nav>
    </section>
  );
};

export default Header;
