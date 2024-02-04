import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ReviewActions } from "pages/MyReviews/model/slices/ReviewSlice";
import { getDefaultReviewValue } from "../model/services/validateReview/validateReview";
import styles from "./reviewArea.module.scss";
import Button from "shared/ui/Button/Button";

const ReviewArea = ({ movie }) => {
  const initialText = "Место для вашей рецензии";
  const [movieReview, setMovieReview] = useState(getDefaultReviewValue(movie.myReviews));
  const [readonly, setReadonly] = useState(true);
  const dispatch = useDispatch();
  const refArea = useRef(null);

  const onChangeReview = (event) => {
    setMovieReview(event);
  };

  const leaveReview = () => {
    refArea.current.focus();
    setReadonly((prev) => !prev);

    const validatedReview = getDefaultReviewValue(movieReview);
    if (movieReview !== initialText) {
      dispatch(ReviewActions.addReviews({ movieId: movie.id, myReviews: validatedReview }));
      setMovieReview(validatedReview);
    } else {
      setMovieReview("");
    }
    if (movieReview === "") {
      setMovieReview(initialText);
    }
  };

  const deleteReview = () => {
    dispatch(ReviewActions.addReviews({ movieId: movie.id, myReviews: initialText }));
  };

  useEffect(() => setMovieReview(movie.myReviews || movieReview), [movie.myReviews]);

  const isReviewEmptyOrDefault = movieReview === initialText || movieReview === "";

  return (
    <>
      <textarea
        className={styles.reviewArea}
        value={movieReview}
        onChange={(event) => onChangeReview(event.target.value)}
        ref={refArea}
        readOnly={readonly}
      />
      <div className={styles.buttons}>
        <Button handler={leaveReview} styles={styles.reviewBtn}>
          {isReviewEmptyOrDefault ? "Оставить рецензию" : "Изменить рецензию"}
        </Button>
        <Button handler={deleteReview} styles={styles.deleteRw}>
          Удалить рецензию
        </Button>
      </div>
    </>
  );
};

export default ReviewArea;
