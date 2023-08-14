/* eslint-disable react/prop-types */
import styles from "./cardForLeaveReview.module.css";

const CardForLeaveReview = ({ movie }) => {
  console.log(movie, "movie");
  return <div className={styles.card} style={{ backgroundImage: `url(${movie.poster})` }}></div>;
};

export default CardForLeaveReview;
