/* eslint-disable react/prop-types */
import styles from "./handleReview.module.css";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReviews } from "../../Slices/ReviewSlice";

const HandleReview = ({ movie }) => {
  const data = useSelector((data) => data.arrayReview.movies);
  const filter = data.filter((item) => item.id === movie.id && item.myReviews);
  const [readOnly, setReadOnly] = useState(true);
  const [initialText] = useState("Место для вашей рецензии");
  const dispatch = useDispatch();
  const [review, setReview] = useState("");
  const refTextArea = useRef(null);

  const leaveRw = () => {
    dispatch(addReviews({ movieId: movie.id, myReviews: review }));
    setReadOnly((prev) => !prev);
    if (review === initialText) {
      setReview("");
    }
    refTextArea.current.focus();
  };

  useEffect(() => {
    if (readOnly) {
      setReview(filter[0]?.myReviews || movie.myReviews || initialText);
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
          value={readOnly ? filter[0]?.myReviews || movie.myReviews || initialText : review}
        ></textarea>
      </div>

      <button className={movie.myRating ? styles.rwBtn : styles.rwBtnAfter} onClick={leaveRw}>
        {movie.myReviews.length ? "Изменить резенцию" : "Оставить рецензию"}
      </button>
      {movie.myReviews.length !== 0 ? (
        <button
          className={styles.deleteRw}
          onClick={() => {
            setReview("");
            dispatch(addReviews({ movieId: movie.id, myReviews: "" }));
          }}
        >
          Удалить рецензию
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default HandleReview;
