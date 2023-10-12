import { ROUTES } from "../../routes";
import { BiCameraMovie } from "react-icons/bi";
import { BsFolder2Open } from "react-icons/bs";
import styles from "./myReviews.module.css";
import CardForMyReviews from "../../entities/CardForMyReviews/CardForMyReviews";
import LeaveReview from "../../components/LeaveReview/LeaveReview";
import Navbar from "../../shared/Navbar/Navbar";
import useDataLength from "../../hooks/useDataLength";
import useAppSelector from "../../hooks/useAppSelector";
import CarouselX from "../../widgets/CarouselX/CarouselX";
import { useRef, useState, useEffect } from "react";
import MyButton from "../../shared/MyButton/MyButton";
import { deleteAll } from "../../Slices/ReviewSlice";
import useAppDispatch from "../../hooks/useAppDispatch";
import { getOnlyUniq } from "../../tools/getOnlyUniq";
import useLocalStorageData from "../../hooks/useLocalStorage";
import { useLocalStorageLength } from "../../hooks/useLocalStorageLength";

const MyReviews = () => {
  const { myCollection, wantToSee, arrayReview } = useDataLength();
  const { dispatchFunction } = useAppDispatch();
  const { data } = useAppSelector("arrayReview");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const ref = useRef(null);
  const wrapper = ref.current;
  useLocalStorageData("myReviews");
  const movieWithReviews = data.movies.filter(
    (item) => item.myReviews !== "Место для вашей рецензии" && item.myReviews !== ""
  );
  useEffect(() => {
    setSelectedMovie(arrayReview.movies[arrayReview.length - 1]);
  }, [arrayReview.length, arrayReview.movies]);

  const setFirst = (item) => {
    setSelectedMovie(item);
  };

  return (
    <section className={styles.main}>
      <section className={styles.header}>
        <nav className={styles.navigation}>
          <Navbar path={ROUTES.home}>На главную</Navbar>
          <Navbar
            path={ROUTES.wantToSee}
            icon={<BsFolder2Open />}
            dataLength={useLocalStorageLength("wantToSee")}
          >
            Хочу посмотреть
          </Navbar>
          <Navbar
            path={ROUTES.myCollection}
            icon={<BiCameraMovie />}
            dataLength={useLocalStorageLength("myCollection")}
          >
            Моя коллекция
          </Navbar>
          <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
          {arrayReview.length ? (
            <MyButton styles={styles.deleteAll} handler={() => dispatchFunction(() => deleteAll())}>
              Очистить список ({getOnlyUniq(data.movies)})
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
        {movieWithReviews.length && (
          <div className={styles.containerArrayReviews} ref={ref}>
            {movieWithReviews.map((movie) => (
              <div
                onClick={() => setFirst(movie)}
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
