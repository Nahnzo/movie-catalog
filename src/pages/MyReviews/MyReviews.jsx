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

const MyReviews = () => {
  const { myCollection, wantToSee, arrayReview } = useDataLength();
  const { data } = useAppSelector("arrayReview");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const ref = useRef(null);
  const wrapper = ref.current;
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
          <Navbar path={ROUTES.wantToSee} icon={<BsFolder2Open />} dataLength={wantToSee.length}>
            Хочу посмотреть
          </Navbar>
          <Navbar
            path={ROUTES.myCollection}
            icon={<BiCameraMovie />}
            dataLength={myCollection.length}
          >
            Моя коллекция
          </Navbar>
          <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
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
