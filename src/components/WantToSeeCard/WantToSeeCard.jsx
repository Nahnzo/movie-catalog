/* eslint-disable react/prop-types */
import formatTime from "../../tools/time";
import styles from "./wantToSeeCard.module.css";
import { useDispatch } from "react-redux";
import { removeMovie } from "../../Slices/WantToSeeSlice";
import { useEffect } from "react";
import HandleMovieInWantToSee from "../HandleMovieInWantToSee/HandleMovieInWantToSee";

const WantToSeeCard = ({ firstMovie, setFirst, data }) => {
  let fMovie = firstMovie[0];
  useEffect(() => {
    setFirst([data[0]]);
  }, [data]);
  const dispatch = useDispatch();
  const removeMovies = () => {
    dispatch(removeMovie(fMovie));
  };

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
            <p>Длительность: {formatTime(fMovie.movieLength)} </p>
          </div>
          <div className={styles.rating}>
            <button className={styles.btnDelete} onClick={removeMovies}>
              Удалить из списка
            </button>
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
