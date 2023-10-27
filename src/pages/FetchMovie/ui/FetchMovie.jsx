import { useSelector } from "react-redux";
import { memo, useEffect } from "react";
import { getMovie } from "../../../Slices/MovieSlice";
import { getAllMovie } from "../model/selectors/getAllMovie/getAllMovie";
import MovieCard from "../../../entities/MovieCard/MovieCard";
import useAppDispatch from "hooks/useAppDispatch";
import Loader from "../../../widgets/Loader/Loader";
import styles from "./fetchMovie.module.css";

const FetchMovie = () => {
  const data = useSelector(getAllMovie);
  const { dispatchFunction } = useAppDispatch();
  useEffect(() => {
    if (!data?.length) {
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
        <Loader />
      </div>
    );
  }
};

export default FetchMovie;
