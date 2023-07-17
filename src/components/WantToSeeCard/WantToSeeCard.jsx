/* eslint-disable react/prop-types */
import styles from "./wantToSeeCard.module.css";
import { useDispatch } from "react-redux";
import { removeMovie } from "../../Slices/WantToSeeSlice";

const WantToSeeCard = ({ firstMovie }) => {
  const fMovie = firstMovie[0];
  const dispatch = useDispatch();
  if (fMovie)
    return (
      <>
        <div
          className={styles.firstItem}
          style={{ backgroundImage: `url(${fMovie.poster.url})` }}
        ></div>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <p>Жанры: {fMovie.genres.map((item) => item.name + "") + "."}</p>
            <p>
              Название: <strong>{fMovie.name}</strong>
            </p>
            <p>
              Оригинальное название: <strong>{fMovie.alternativeName}</strong>
            </p>

            <p>
              Страна: {fMovie.countries.map((item) => item.name) + "."} {fMovie.year}
            </p>
          </div>
          <div className={styles.rating}>
            <button className={styles.btnDelete} onClick={() => dispatch(removeMovie(fMovie))}>
              Удалить из списка
            </button>
            <hr />
            Rating: Кинопоиск <strong> {fMovie.rating.kp} </strong>
            IMDB <strong>{fMovie.rating.imdb}</strong>
          </div>
          <div className={styles.description}>
            <h3>Описание:</h3> {fMovie.description}
          </div>
        </div>
      </>
    );
};

export default WantToSeeCard;
