/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./carouselX.module.css";

const CarouselX = ({ wrapper, data }) => {
  const [text, setText] = useState("Вперед");
  let currentPosition = 0;
  let count = 0;

  function goForwardCarousel() {
    let lengthMovie = data.length / 10;
    count++;
    currentPosition -= 100;

    if (Math.abs(currentPosition) > lengthMovie * 100) {
      setText("В начало");
    }
    if (count >= lengthMovie) {
      currentPosition = 0;
      count = 0;
      setText("Вперед");
    }
    wrapper.style.transform = `translateX(${currentPosition}%)`;
  }

  function goBackCarousel() {
    let lengthMovie = Math.floor(data.length / 10);
    if (count === 0) {
      currentPosition -= lengthMovie * 100;
      count = lengthMovie;
    } else {
      count--;
      currentPosition += 100;
    }
    wrapper.style.transform = `translateX(${currentPosition}%)`;
  }
  return (
    <div className={styles.wrapperBtn}>
      <button onClick={() => goBackCarousel()} className={styles.handleBtn}>
        <h1>←</h1> назад
      </button>
      <button onClick={() => goForwardCarousel()} className={styles.handleBtn}>
        {text} <h1>→</h1>
      </button>
    </div>
  );
};

export default CarouselX;
