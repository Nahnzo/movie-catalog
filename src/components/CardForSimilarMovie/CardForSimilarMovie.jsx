/* eslint-disable react/prop-types */
import { useRef } from "react";
import styles from "./cardForSimilarMovie.module.css";
import { useNavigate } from "react-router-dom";

const CardForSimilarMovie = ({ movie }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const navigateToDetail = (movie) => {
    navigate(`/movie-catalog/${movie.type}/${movie.id}`);
    // ref.style.transform = `translateY(${50}%)`;
  };
  return (
    <div
      ref={ref}
      className={styles.wrapperCard}
      style={{ backgroundImage: `url(${movie.poster.url})` }}
      onClick={() => navigateToDetail(movie)}
    ></div>
  );
};

export default CardForSimilarMovie;
