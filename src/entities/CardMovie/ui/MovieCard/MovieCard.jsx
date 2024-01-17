import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "shared/lib/config/routes";
import HandleWantToSee from "../../model/services/HandleWantToSee/HandleWantToSee";
import HandleMyCollection from "../../model/services/HandleMyCollection/HandleMyCollection";
import styles from "./movieCard.module.css";

const MovieCard = ({ data, handleModal }) => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  const backgroundImage = data.poster.url || data.poster;
  const navigateToDetail = (movie) => {
    navigate(`${ROUTES.home}${movie.type}/${movie.id}`);
  };
  return (
    <div>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        onClick={() => navigateToDetail(data)}
      >
        <div style={{ display: showDetails ? "block" : "none" }}>
          <HandleWantToSee movie={data} handleModal={handleModal} />
          <HandleMyCollection movie={data} handleModal={handleModal} />
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.textEllipsis}>{data.name || data.alternativeName}</p>
      </div>
    </div>
  );
};

export default MovieCard;
