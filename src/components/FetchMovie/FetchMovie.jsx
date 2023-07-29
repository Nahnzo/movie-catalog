import styles from "./fetchMovie.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMovie } from "../../Slices/MovieSlice";

const FetchMovie = () => {
  const data = useSelector((state) => state.movie.movie.docs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      dispatch(getMovie());
    }
  }, []);
  if (data) {
    return (
      <div className={styles.container}>
        {data.map((item) => (
          <MovieCard data={item} key={item.id} />
        ))}
      </div>
    );
  } else {
    return <p>Load</p>;
  }
};

export default FetchMovie;
