import { useState } from "react";
import { MyCollectionActions } from "../../slices/MyCollectionSlice";
import { useDispatch } from "react-redux";
import styles from "./handleRating.module.scss";
import Button from "shared/ui/Button/Button";

const ratingsData = [
  { value: 1, emoji: "😖", description: "Ужасно" },
  { value: 2, emoji: "😞", description: "Плохо" },
  { value: 3, emoji: "😐", description: "Средне" },
  { value: 4, emoji: "😊", description: "Хорошо" },
  { value: 5, emoji: "😃", description: "Отлично" },
];

const HandleRating = ({ movieId, setShowRateWindow }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const addRating = (item) => {
    dispatch(MyCollectionActions.addRating({ movieId: movieId, rating: item.value }));
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
            onClick={() => addRating(item, item)}
          >
            {rating && rating >= item.value ? item.emoji : "😐"}
          </span>
        ))}
        <Button styles={styles.cancelBtn} handler={() => setShowRateWindow()}>
          Отменить
        </Button>
        <div className={styles.infoRating}>
          {rating && (
            <p>
              Оценка: {rating} ({ratingsData[rating - 1].description})
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HandleRating;
