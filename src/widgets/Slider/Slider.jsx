import { useState, useRef } from "react";
import styles from "./slider.module.scss";

const Slider = ({ width, height, children, sizeCard, itemsPerPage = 10, snowButtons }) => {
  const refWrapper = useRef(null);
  const [startIndex, setStartIndex] = useState(0);

  const totalPages = Math.ceil(children.length / itemsPerPage);

  const goForward = () => {
    if (startIndex + itemsPerPage < children.length) {
      setStartIndex((prevIndex) => prevIndex + itemsPerPage);
    } else {
      setStartIndex(0);
    }
  };

  const goBack = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex((prevIndex) => prevIndex - itemsPerPage);
    } else {
      setStartIndex((totalPages - 1) * itemsPerPage);
    }
  };

  const style = {
    width: width,
    height: height,
    transform: `translateX(-${startIndex * sizeCard}px)`,
  };

  return (
    <>
      <div style={style} className={styles.wrapper} ref={refWrapper}>
        {children}
      </div>
      {snowButtons && (
        <div className={styles.buttons}>
          <button onClick={goBack} className={styles.handleBtn}>
            {"<"}
          </button>
          <button onClick={goForward} className={styles.handleBtn}>
            {">"}
          </button>
        </div>
      )}
    </>
  );
};

export default Slider;
