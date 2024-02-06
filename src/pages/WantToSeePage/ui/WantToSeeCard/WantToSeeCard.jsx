import { useDispatch, useSelector } from "react-redux";
import HandleMovieInWantToSee from "../HandleMovieInWantToSee/HandleMovieInWantToSee";
import { WantToSeeActions } from "../../model/slices/WantToSeeSlice";
import { memo } from "react";
import { removeMovieFromCollection } from "shared/lib/config/movieService";
import { getUserId } from "../../model/selectors/getUserDataSelectors";
import getFormateTime from "widgets/FormateTimeFunction/getFormateTime";
import Button from "shared/ui/Button/Button";
import styles from "./wantToSeeCard.module.scss";

const WantToSeeCard = memo(({ firstMovie }) => {
  const dispatch = useDispatch();
  const id = useSelector(getUserId);
  const backgroundImage = firstMovie.poster.previewUrl;

  const deleteMovie = async (movie) => {
    dispatch(WantToSeeActions.removeMovie(firstMovie));
    removeMovieFromCollection({ movie }, id, "wantToSee");
  };

  return (
    <>
      <div className={styles.wrapperContentCard}>
        <img className={styles.cardImage} src={backgroundImage} />
        <div className={styles.wrapperContent}>
          <div className={styles.movieInfo}>
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
            <p>{firstMovie.movieLength > 0 ? "Длительность: " + getFormateTime(firstMovie.movieLength) : ""}</p>
          </div>
          <div className={styles.movieDescription}>{firstMovie.description}</div>
          <div className={styles.btnsWrapper}>
            <Button styles={styles.btnDelete} handler={() => deleteMovie(firstMovie)}>
              Удалить из списка
            </Button>
            <HandleMovieInWantToSee firstMovie={firstMovie} />
          </div>
          <hr />
          <div className={styles.movieRating}>
            Rating: Кинопоиск <strong> {Math.floor(firstMovie.rating.kp)}. </strong>
            IMDB <strong>{firstMovie.rating.imdb}</strong>
          </div>
        </div>
      </div>
    </>
  );
});

export default WantToSeeCard;
