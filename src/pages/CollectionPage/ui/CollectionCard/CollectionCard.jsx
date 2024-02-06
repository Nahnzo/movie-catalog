import { routes } from "shared/lib/config/routes";
import { useNavigate } from "react-router-dom";
import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { ReviewActions } from "pages/ReviewsPage/model/slices/ReviewSlice";
import Button from "shared/ui/Button/Button";
import HandleRating from "../../model/services/HandleRating/HandleRating";
import styles from "./collectionCard.module.scss";
import { TrailerPlayer } from "features/TrailerPlayer";

const CollectionCard = memo(({ movie }) => {
  const [showRateWindow, setShowRateWindow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const review = useSelector(getSortedMovie);
  // const handleReview = useCallback(() => {
  //   navigate(`${routes.reviewsPage}`);
  //   dispatch(ReviewActions.addMovieToReview(movie));
  // }, [dispatch, movie, navigate]);

  return (
    <div className={styles.wrapperCard}>
      <div className={styles.content}>
        <div className={styles.poster} style={{ backgroundImage: `url(${movie.poster.url})` }}></div>
        <TrailerPlayer id={movie.id} />
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
