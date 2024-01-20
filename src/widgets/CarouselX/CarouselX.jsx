import React, { memo } from "react";
import styles from "./carouselX.module.css";

const CarouselX = memo(({ wrapper, data }) => {
  let currentPosition = 0;
  let count = 0;

  function goForwardCarousel() {
    count++;
    currentPosition -= 100;
    if (count >= data) {
      currentPosition = 0;
      count = 0;
    }
    wrapper.style.transform = `translateX(${currentPosition}%)`;
  }

  function goBackCarousel() {
    if (count === 0) {
      currentPosition -= data * 100 - 100;
      count = data - 1;
      console.log(count, data);
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
