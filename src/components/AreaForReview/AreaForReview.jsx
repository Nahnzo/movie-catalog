import styles from "./areaForReview.module.css";
import useFilteredMovie from "../../hooks/useFilteredMovie";
import useAppDispatch from "../../hooks/useAppDispatch";
import { useState, useRef, useEffect } from "react";

const AreaForReview = ({ movie }) => {
  const { filteredMovie } = useFilteredMovie("arrayReview", movie);
  const { dispatchFunction } = useAppDispatch();
  const [readOnly, setReadOnly] = useState(true);
  const [initialText] = useState("Место для вашей рецензии");
  const [review, setReview] = useState("");
  const refTextArea = useRef(null);

  useEffect(() => {
    if (readOnly) {
      setReview(filteredMovie[0]?.myReviews || movie.myReviews || initialText);
    }
  }, [readOnly, movie]);

  return (
    <textarea
      className={styles.leaveReview}
      onChange={(e) => setReview(e.target.value)}
      readOnly={readOnly}
      ref={refTextArea}
      value={readOnly ? filteredMovie[0]?.myReviews || movie.myReviews || initialText : review}
    ></textarea>
  );
};

export default AreaForReview;
