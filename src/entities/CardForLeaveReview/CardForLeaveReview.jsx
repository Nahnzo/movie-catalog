/* eslint-disable react/prop-types */
import { addMovieToReview } from "../../Slices/ReviewSlice";
import useAppDispatch from "hooks/useAppDispatch";
import styles from "./cardForLeaveReview.module.css";

const CardForLeaveReview = ({ movie, setShowResultBlock }) => {
  const { dispatchFunction } = useAppDispatch();
  const addMovie = () => {
    dispatchFunction(() => addMovieToReview(movie));
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
