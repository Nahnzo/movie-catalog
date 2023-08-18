/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addMovieToReview } from "../../Slices/ReviewSlice";
import styles from "./cardForLeaveReview.module.css";

const CardForLeaveReview = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${movie.poster})` }}
      onClick={() => dispatch(addMovieToReview(movie))}
    ></div>
  );
};

export default CardForLeaveReview;
