/* eslint-disable react/prop-types */
import styles from "./movieCard.module.css";
const MovieCard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className={styles.card} style={{ backgroundImage: `url(${data.poster.url})` }}></div>
      <div className={styles.info}>
        <h3>{data.name || data.alternativeName}</h3>
        <p>{data.type}</p>
        <p>{data.year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
