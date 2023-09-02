/* eslint-disable react/prop-types */
import styles from "./cardForSimilarMovie.module.css";
import { useNavigate } from "react-router-dom";

const CardForSimilarMovie = ({ movie }) => {
  const navigate = useNavigate();
  const navigateToDetail = (movie) => {
    navigate(`/movie-catalog/${movie.type}/${movie.id}`);
  };
  return (
    <div
      className={styles.wrapperCard}
      style={{ backgroundImage: `url(${movie.poster.url})` }}
      onClick={() => navigateToDetail(movie)}
    ></div>
  );
};

export default CardForSimilarMovie;
