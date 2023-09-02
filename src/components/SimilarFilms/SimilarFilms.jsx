/* eslint-disable react/prop-types */
import CardForSimilarMovie from "../CardForSimilarMovie/CardForSimilarMovie";
import styles from "./similarFilms.module.css";

const SimilarFilms = ({ movies }) => {
  return (
    <div className={styles.wrapper}>
      {movies.map((item) => (
        <CardForSimilarMovie movie={item} key={item.id} />
      ))}
    </div>
  );
};

export default SimilarFilms;
