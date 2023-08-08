/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReview, removeMovieFromCollection } from "../../Slices/MyCollectionSlice";
import styles from "./cardForCollection.module.css";
import HandleRating from "../HandleRating/HandleRating";

const CardForCollection = ({ movie }) => {
  const dispatch = useDispatch();
  const [showRateWindow, setShowRateWindow] = useState(false);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.poster} style={{ backgroundImage: `url(${movie.poster.url})` }}></div>
      <div className={styles.info}>
        <div className={styles.rating}>
          <h3>{movie.name}</h3>
          <p>{movie.shortDescription}</p>
          <hr />
          <div className={styles.reviews}>
            {movie.myReviews ? movie.myReviews : "Место для вашей рецензии "}
          </div>
          <button
            className={movie.myRating ? styles.rwBtn : styles.rwBtnAfter}
            onClick={() => dispatch(addReview({ movieId: movie.id, myReviews: "sss" }))}
          >
            {movie.myReviews ? "Изменить резенцию" : "Оставить рецензию"}
          </button>
          <h4>
            {movie.myRating === 0 ? (
              <h5>
                Вы еще не оценили
                <button className={styles.rateBtn} onClick={() => setShowRateWindow(true)}>
                  Оценить
                </button>
              </h5>
            ) : (
              <>
                <div className={styles.myRate}>
                  <h3>Ваша оценка: </h3>
                  <p>{movie.myRating}</p>
                </div>
                <button className={styles.btnChangeRate} onClick={() => setShowRateWindow(true)}>
                  Изменить оценку
                </button>
              </>
            )}
          </h4>
          <button
            className={styles.btnDelete}
            onClick={() => dispatch(removeMovieFromCollection(movie))}
          >
            Удалить из коллекции
          </button>
          <div style={{ display: showRateWindow ? "block" : "none" }} className={styles.rate}>
            <HandleRating movieId={movie.id} setShowRateWindow={setShowRateWindow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForCollection;
