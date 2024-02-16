import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReviewActions } from "pages/ReviewsPage/model/slices/ReviewSlice";
import { getDefaultReviewValue } from "../model/services/validateReview/validateReview";
import styles from "./reviewArea.module.scss";
import Button from "shared/ui/Button/Button";
import { addReview } from "../../../shared/lib/config/movieService";

const ReviewArea = ({ movie }) => {
  // const initialText = "Место для вашей рецензииss";
  // const [movieReview, setMovieReview] = useState(getDefaultReviewValue(movie.userReview));
  const [movieReview, setMovieReview] = useState("");
  const [readonly, setReadonly] = useState(true);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.id);
  const refArea = useRef(null);

  const onChangeReview = (event) => {
    setMovieReview(event);
  };
  const leaveReview = async () => {
    refArea.current.focus();
    setReadonly((prev) => !prev);
    // const validatedReview = getDefaultReviewValue(movieReview);
    // if (movieReview !== initialText) {
    await addReview({ movie }, id, movieReview);
    // setMovieReview(validatedReview);
    // } else {
    //   setMovieReview("");
    // }
    // if (movieReview === "") {
    //   // setMovieReview(initialText);
    // }
  };

  // const deleteReview = () => {
  //   dispatch(ReviewActions.addReviews({ movieId: movie.id, userReview: initialText }));
  //   console.log(movie);
  // };

  useEffect(() => setMovieReview(movie.userReview || movieReview), [movie.userReview]);
  // const isReviewEmptyOrDefault = movieReview === initialText || movieReview === "";

  return (
    <>
      <textarea
        className={styles.reviewArea}
        value={movieReview}
        onChange={(event) => onChangeReview(event.target.value)}
        ref={refArea}
        // readOnly={readonly}
      />
      <div className={styles.buttons}>
        <Button handler={leaveReview} styles={styles.reviewBtn}>
          {/* {isReviewEmptyOrDefault ? "Оставить рецензию" : "Изменить рецензию"} */}
          Оставить рецензию
        </Button>
        {/* <Button handler={deleteReview} styles={styles.deleteRw}>
          Удалить рецензию
        </Button> */}
      </div>
    </>
  );
};

export default ReviewArea;
