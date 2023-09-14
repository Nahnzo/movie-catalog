/* eslint-disable react/prop-types */
import formatTime from "../../tools/time";
import styles from "./wantToSeeCard.module.css";
import { removeMovie } from "../../Slices/WantToSeeSlice";
import { useEffect } from "react";
import HandleMovieInWantToSee from "../../components/HandleMovieInWantToSee/HandleMovieInWantToSee";
import MyButton from "../../shared/MyButton/MyButton";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";

const WantToSeeCard = ({ firstMovie, setFirst, data }) => {
  const { dispatchFunction } = useAppDispatch();
  let fMovie = firstMovie[0];

  useEffect(() => {
    setFirst([data[0]]);
  }, [data[0]]);

  if (fMovie)
    return (
      <>
        <div
          className={styles.firstItem}
          style={{ backgroundImage: `url(${fMovie.poster.url})` }}
        ></div>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <p>
              {fMovie.genres.length > 1 ? "Жанры: " : "Жанр: "}
              {fMovie.genres.map((item) => item.name + "") + "."}
            </p>
            <p>
              Название: <strong>{fMovie.name}</strong>
            </p>
            <p>
              Оригинальное название: <strong>{fMovie.alternativeName}</strong>
            </p>

            <p>
              {fMovie.countries.length > 1 ? "Страны: " : "Страна: "}
              {fMovie.countries.map((item) => item.name) + "."} {fMovie.year} год
            </p>
            <p>{fMovie.movieLength > 0 ? "Длительность: " + formatTime(fMovie.movieLength) : ""}</p>
          </div>
          <div className={styles.rating}>
            <MyButton
              styles={styles.btnDelete}
              handler={() => dispatchFunction(() => removeMovie(fMovie))}
            >
              Удалить из списка
            </MyButton>
            <HandleMovieInWantToSee fMovie={fMovie} />
            <hr />
            Rating: Кинопоиск <strong> {fMovie.rating.kp} </strong>
            IMDB <strong>{fMovie.rating.imdb}</strong>
          </div>
          <div className={styles.description}>{fMovie.description}</div>
        </div>
      </>
    );
};

export default WantToSeeCard;
