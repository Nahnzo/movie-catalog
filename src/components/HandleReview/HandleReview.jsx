/* eslint-disable react/prop-types */
import styles from "./handleReview.module.css";

const HandleReview = ({ title, rate, item, change }) => {
  return (
    <button
      className={rate ? styles.rwBtn : styles.rwBtnAfter}
      onClick={() => change((item) => !item)}
    >
      {title}
    </button>
  );
};

export default HandleReview;
