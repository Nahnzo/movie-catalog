/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { addReviews } from "../../Slices/ReviewSlice";
import useFilteredMovie from "../../hooks/useFilteredMovie";
import useAppDispatch from "../../hooks/useAppDispatch";
import MyButton from "../../shared/MyButton/MyButton";
import styles from "./handleReview.module.css";

const HandleReview = ({ movie }) => {
  const { filteredMovie } = useFilteredMovie("arrayReview", movie);
  const { dispatchFunction } = useAppDispatch();
  const [readOnly, setReadOnly] = useState(true);
  const [initialText] = useState("Место для вашей рецензии");
  const [review, setReview] = useState("");
  const refTextArea = useRef(null);
  const leaveRw = () => {
    dispatchFunction(() => addReviews({ movieId: movie.id, myReviews: review }));
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
  }, [readOnly, movie]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.reviews}>
        <h2>{movie.name || movie.alternativeName}</h2>
        <hr />
        <textarea
          className={styles.leaveRw}
          onChange={(e) => setReview(e.target.value)}
          readOnly={readOnly}
          ref={refTextArea}
          value={readOnly ? filteredMovie[0]?.myReviews || movie.myReviews || initialText : review}
        ></textarea>
      </div>
      <MyButton
        styles={movie.myRating ? styles.rwBtn : styles.rwBtnAfter}
        handler={() => leaveRw()}
      >
        {movie.myReviews.length ? "Изменить резенцию" : "Оставить рецензию"}
      </MyButton>
      {movie.myReviews.length !== 0 ? (
        <MyButton
          styles={styles.deleteRw}
          handler={() => {
            setReview("");
            dispatchFunction(() => addReviews({ movieId: movie.id, myReviews: "" }));
          }}
        >
          Удалить рецензию
        </MyButton>
      ) : (
        ""
      )}
    </div>
  );
};

export default HandleReview;
