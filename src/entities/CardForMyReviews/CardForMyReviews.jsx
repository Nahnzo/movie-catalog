/* eslint-disable react/prop-types */
import HandleReview from "../../components/HandleReview/HandleReview";
import useLocalStorageData from "../../hooks/useLocalStorage";
import styles from "./cardForMyReviews.module.css";

const CardForMyReviews = ({ movie }) => {
  if (movie) {
    const URL = movie.poster.url || movie.poster;
    return (
      <div className={styles.container}>
        <div className={styles.poster} style={{ backgroundImage: `url(${URL})` }}></div>
        <div className={styles.myReviews}>
          <HandleReview movie={movie} />
        </div>
      </div>
    );
  }
};

export default CardForMyReviews;
