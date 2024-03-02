import { useDispatch, useSelector } from "react-redux";
import { WantToSeeActions } from "../../model/slices/WantToSeeSlice";
import { memo } from "react";
import { removeMovieFromCollection } from "shared/lib/config/movieService";
import { getUserId } from "../../model/selectors/getUserDataSelectors";
import HandleMovieInWantToSee from "../HandleMovieInWantToSee/HandleMovieInWantToSee";
import getFormateTime from "widgets/FormateTimeFunction/getFormateTime";
import Button from "shared/ui/Button/Button";
import styles from "./wantToSeeCard.module.scss";

const WantToSeeCard = memo(({ firstMovie }) => {
  const dispatch = useDispatch();
  const id = useSelector(getUserId);
  const backgroundImage = firstMovie?.poster?.previewUrl || firstMovie?.poster;

  const deleteMovie = async (movie) => {
    dispatch(WantToSeeActions.removeMovie(firstMovie));
    removeMovieFromCollection({ movie }, id, "wantToSee");
  };

  let rating =
    typeof firstMovie.rating === "object" ? (
      <>
        {Object.entries(firstMovie?.rating)
          .filter(([key, value]) => value !== null && value >= 0)
          .map(([key, value]) => (
            <strong key={key} className={styles.rating}>
              {key}: {value}
            </strong>
          ))}
      </>
    ) : (
      firstMovie.rating
    );

  if (!firstMovie.length) {
    return (
      <>
        <div className={styles.wrapperContentCard}>
          <img className={styles.cardImage} src={backgroundImage} />
          <div className={styles.wrapperContent}>
            <div className={styles.movieInfo}>
              <p>
                {firstMovie.genres.length > 1 ? "Жанры: " : "Жанр: "}
                {firstMovie.genres.map((item) => (typeof item === "object" ? item.name : item)) + "."}
              </p>

              <p>
                Название: <strong>{firstMovie.name}</strong>
              </p>
              <p>
                Оригинальное название: <strong>{firstMovie.alternativeName}</strong>
              </p>
              <p>
                {firstMovie.countries.length > 1 ? "Страны: " : "Страна: "}
                {firstMovie.countries.map((item) => (typeof item === "object" ? item.name : item)) + "."}
                {firstMovie.year} год
              </p>
              <p>{firstMovie.movieLength > 0 ? "Длительность: " + getFormateTime(firstMovie.movieLength) : ""}</p>
              <div className={styles.movieDescription}>{firstMovie.description}</div>
              <div className={styles.btnsWrapper}>
                <Button styles={styles.btnDelete} handler={() => deleteMovie(firstMovie)}>
                  Удалить из списка
                </Button>
                <HandleMovieInWantToSee firstMovie={firstMovie} />
              </div>
              <hr />
            </div>
            <div className={styles.movieRating}>Rating {rating} </div>
          </div>
        </div>
      </>
    );
  }
});

export default WantToSeeCard;
