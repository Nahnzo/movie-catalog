/* eslint-disable react/prop-types */
import styles from "./handleReview.module.css";

const HandleReview = ({ title, rate }) => {
  return <button className={rate ? styles.rwBtn : styles.rwBtnAfter}>{title}</button>;
};

export default HandleReview;
