import { ROUTES } from "../../../routes";
import { getOnlyUniqMoviesLength } from "../model/services/getOnlyUniqMoviesLength/getOnlyUniqMoviesLength";
import { useDataLength } from "shared/lib/hooks/useDataLength";
import { useRef, useState, useEffect } from "react";
import { CardForMyReviews } from "entities/CardMovie";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ReviewActions } from "../model/slices/ReviewSlice";
import {
  getFilteredMovie,
  getFirsMovie,
  getMoviesForReviews,
} from "../model/selectors/getMoviesForReviews";
import useLocalStorageData from "shared/lib/hooks/useLocalStorage";
import MyButton from "shared/ui/MyButton/MyButton";
import LeaveReview from "components/LeaveReview/LeaveReview";
import Navbar from "shared/ui/Navbar/Navbar";
import CarouselX from "widgets/CarouselX/CarouselX";
import FilmIcon from "shared/assets/film-icon.svg";
import HeartIcon from "shared/assets/heart-icon.svg";
import Svg from "shared/ui/Svg/Svg";
import styles from "./myReviews.module.css";

const MyReviews = () => {
  useLocalStorageData(["wantToSee", "myReviews", "myCollection"]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const wrapper = ref.current;
  const data = useDataLength(["wantToSee", "myCollection"]);
  const movies = useSelector(getMoviesForReviews);
  const firstMovie = useSelector(getFirsMovie);
  const movieWithReviews = useSelector(getFilteredMovie);

  useEffect(() => {
    setSelectedMovie(firstMovie);
  }, [firstMovie]);

  return (
    <section className={styles.main}>
      <section className={styles.header}>
        <nav className={styles.navigation}>
          <Navbar path={ROUTES.home}>На главную</Navbar>
          <Navbar path={ROUTES.wantToSee} dataLength={data["wantToSee"]}>
            Хочу посмотреть
            <Svg path={FilmIcon} styles={styles.svg} viewBox="0 0 60 60" />
          </Navbar>
          <Navbar path={ROUTES.myCollection} dataLength={data["myCollection"]}>
            Моя коллекция
            <Svg path={HeartIcon} styles={styles.svg} viewBox="-30 -15 180 130" />
          </Navbar>
          <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
          {movies.length ? (
            <MyButton styles={styles.deleteAll} handler={() => dispatch(ReviewActions.deleteAll())}>
              Очистить список ({getOnlyUniqMoviesLength(movies)})
            </MyButton>
          ) : (
            ""
          )}
        </nav>
      </section>
      <LeaveReview />
      <div className={styles.wrapper}>
        {selectedMovie && <CardForMyReviews movie={selectedMovie} />}
      </div>
      <div className={styles.container}>
        {!movieWithReviews.length ? (
          <h2>Список пуст</h2>
        ) : (
          <div className={styles.containerArrayReviews} ref={ref}>
            {movieWithReviews.map((movie) => (
              <div
                onClick={() => setSelectedMovie(movie)}
                key={movie.id}
                className={styles.rCard}
                style={{
                  backgroundImage: `url(${movie.poster.url || movie.poster})`,
                }}
              ></div>
            ))}
            <CarouselX wrapper={wrapper} data={movieWithReviews} />
          </div>
        )}
      </div>
      <div className={styles.footer}>{/* <Footer /> */}</div>
    </section>
  );
};

export default MyReviews;
