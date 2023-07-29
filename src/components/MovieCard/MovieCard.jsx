/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./movieCard.module.css";
import HandleWantToSee from "../HandleWantToSee/HandleWantToSee";
import HandleMyCollection from "../HandleMyCollection/HandleMyCollection";

const MovieCard = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);
  function addClass(card) {
    card.target.classList.add(`${styles.hovered}`);
    setShowDetails(true);
  }
  function hideClass(card) {
    card.target.classList.remove(`${styles.hovered}`);
    setShowDetails(false);
  }

  return (
    <div>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${data.poster.url})` }}
        onMouseEnter={(event) => addClass(event)}
        onMouseLeave={(event) => hideClass(event)}
      >
        <div style={{ display: showDetails ? "block" : "none" }}>
          <HandleWantToSee movie={data} />
          <HandleMyCollection movie={data} />
        </div>
      </div>
      <div className={styles.info}>
        <h3>
          {(data.name || data.alternativeName).length > 17
            ? (data.name || data.alternativeName).slice(0, 17) + "..."
            : data.name || data.alternativeName}
        </h3>
        <p>{data.type}</p>
        <p>{data.year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
