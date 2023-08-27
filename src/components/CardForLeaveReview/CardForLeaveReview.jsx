/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { addMovieToReview, addReviews } from "../../Slices/ReviewSlice";
import styles from "./cardForLeaveReview.module.css";

const CardForLeaveReview = ({ movie, setShowResultBlock }) => {
  const data = useSelector((state) => state.arrayReview.movies);
  const f = () => {
    const isExist = data.filter((item) => item.id === movie.id);
    dispatch(addMovieToReview(movie));
    setShowResultBlock(false);
  };
  const dispatch = useDispatch();
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${movie.poster})` }}
      onClick={f}
    ></div>
  );
};

export default CardForLeaveReview;
