import { ROUTES } from "shared/lib/config/routes";
import { useNavigate } from "react-router-dom";
import { memo, useCallback, useState } from "react";
import { getSortedMovie } from "../../../../entities/CardMovie/model/selectors/getSortedMovie/getSortedMovie";
import { useSelector, useDispatch } from "react-redux";
import { ReviewActions } from "pages/MyReviews/model/slices/ReviewSlice";
import { MyCollectionActions } from "../../model/slices/MyCollectionSlice";
import MyButton from "shared/ui/MyButton/MyButton";
import HandleRating from "../../../../entities/CardMovie/model/services/HandleRating/HandleRating";
import styles from "./myCollectionCard.module.css";

const MyCollectionCard = memo(({ movie }) => {
  const [showRateWindow, setShowRateWindow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const review = useSelector(getSortedMovie);
  const handleReview = useCallback(() => {
    navigate(`${ROUTES.myReviews}`);
    dispatch(ReviewActions.addMovieToReview(movie));
  }, [dispatch, movie, navigate]);

  return (
    <div className={styles.wrapperCard}>
      <div className={styles.poster} style={{ backgroundImage: `url(${movie.poster.url})` }}></div>
      <div className={styles.trailer}>TRAILER</div>
    </div>
  );
});

export default MyCollectionCard;

{
  /* <div className={styles.poster} style={{ backgroundImage: `url(${movie.poster.url})` }}></div>
      <div className={styles.info}>
        <div className={styles.rating}>
          <h3>{movie.name}</h3>
          <p>{movie.shortDescription}</p>
          <hr />
          <div className={styles.reviews}>{review.arrayReviews.map((item) => item.myReviews)}</div>
          <div className={styles.isRated}>
            {!movie.myRating ? (
              <h5>
                Вы еще не оценили
                <MyButton styles={styles.rateBtn} handler={() => setShowRateWindow(true)}>
                  Оценить
                </MyButton>
                <MyButton styles={styles.reviewBtn} handler={handleReview}>
                  {review.length ? "Изменить рецензию" : "Оставить рецензию"}
                </MyButton>
              </h5>
            ) : (
              <h4>
                <div className={styles.myRate}>
                  <h3>Ваша оценка: </h3>
                  <p>{movie.myRating}</p>
                </div>
                <MyButton styles={styles.btnChangeRate} handler={() => setShowRateWindow(true)}>
                  Изменить оценку
                </MyButton>
                <MyButton styles={styles.reviewBtnAfter} handler={handleReview}>
                  {review.length ? "Изменить рецензию" : "Оставить рецензию"}
                </MyButton>
              </h4>
            )}
          </div>
          <MyButton
            styles={styles.btnDelete}
            handler={() => dispatch(MyCollectionActions.removeMovieFromCollection(movie))}
          >
            Удалить из коллекции
          </MyButton>
          <div style={{ display: showRateWindow ? "block" : "none" }} className={styles.rate}>
            <HandleRating movieId={movie.id} setShowRateWindow={setShowRateWindow} />
          </div>
        </div>
      </div> */
}
