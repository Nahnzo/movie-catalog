import React, { memo } from "react";
import styles from "./carouselX.module.css";

const CarouselX = memo(({ wrapper, data }) => {
  console.log("render");
  let currentPosition = 0;
  let count = 0;

  function goForwardCarousel() {
    let lengthMovie = data.length / 10;
    count++;

    currentPosition -= 100;
    if (count >= lengthMovie) {
      currentPosition = 0;
      count = 0;
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
        <h1>←</h1>
      </button>
      <button onClick={() => goForwardCarousel()} className={styles.handleBtn}>
        <h1>→</h1>
      </button>
    </div>
  );
});

export default CarouselX;
