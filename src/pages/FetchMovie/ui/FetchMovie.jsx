import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovie } from "../model/slices/MovieSlice";
import { getAllMovie } from "../model/selectors/getAllMovie/getAllMovie";
import { MovieCard } from "entities/CardMovie/index";
import Loader from "shared/ui/Loader/Loader";
import styles from "./fetchMovie.module.css";

const FetchMovie = () => {
  const data = useSelector(getAllMovie);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data?.length) {
      dispatch(getMovie());
    }
  }, [data, dispatch]);
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
