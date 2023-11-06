/* eslint-disable react/prop-types */
// import addMovieToReview from "pages/MyReviews/index.js";
import useAppDispatch from "hooks/useAppDispatch";
import styles from "./cardForLeaveReview.module.css";
import { ReviewSlice } from "../../pages/MyReviews/model/slices/ReviewSlice";

const CardForLeaveReview = ({ movie, setShowResultBlock }) => {
  const { dispatchFunction } = useAppDispatch();
  const addMovie = () => {
    dispatchFunction(() => ReviewSlice.actions.addMovieToReview(movie));
    setShowResultBlock(false);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${movie.poster})` }}
        onClick={addMovie}
      ></div>
      <h4>{movie.year}</h4>
    </div>
  );
};

export default CardForLeaveReview;
