import { CardForSimilarMovie } from "entities/CardMovie/index"; /* eslint-disable react/prop-types */
import styles from "./similarFilms.module.css";

const SimilarFilms = ({ movies }) => {
  return (
    <>
      <h3>Похожее</h3>
      <div className={styles.wrapper}>
        {movies.map((item) => (
          <CardForSimilarMovie movie={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default SimilarFilms;
