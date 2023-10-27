import formatTime from "../../tools/time";
import CardForActors from "../CardForActors/CardForActors";
import SequelsAndPrequels from "components/SequelsAndPrequels/SequelsAndPrequels";
import SimilarFilms from "components/SimilarFilms/SimilarFilms";
import styles from "./cardForDetail.module.css";

const CardForDetail = ({ movie }) => {
  return (
    <div>
      <div className={styles.wrapperCard}>
        <div
          className={styles.poster}
          style={{ backgroundImage: `url(${movie.poster.url})` }}
        ></div>
        <div className={styles.infoWrapper}>
          <div className={styles.description}>
            <h3>{movie.shortDescription}</h3>
          </div>

          <div className={styles.info}>
            {movie.budget.value ? (
              <p>Бюджет: {movie.budget.value + "" + movie.budget.currency} </p>
            ) : (
              ""
            )}
            <p>Страны: {movie.countries.map((item) => item.name) + "."}</p>
            <p>Жанры: {movie.genres.map((item) => item.name) + "."}</p>
            <p>Год {movie.year}</p>
            {movie.seasonsInfo.length !== 0 && (
              <p>
                Длительность: {(formatTime(movie.movieLength) && movie.seasonsInfo.length) || ""}
              </p>
            )}
            <p>{movie.top10 || movie.top250 ? `Тoп - ${movie.top10 || movie.top250}` : ""}</p>
          </div>
        </div>
      </div>
      <div className={styles.actors}>
        <h3>Актеры</h3>
      </div>
      <div className={styles.wrapperActors}>
        {movie.persons
          .filter((item) => item.enProfession === "actor")
          .map((item, index) => (
            <CardForActors actor={item} key={index} />
          ))}
      </div>
      {movie.sequelsAndPrequels.length !== 0 && (
        <div className={styles.sequelsAndPrequels}>
          <SequelsAndPrequels movies={movie.sequelsAndPrequels} />
        </div>
      )}
      <div className={styles.similar}>
        <SimilarFilms movies={movie.similarMovies} />
      </div>
    </div>
  );
};

export default CardForDetail;
