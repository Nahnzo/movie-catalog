import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFolderPlus } from "react-icons/bs";
import { addMovie } from "../../Slices/WantToSeeSlice";

/* eslint-disable react/prop-types */
import styles from "./movieCard.module.css";
import { useDispatch } from "react-redux";
const MovieCard = ({ data }) => {
  const dispatch = useDispatch();
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
        <div className={styles.details} style={{ display: showDetails ? "block" : "none" }}>
          <AiOutlineHeart className={styles.collection} />
          <BsFolderPlus className={styles.wantToSee} onClick={() => dispatch(addMovie(data))} />
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
