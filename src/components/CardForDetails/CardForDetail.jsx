/* eslint-disable react/prop-types */
import formatTime from "../../tools/time";
import CardForActors from "../CardForActors/CardForActors";
import CarouselX from "../CarouselX/CarouselX";
import styles from "./cardForDetail.module.css";
import { useEffect, useRef } from "react";
const CardForDetail = ({ movie }) => {
  const ref = useRef(null);
  const wrapper = ref.current;

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapperCard}>
        <div
          className={styles.poster}
          style={{ backgroundImage: `url(${movie.poster.url})` }}
        ></div>
        <div className={styles.infoWrapper}>
          <div className={styles.description}>
            <p>{movie.shortDescription}</p>
          </div>
          <div className={styles.info}>
            {movie.budget.value ? (
              <p>Бюджет : {movie.budget.value + "" + movie.budget.currency} </p>
            ) : (
              ""
            )}
            <p>Страны : {movie.countries.map((item) => item.name) + "."}</p>
            <p>Жанры : {movie.genres.map((item) => item.name) + "."}</p>
            <p>Год {movie.year}</p>
            <p>Длительность : {formatTime(movie.movieLength)}</p>
            <p>Топ - {movie.top10 || movie.top250}</p>
          </div>
        </div>
      </div>
      <div className={styles.wrapperActors} ref={ref}>
        {movie.persons.map((item, index) => (
          <CardForActors actor={item} key={index} />
        ))}
        <CarouselX data={movie.persons} wrapper={wrapper} />
      </div>
    </div>
  );
};

export default CardForDetail;
