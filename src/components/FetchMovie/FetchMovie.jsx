import styles from "./fetchMovie.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovie } from "../../Slices/MovieSlice";
import MovieCard from "../MovieCard/MovieCard";

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
