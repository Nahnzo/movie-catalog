/* eslint-disable react/prop-types */
import styles from "./wantToSeeCard.module.css";
import { useDispatch } from "react-redux";
import { removeMovie } from "../../Slices/WantToSeeSlice";

const WantToSeeCard = ({ firstMovie }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={styles.firstItem}
        style={{ backgroundImage: `url(${firstMovie.poster.url})` }}
      ></div>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p>Жанры: {firstMovie.genres.map((item) => item.name + "") + "."}</p>
          <p>
            Название: <strong>{firstMovie.name}</strong>
          </p>
          <p>
            Оригинальное название: <strong>{firstMovie.alternativeName}</strong>
          </p>

          <p>
            Страна: {firstMovie.countries.map((item) => item.name) + "."} {firstMovie.year}
          </p>
        </div>
        <div className={styles.rating}>
          <button className={styles.btnDelete} onClick={() => dispatch(removeMovie(firstMovie))}>
            Удалить из списка
          </button>
          <hr />
          Rating: Кинопоиск <strong> {firstMovie.rating.kp} </strong>
          IMDB <strong>{firstMovie.rating.imdb}</strong>
        </div>
        <div className={styles.description}>
          <h3>Описание:</h3> {firstMovie.description}
        </div>
      </div>
    </>
  );
};

export default WantToSeeCard;
