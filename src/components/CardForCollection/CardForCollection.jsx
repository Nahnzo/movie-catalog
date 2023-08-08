/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addReview, removeMovieFromCollection } from "../../Slices/MyCollectionSlice";
import styles from "./cardForCollection.module.css";
import HandleRating from "../HandleRating/HandleRating";

const CardForCollection = ({ movie }) => {
  const dispatch = useDispatch();
  const [showRateWindow, setShowRateWindow] = useState(false);
  const [readOnly, setReadOnly] = useState(true);
  const [initialText] = useState("Место для вашей рецензии");
  const [review, setReview] = useState("");
  const refTextArea = useRef(null);

  const leaveRw = () => {
    dispatch(addReview({ movieId: movie.id, myReviews: review }));
    setReadOnly((prev) => !prev);
    if (review == initialText) {
      setReview("");
    }
    refTextArea.current.focus();
  };

  useEffect(() => {
    if (readOnly) {
      setReview(review || initialText);
    }
  }, [readOnly]);
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.poster} style={{ backgroundImage: `url(${movie.poster.url})` }}></div>
      <div className={styles.info}>
        <div className={styles.rating}>
          <h3>{movie.name}</h3>
          <p>{movie.shortDescription}</p>
          <hr />
          <div className={styles.reviews}>
            <textarea
              className={styles.leaveRw}
              onChange={(e) => setReview(e.target.value)}
              readOnly={readOnly}
              ref={refTextArea}
              value={readOnly ? movie.myReviews || initialText : review}
            ></textarea>
          </div>

          <button className={movie.myRating ? styles.rwBtn : styles.rwBtnAfter} onClick={leaveRw}>
            {movie.myReviews ? "Изменить резенцию" : "Оставить рецензию"}
          </button>
          {movie.myReviews.length !== 0 ? (
            <button
              className={!movie.myRating ? styles.deleteRw : styles.deleteRwAfter}
              onClick={() => {
                setReview("");
                dispatch(addReview({ movieId: movie.id, myReviews: "" }));
              }}
            >
              Удалить рецензию
            </button>
          ) : (
            ""
          )}
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
