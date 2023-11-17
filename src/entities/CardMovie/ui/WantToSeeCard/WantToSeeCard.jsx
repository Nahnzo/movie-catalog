import { useDispatch } from "react-redux";
import { HandleMovieInWantToSee } from "pages/WantToSee/index.js";
import { WantToSeeActions } from "pages/WantToSee/model/slices/WantToSeeSlice";
import { memo } from "react";
import formatTime from "../../model/services/time/time";
import MyButton from "shared/ui/MyButton/MyButton";
import styles from "./wantToSeeCard.module.css";

const WantToSeeCard = memo(({ firstMovie }) => {
  const dispatch = useDispatch();
  if (firstMovie)
    return (
      <>
        <div
          className={styles.firstItem}
          style={{ backgroundImage: `url(${firstMovie.poster.url})` }}
        ></div>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <p>
              {firstMovie.genres.length > 1 ? "Жанры: " : "Жанр: "}
              {firstMovie.genres.map((item) => item.name + "") + "."}
            </p>
            <p>
              Название: <strong>{firstMovie.name}</strong>
            </p>
            <p>
              Оригинальное название: <strong>{firstMovie.alternativeName}</strong>
            </p>

            <p>
              {firstMovie.countries.length > 1 ? "Страны: " : "Страна: "}
              {firstMovie.countries.map((item) => item.name) + "."} {firstMovie.year} год
            </p>
            <p>
              {firstMovie.movieLength > 0
                ? "Длительность: " + formatTime(firstMovie.movieLength)
                : ""}
            </p>
          </div>
          <div className={styles.rating}>
            <MyButton
              styles={styles.btnDelete}
              handler={() => dispatch(WantToSeeActions.removeMovie(firstMovie))}
            >
              Удалить из списка
            </MyButton>
            <HandleMovieInWantToSee firstMovie={firstMovie} />
            <hr />
            Rating: Кинопоиск <strong> {firstMovie.rating.kp} </strong>
            IMDB <strong>{firstMovie.rating.imdb}</strong>
          </div>
          <div className={styles.description}>{firstMovie.description}</div>
        </div>
      </>
    );
});

export default WantToSeeCard;
