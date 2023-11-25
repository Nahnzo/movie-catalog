import { useSelector, useDispatch } from "react-redux";
import { memo, useEffect } from "react";
import { getMovie } from "../model/slices/MovieSlice";
import { getAllMovie } from "../model/selectors/getAllMovie/getAllMovie";
import { MovieCard } from "entities/CardMovie/index";
import Skeleton from "shared/ui/Skeleton/Skeleton";
import styles from "./fetchMovie.module.css";

const skeletons = Array(20)
  .fill()
  .map((_, index) => index + 1);

const FetchMovie = memo(() => {
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
        {skeletons.map((item) => (
          <Skeleton width={200} height={300} key={item} />
        ))}
      </div>
    );
  }
});

export default FetchMovie;
