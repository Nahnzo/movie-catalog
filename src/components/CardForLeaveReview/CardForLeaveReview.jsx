/* eslint-disable react/prop-types */
import React from "react";

const CardForLeaveReview = ({ movie }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${movie.poster.url})` }}></div>
  );
};

export default CardForLeaveReview;
