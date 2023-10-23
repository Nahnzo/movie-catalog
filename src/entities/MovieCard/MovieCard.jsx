import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./movieCard.module.css";
import HandleWantToSee from "../../Handlers/HandleWantToSee/HandleWantToSee";
import HandleMyCollection from "../../Handlers/HandleMyCollection/HandleMyCollection";

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
