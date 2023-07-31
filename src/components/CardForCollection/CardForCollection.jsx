/* eslint-disable react/prop-types */
import styles from "./cardForCollection.module.css";

const CardForCollection = ({ movie }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.poster} style={{ backgroundImage: `url(${movie.poster.url})` }}></div>
      <div className={styles.info}></div>
    </div>
  );
};

export default CardForCollection;
