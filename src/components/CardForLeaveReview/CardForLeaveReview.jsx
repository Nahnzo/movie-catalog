/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addMovieToReview } from "../../Slices/ReviewSlice";
import styles from "./cardForLeaveReview.module.css";

const CardForLeaveReview = ({ movie, setShowResultBlock }) => {
  const f = () => {
    dispatch(addMovieToReview(movie));
    setShowResultBlock(false);
  };
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${movie.poster})` }}
        onClick={f}
      ></div>
      <h4>{movie.year}</h4>
    </div>
  );
};

export default CardForLeaveReview;
