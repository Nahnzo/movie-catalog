/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRating } from "../../Slices/MyCollectionSlice";

const HandleRating = ({ movieId, setShowRateWindow }) => {
  const [rating, setRating] = useState(null);
  const dispatch = useDispatch();
  const handleR = (item) => {
    dispatch(addRating({ movieId: movieId, rating: item.value }));
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

  const smileyStyle = {
    fontSize: "30px",
    width: "35px",
    textAlign: "center",
    cursor: "pointer",
  };

  return (
    <div>
      <div>
        {ratingsData.map((item) => (
          <span
            key={item.value}
            style={smileyStyle}
            onMouseEnter={() => handleMouseEnter(item.value)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleR(item, item)}
          >
            {rating && rating >= item.value ? item.emoji : "😐"}
          </span>
        ))}
      </div>
      {rating && (
        <p>
          Оценка: {rating} ({ratingsData[rating - 1].description})
        </p>
      )}
    </div>
  );
};

export default HandleRating;
