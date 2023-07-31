/* eslint-disable react/prop-types */
import styles from "./cardForCollection.module.css";

const CardForCollection = ({ movie }) => {
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
                Вы еще не оценили <button className={styles.rateBtn}>Оценить</button>
              </p>
            ) : (
              movie.myRating
            )}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CardForCollection;
