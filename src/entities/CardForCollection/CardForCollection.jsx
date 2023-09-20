/* eslint-disable react/prop-types */
import { useState } from "react";
import { removeMovieFromCollection } from "../../Slices/MyCollectionSlice";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import styles from "./cardForCollection.module.css";
import HandleRating from "../../components/HandleRating/HandleRating";
import MyButton from "../../shared/MyButton/MyButton";
import { ROUTES } from "../../routes";
import { useNavigate } from "react-router-dom";
import { addMovieToReview } from "../../Slices/ReviewSlice";

const CardForCollection = ({ movie }) => {
  const { dispatchFunction } = useAppDispatch();
  const { data } = useAppSelector("arrayReview");
  const navigate = useNavigate();
  const [showRateWindow, setShowRateWindow] = useState(false);
  const review = data.movies
    .filter((item) => item.id === movie.id)
    .filter((item) => item.myReviews);

  function handleReview() {
    navigate(`${ROUTES.myReviews}`);
    dispatchFunction(() => addMovieToReview(movie));
  }

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.poster} style={{ backgroundImage: `url(${movie.poster.url})` }}></div>
      <div className={styles.info}>
        <div className={styles.rating}>
          <h3>{movie.name}</h3>
          <p>{movie.shortDescription}</p>
          <hr />
          <div className={styles.reviews}>{review.map((item) => item.myReviews)}</div>
          <div className={styles.isRated}>
            {movie.myRating === 0 ? (
              <h5>
                Вы еще не оценили
                <MyButton styles={styles.rateBtn} handler={() => setShowRateWindow(true)}>
                  Оценить
                </MyButton>
                <MyButton styles={styles.reviewBtn} handler={handleReview}>
                  {review.length ? "Изменить рецензию" : "Оставить рецензию"}
                </MyButton>
              </h5>
            ) : (
              <h4>
                <div className={styles.myRate}>
                  <h3>Ваша оценка: </h3>
                  <p>{movie.myRating}</p>
                </div>
                <MyButton styles={styles.btnChangeRate} handler={() => setShowRateWindow(true)}>
                  Изменить оценку
                </MyButton>
                <MyButton styles={styles.reviewBtnAfter} handler={handleReview}>
                  {review.length ? "Изменить рецензию" : "Оставить рецензию"}
                </MyButton>
              </h4>
            )}
          </div>
          <MyButton
            styles={styles.btnDelete}
            handler={() => dispatchFunction(() => removeMovieFromCollection(movie))}
          >
            Удалить из коллекции
          </MyButton>
          <div style={{ display: showRateWindow ? "block" : "none" }} className={styles.rate}>
            <HandleRating movieId={movie.id} setShowRateWindow={setShowRateWindow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForCollection;
