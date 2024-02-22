import { routes } from "shared/lib/config/routes";
import { useNavigate } from "react-router-dom";
import { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReviewActions } from "pages/ReviewsPage/model/slices/ReviewSlice";
import Button from "shared/ui/Button/Button";
import HandleRating from "../../model/services/HandleRating/HandleRating";
import styles from "./collectionCard.module.scss";
import { TrailerPlayer } from "features/TrailerPlayer";
import { removeMovieFromCollection } from "../../../../shared/lib/config/movieService";
import { getUserId } from "../../model/selectors/getUserData";
import { MyCollectionActions } from "../../model/slices/MyCollectionSlice";

const CollectionCard = memo(({ movie }) => {
  const [showRateWindow, setShowRateWindow] = useState(false);
  const backgroundImage = movie?.poster?.previewUrl || movie?.poster;
  const dispatch = useDispatch();
  const id = useSelector(getUserId);

  const deleteMovie = async () => {
    await removeMovieFromCollection({ movie }, id, "myCollection");
    dispatch(MyCollectionActions.removeMovieFromCollection(movie));
  };

  return (
    <div className={styles.wrapperCard}>
      <div className={styles.description}>{movie.description}</div>
      <div className={styles.content}>
        <img className={styles.poster} src={backgroundImage} />
        <TrailerPlayer id={movie.id} />
        <Button styles={styles.deleteBtn} handler={() => deleteMovie()}>
          Удалить из списка
        </Button>
      </div>
      <div className={styles.info}>
        <div className={styles.rating}>
          Ваша оценка:
          {movie.userRating ? (
            <>
              <p className={styles.userRate}>{movie.userRating}</p>
              <Button styles={styles.btnChangeRate} handler={() => setShowRateWindow(true)}>
                Изменить оценку
              </Button>
            </>
          ) : (
            <p>
              <Button styles={styles.rateBtn} handler={() => setShowRateWindow(true)}>
                Оценить
              </Button>
            </p>
          )}
          <div style={{ display: showRateWindow ? "block" : "none" }} className={styles.rate}>
            <HandleRating movieId={movie.id} setShowRateWindow={setShowRateWindow} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default CollectionCard;
