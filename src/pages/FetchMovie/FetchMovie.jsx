import styles from "./fetchMovie.module.css";
import MovieCard from "../../entities/MovieCard/MovieCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovie } from "../../Slices/MovieSlice";
import useAppDispatch from "../../hooks/useAppDispatch";

const FetchMovie = () => {
  const data = useSelector((state) => state.movie.movie.docs);
  const { dispatchFunction } = useAppDispatch();

  useEffect(() => {
    if (!data) {
      dispatchFunction(() => getMovie());
    }
  }, [data, dispatchFunction]);
  if (data) {
    return (
      <div className={styles.container}>
        {data.map((item) => (
          <MovieCard data={item} key={item.id} />
        ))}
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <h1>LOADING</h1>
      </div>
    );
  }
};

export default FetchMovie;
