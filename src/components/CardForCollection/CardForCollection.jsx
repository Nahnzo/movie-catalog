/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./cardForCollection.module.css";
import HandleRating from "../HandleRating/HandleRating";

const CardForCollection = ({ movie }) => {
  const [showRateWindow, setShowRateWindow] = useState(false);
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.poster} style={{ backgroundImage: `url(${movie.poster.url})` }}></div>
      <div className={styles.info}>
        <div className={styles.rating}>
          <p>{movie.name}</p>
          <h4>
            Ваша оценка:
            {movie.myRating === 0 ? (
              <p>
                Вы еще не оценили
                <button className={styles.rateBtn} onClick={() => setShowRateWindow(true)}>
                  Оценить
                </button>
              </p>
            ) : (
              movie.myRating
            )}
          </h4>
          <div style={{ display: showRateWindow ? "block" : "none" }} className={styles.rate}>
            <HandleRating movieId={movie.id} setShowRateWindow={setShowRateWindow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForCollection;
