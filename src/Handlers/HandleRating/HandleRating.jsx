/* eslint-disable react/prop-types */
import { useState } from "react";
import { MyCollectionActions } from "../../pages/MyCollection/model/slices/MyCollectionSlice";
import styles from "./handleRating.module.css";
import useAppDispatch from "hooks/useAppDispatch";
import MyButton from "../../shared/MyButton/MyButton";

const HandleRating = ({ movieId, setShowRateWindow }) => {
  const { dispatchFunction } = useAppDispatch();
  const [rating, setRating] = useState(null);
  const handleR = (item) => {
    dispatchFunction(() => MyCollectionActions.addRating({ movieId: movieId, rating: item.value }));
    setShowRateWindow(false);
  };

  const handleMouseEnter = (value) => {
    setRating(value);
  };

  const handleMouseLeave = () => {
    setRating(null);
  };

  const ratingsData = [
    { value: 1, emoji: "😖", description: "Ужасно" },
    { value: 2, emoji: "😞", description: "Плохо" },
    { value: 3, emoji: "😐", description: "Средне" },
    { value: 4, emoji: "😊", description: "Хорошо" },
    { value: 5, emoji: "😃", description: "Отлично" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {ratingsData.map((item) => (
          <span
            key={item.value}
            className={styles.smiles}
            onMouseEnter={() => handleMouseEnter(item.value)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleR(item, item)}
          >
            {rating && rating >= item.value ? item.emoji : "😐"}
          </span>
        ))}
        <MyButton styles={styles.cancelBtn} handler={() => setShowRateWindow()}>
          Отменить
        </MyButton>
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
