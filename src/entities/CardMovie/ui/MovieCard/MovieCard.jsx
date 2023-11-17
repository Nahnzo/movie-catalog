import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HandleWantToSee from "../../model/services/HandleWantToSee/HandleWantToSee";
import HandleMyCollection from "../../model/services/HandleMyCollection/HandleMyCollection";
import styles from "./movieCard.module.css";

const MovieCard = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();
  const navigateToDetail = (movie) => {
    navigate(`/movie-catalog/${movie.type}/${movie.id}`);
  };
  return (
    <div>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${data.poster.url})` }}
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        onClick={() => navigateToDetail(data)}
      >
        <div style={{ display: showDetails ? "block" : "none" }}>
          <HandleWantToSee movie={data} />
          <HandleMyCollection movie={data} />
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.textEllipsis}>{data.name || data.alternativeName}</p>
      </div>
    </div>
  );
};

export default MovieCard;
