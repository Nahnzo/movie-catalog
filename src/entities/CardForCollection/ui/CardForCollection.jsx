/* eslint-disable react/prop-types */
import { ROUTES } from "../../../routes";
import { useNavigate } from "react-router-dom";
// import addMovieToReview from "pages/MyReviews/index.js";
import { useState } from "react";
import removeMovieFromCollection from "pages/MyCollection/index.js";
import useAppDispatch from "hooks/useAppDispatch";
import MyButton from "../../../shared/MyButton/MyButton";
import HandleRating from "../../../Handlers/HandleRating/HandleRating";
import styles from "./cardForCollection.module.css";
import { getSortedMovie } from "../model/selectors/getSortedMovie/getSortedMovie";
import { useSelector } from "react-redux";
import { ReviewSlice } from "../../../pages/MyReviews/model/slices/ReviewSlice";

const CardForCollection = ({ movie }) => {
  const { dispatchFunction } = useAppDispatch();
  const [showRateWindow, setShowRateWindow] = useState(false);
  const navigate = useNavigate();
  const review = useSelector(getSortedMovie);
  function handleReview() {
    navigate(`${ROUTES.myReviews}`);
    dispatchFunction(() => ReviewSlice.actions.addMovieToReview(movie));
  }

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.poster} style={{ backgroundImage: `url(${movie.poster.url})` }}></div>
      <div className={styles.info}>
        <div className={styles.rating}>
          <h3>{movie.name}</h3>
          <p>{movie.shortDescription}</p>
          <hr />
          <div className={styles.reviews}>{review.arrayReviews.map((item) => item.myReviews)}</div>
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
