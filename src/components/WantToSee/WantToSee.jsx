import styles from "./wantToSee.module.css";
import WantToSeeCard from "../WantToSeeCard/WantToSeeCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";

const WantToSee = () => {
  const data = useSelector((state) => state.wantToSee.wantToSee);
  const navigate = useNavigate();
  const firstMovie = data[0];
  if (data.length) {
    return (
      <section className={styles.main}>
        <nav className={styles.header}>
          <h3 onClick={() => navigate(`${ROUTES.home}`)}>На главную</h3>
          <h3 onClick={() => navigate(`${ROUTES.myCollection}`)}>Моя коллекция</h3>
          <h3 onClick={() => navigate(`${ROUTES.whatToSee}`)}>Что посмотреть?</h3>
          <h3 onClick={() => navigate(`${ROUTES.myReviews}`)}>Мои рецензии</h3>
        </nav>
        <div className={styles.container}>
          <WantToSeeCard firstMovie={firstMovie} />
        </div>
        {data.map((item) => item.name)}
      </section>
    );
  } else {
    return (
      <section className={styles.main}>
        <nav className={styles.header}>
          <h3 onClick={() => navigate(`${ROUTES.home}`)}>На главную</h3>
          <h3 onClick={() => navigate(`${ROUTES.myCollection}`)}>Моя коллекция</h3>
          <h3 onClick={() => navigate(`${ROUTES.whatToSee}`)}>Что посмотреть?</h3>
          <h3 onClick={() => navigate(`${ROUTES.myReviews}`)}>Мои рецензии</h3>
        </nav>
        <h1> Список еще пуст</h1>
      </section>
    );
  }
};

export default WantToSee;
