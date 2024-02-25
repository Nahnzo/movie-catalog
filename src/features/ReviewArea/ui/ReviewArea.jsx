import { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReviewActions } from "pages/ReviewsPage/model/slices/ReviewSlice";
import { addReview } from "shared/lib/config/movieService";
import { useModal } from "shared/lib/hooks/useModal";
import styles from "./reviewArea.module.scss";
import Button from "shared/ui/Button/Button";
import Modal from "shared/ui/Modal/Modal";

const ReviewArea = memo(({ movie }) => {
  const initialText = "Место для вашей рецензии";
  const [movieReview, setMovieReview] = useState("");
  const [readonly, setReadonly] = useState(true);
  const dispatch = useDispatch();
  const { isOpened, handleModal } = useModal();

  const id = useSelector((state) => state.user.id);
  const isActivated = useSelector((state) => state.user.isActivated);
  const refArea = useRef(null);
  const onChangeReview = (event) => {
    setMovieReview(event);
  };

  useEffect(() => {
    setMovieReview(movie?.userReview);
  }, [movie.id, movie?.userReview, isActivated]);

  const leaveReview = async () => {
    if (!isActivated) {
      handleModal();
      return;
    }
    refArea.current.focus();
    setReadonly((prev) => !prev);

    if (movieReview === "") {
      setMovieReview(initialText);
    }

    if (movieReview == initialText) {
      setMovieReview("");
    } else {
      await addReview({ movie }, id, movieReview);
      dispatch(ReviewActions.addReviews({ movieId: movie.id, userReview: movieReview }));
    }
  };
  const deleteReview = async () => {
    await addReview({ movie }, id, initialText);
    dispatch(ReviewActions.addReviews({ movieId: movie.id, userReview: initialText }));
    setMovieReview(initialText);
  };

  const isReviewEmptyOrDefault = movieReview === initialText || movieReview === "";
  return (
    <>
      <Modal isOpen={isOpened}>
        <p className={styles.info}>Для написания рецензий необходимо подтвердить почту</p>
        <Button handler={() => handleModal()} styles={styles.btnOk}>
          Понятно
        </Button>
      </Modal>
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
});

export default ReviewArea;
