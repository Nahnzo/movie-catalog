import { useState, useRef, useEffect } from "react";
import { ReviewActions } from "pages/MyReviews/model/slices/ReviewSlice";
import useFilteredMovie from "shared/lib/hooks/useFilteredMovie";
import { useDispatch } from "react-redux";
import MyButton from "shared/ui/MyButton/MyButton";
import styles from "./handleReview.module.css";

const HandleReview = ({ movie }) => {
  const { filteredMovie } = useFilteredMovie("arrayReviews", movie);
  const dispatch = useDispatch();
  const [readOnly, setReadOnly] = useState(true);
  const [initialText] = useState("Место для вашей рецензии");
  const [review, setReview] = useState("");
  const refTextArea = useRef(null);
  const leaveRw = () => {
    dispatch(() => ReviewActions.addReviews({ movieId: movie.id, myReviews: review }));
    setReadOnly((prev) => !prev);
    if (review === initialText) {
      setReview("");
    }
    refTextArea.current.focus();
  };

  useEffect(() => {
    if (readOnly) {
      setReview(filteredMovie[0]?.myReviews || movie.myReviews || initialText);
    }
  }, [readOnly, movie, filteredMovie, initialText]);

  return (
    <div>
      <h2>{movie.name || movie.alternativeName}</h2>
      <hr />
      <div className={styles.reviews}>
        <textarea
          className={styles.leaveRw}
          onChange={(e) => setReview(e.target.value)}
          readOnly={readOnly}
          ref={refTextArea}
          value={readOnly ? filteredMovie[0]?.myReviews || movie.myReviews || initialText : review}
        ></textarea>
      </div>
      <div className={styles.buttons}>
        <MyButton styles={styles.reviewBtn} handler={() => leaveRw()}>
          {movie.myReviews.length || filteredMovie[0].myReviews.length
            ? "Изменить резенцию"
            : "Оставить рецензию"}
        </MyButton>

        {movie.myReviews.length !== 0 || filteredMovie[0].myReviews.length ? (
          <MyButton
            styles={styles.deleteRw}
            handler={() => {
              setReview("");
              dispatch(() => ReviewActions.addReviews({ movieId: movie.id, myReviews: "" }));
            }}
          >
            Удалить рецензию
          </MyButton>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HandleReview;
