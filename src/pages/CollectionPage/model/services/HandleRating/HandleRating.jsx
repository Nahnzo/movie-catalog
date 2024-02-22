import { memo, useState } from "react";
import { MyCollectionActions } from "../../slices/MyCollectionSlice";
import { useDispatch, useSelector } from "react-redux";
import { addRating } from "shared/lib/config/movieService";
import styles from "./handleRating.module.scss";
import Button from "shared/ui/Button/Button";

const ratingsData = [
  { value: 1, emoji: "😖" },
  { value: 2, emoji: "😞" },
  { value: 3, emoji: "😐" },
  { value: 4, emoji: "😊" },
  { value: 5, emoji: "😃" },
];

const HandleRating = memo(({ movieId, setShowRateWindow }) => {
  const [rating, setRating] = useState(null);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.id);

  const setRatingMovie = async (item) => {
    dispatch(MyCollectionActions.addRating({ movieId: movieId, rating: item.value }));
    await addRating(movieId, id, rating);
    setShowRateWindow(false);
  };

  const handleMouseEnter = (value) => {
    setRating(value);
  };

  const handleMouseLeave = () => {
    setRating(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {ratingsData.map((item) => (
          <span
            key={item.value}
            className={styles.smiles}
            onMouseEnter={() => handleMouseEnter(item.value)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setRatingMovie(item, item)}
          >
            {rating && rating >= item.value ? item.emoji : "😐"}
          </span>
        ))}
        <Button styles={styles.cancelBtn} handler={() => setShowRateWindow()}>
          Отменить
        </Button>
        <div className={styles.infoRating}>{rating && <p>Оценка: {rating}</p>}</div>
      </div>
    </div>
  );
});

export default HandleRating;
