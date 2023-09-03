import CardForSimilarMovie from "../CardForSimilarMovie/CardForSimilarMovie"; /* eslint-disable react/prop-types */
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
