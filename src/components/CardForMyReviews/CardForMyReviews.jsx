/* eslint-disable react/prop-types */
import HandleReview from "../HandleReview/HandleReview";
import styles from "./cardForMyReviews.module.css";

const CardForMyReviews = ({ movie }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.poster} style={{ backgroundImage: `url(${movie.poster.url})` }}></div>
      <div className={styles.myReviews}>
        <HandleReview movie={movie} />
      </div>
    </div>
  );
};

export default CardForMyReviews;
