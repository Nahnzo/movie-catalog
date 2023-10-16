import { ROUTES } from "../../routes";
import { BiCameraMovie } from "react-icons/bi";
import { deleteAll } from "../../Slices/ReviewSlice";
import { getOnlyUniq } from "../../tools/getOnlyUniq";
import { useDataLength } from "hooks/useDataLength";
import { useRef, useState, useEffect } from "react";
import { BsFolder2Open } from "react-icons/bs";
import MyButton from "../../shared/MyButton/MyButton";
import CardForMyReviews from "../../entities/CardForMyReviews/CardForMyReviews";
import LeaveReview from "components/LeaveReview/LeaveReview";
import Navbar from "../../shared/Navbar/Navbar";
import CarouselX from "../../widgets/CarouselX/CarouselX";
import useAppDispatch from "hooks/useAppDispatch";
import useLocalStorageData from "hooks/useLocalStorage";
import styles from "./myReviews.module.css";

const MyReviews = () => {
  const { dispatchFunction } = useAppDispatch();
  const data = useDataLength();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const ref = useRef(null);
  const wrapper = ref.current;
  useLocalStorageData("myReviews");
  const movieWithReviews = data.arrayReviews.movies.filter(
    (item) => item.myReviews !== "Место для вашей рецензии" && item.myReviews !== ""
  );
  useEffect(() => {
    setSelectedMovie(data.arrayReviews.movies[data.arrayReviews.length - 1]);
  }, [data.arrayReviews.length, data.arrayReviews.movies]);

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
            dataLength={data.wantToSee.length}
          >
            Хочу посмотреть
          </Navbar>
          <Navbar
            path={ROUTES.myCollection}
            icon={<BiCameraMovie />}
            dataLength={data.myCollection.length}
          >
            Моя коллекция
          </Navbar>
          <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
          {data.arrayReviews.length ? (
            <MyButton styles={styles.deleteAll} handler={() => dispatchFunction(() => deleteAll())}>
              Очистить список ({getOnlyUniq(data.arrayReviews.movies)})
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
