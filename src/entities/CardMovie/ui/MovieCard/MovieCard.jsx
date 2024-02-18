import { useState } from "react";
import { HandleWantToSee, HandleMyCollection, HandleReviews } from "widgets/HandlersMovie/index.js";
import { MyCollectionActions } from "pages/CollectionPage/model/slices/MyCollectionSlice";
import { ReviewActions } from "pages/ReviewsPage/model/slices/ReviewSlice";
import { WantToSeeActions } from "pages/WantToSeePage/model/slices/WantToSeeSlice";
import EmptyBackground from "shared/assets/empty-background.jpg";
import styles from "./movieCard.module.scss";

const MovieCard = ({ data, handleModal }) => {
  const [showDetails, setShowDetails] = useState(false);
  const backgroundImage = data?.poster?.previewUrl || data?.poster || EmptyBackground;

  return (
    <div onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)} className={styles.card}>
      <img src={backgroundImage} className={styles.image} alt={data?.name || data?.alternativeName} />
      {showDetails && (
        <>
          <HandleReviews movie={data} handleModal={handleModal} actions={{ addItem: ReviewActions.addMovieToReview }} />
          <HandleWantToSee
            movie={data}
            handleModal={handleModal}
            actions={{ deleteItem: WantToSeeActions.removeMovie, addItem: WantToSeeActions.addMovie }}
          />
          <HandleMyCollection
            movie={data}
            handleModal={handleModal}
            actions={{
              deleteItem: MyCollectionActions.removeMovieFromCollection,
              addItem: MyCollectionActions.addMovieToCollection,
            }}
          />
        </>
      )}
      <div className={styles.info}>
        <p className={styles.textEllipsis}>{data?.name || data?.alternativeName}</p>
      </div>
    </div>
  );
};

export default MovieCard;
