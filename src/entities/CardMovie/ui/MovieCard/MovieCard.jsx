import React, { useState } from "react";
import HandleWantToSee from "../../model/services/HandleWantToSee/HandleWantToSee";
import HandleMyCollection from "../../model/services/HandleMyCollection/HandleMyCollection";
import styles from "./movieCard.module.css";

const MovieCard = ({ data, handleModal }) => {
  const [showDetails, setShowDetails] = useState(false);
  const backgroundImage = data.poster.url || data.poster;

  const handleCardMouseEnter = () => {
    setShowDetails(true);
  };

  const handleCardMouseLeave = () => {
    setShowDetails(false);
  };

  const handleDetailsClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave} className={styles.card}>
      <img src={backgroundImage} className={styles.image} alt={data.name || data.alternativeName} loading="lazy" />
      {showDetails && (
        <div onClick={handleDetailsClick}>
          <HandleWantToSee movie={data} handleModal={handleModal} />
          <HandleMyCollection movie={data} handleModal={handleModal} />
        </div>
      )}
      <div className={styles.info}>
        <p className={styles.textEllipsis}>{data.name || data.alternativeName}</p>
      </div>
    </div>
  );
};

export default MovieCard;
