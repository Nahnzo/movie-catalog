/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { ReviewActions } from "pages/MyReviews/model/slices/ReviewSlice";
import styles from "./cardForLeaveReview.module.css";

const CardForLeaveReview = ({ movie, setShowResultBlock }) => {
  const dispatch = useDispatch();
  const addMovie = () => {
    dispatch(ReviewActions.addMovieToReview(movie));
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
