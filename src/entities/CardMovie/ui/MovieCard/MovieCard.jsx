import { useState } from "react";
import HandleWantToSee from "../../model/services/HandleWantToSee/HandleWantToSee";
import HandleMyCollection from "../../model/services/HandleMyCollection/HandleMyCollection";
import EmptyBackground from "shared/assets/empty-background.jpg";
import styles from "./movieCard.module.scss";
import HandleReviews from "../../model/services/HandleReviews/HandleReviews";

const MovieCard = ({ data, handleModal }) => {
  const [showDetails, setShowDetails] = useState(false);
  const backgroundImage = data?.poster?.previewUrl || data?.poster || EmptyBackground;

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
      <img src={backgroundImage} className={styles.image} alt={data.name || data.alternativeName} srcSet="" />
      {showDetails && (
        <div onClick={handleDetailsClick}>
          <HandleReviews movie={data} handleModal={handleModal} />
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
