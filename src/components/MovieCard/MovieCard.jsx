import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

/* eslint-disable react/prop-types */
import styles from "./movieCard.module.css";
const MovieCard = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  function addClass(card) {
    card.target.classList.add(`${styles.hovered}`);
    setShowDetails(true);
    console.log(showDetails);
  }
  function hideClass(card) {
    card.target.classList.remove(`${styles.hovered}`);
    setShowDetails(false);
    console.log(showDetails);
  }
  return (
    <div>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${data.poster.url})` }}
        onMouseEnter={(event) => addClass(event)}
        onMouseLeave={(event) => hideClass(event)}
      >
        <div className={styles.details} style={{ display: showDetails ? "block" : "none" }}>
          <AiOutlineHeart className={styles.heart} />
        </div>
      </div>
      <div className={styles.info}>
        <h3>{data.name || data.alternativeName}</h3>
        <p>{data.type}</p>
        <p>{data.year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
