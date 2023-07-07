/* eslint-disable react/prop-types */
import styles from "./movieCard.module.css";
const MovieCard = ({ data }) => {
  console.log(data.poster);
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${data.poster.url})` }}>
      <h5>{data.alternativeName || data.name}</h5>
    </div>
  );
};

export default MovieCard;
