import { ROUTES } from "../../../routes";
import { useEffect, useState, useRef } from "react";
import { useDataLength } from "shared/lib/hooks/useDataLength";
import { BiCameraMovie } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { WantToSeeActions } from "../model/slices/WantToSeeSlice";
import { useSelector, useDispatch } from "react-redux";
import { getMovieForWantToSee } from "../model/selectors/getMovieForWantToSee";
import MyButton from "shared/ui/MyButton/MyButton";
import { WantToSeeCard } from "entities/CardMovie/index";
import CarouselX from "../../../widgets/CarouselX/CarouselX";
import Footer from "components/Footer/Footer";
import Navbar from "shared/ui/Navbar/Navbar";
import useLocalStorageData from "shared/lib/hooks/useLocalStorage";
import styles from "./wantToSee.module.css";

const WantToSee = () => {
  useLocalStorageData(["wantToSee", "myReviews", "myCollection"]);
  const data = useDataLength(["arrayReviews", "myCollection", "wantToSee"]);
  const ref = useRef(null);
  const wrapper = ref.current;
  const [selectedMovie, setSelectedMovie] = useState(null);
  const dispatch = useDispatch();
  const movies = useSelector(getMovieForWantToSee);

  useEffect(() => {
    setSelectedMovie(movies[0]);
  }, [movies]);
  const showFirst = (movie) => {
    setSelectedMovie(movie);
  };

  if (data["wantToSee"]) {
    return (
      <section className={styles.main}>
        <nav className={styles.header}>
          <Navbar path={ROUTES.home}>Ha главную</Navbar>
          <Navbar
            path={ROUTES.myCollection}
            icon={<BiCameraMovie />}
            dataLength={data["myCollection"]}
          >
            Моя коллекция
          </Navbar>
          <Navbar path={ROUTES.myReviews} icon={<CiViewList />} dataLength={data["arrayReview"]}>
            Мои рецензии
          </Navbar>
          <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
          <MyButton
            styles={`${styles.deleteAll}`}
            handler={() => dispatch(() => WantToSeeActions.clearAll())}
          >
            Очистить список ({data["wantToSee"]})
          </MyButton>
        </nav>
        <div className={styles.container}>
          {selectedMovie && <WantToSeeCard firstMovie={selectedMovie} />}
          <div className={styles.wrapperCollection} ref={ref}>
            {movies.map((item) => (
              <div
                className={styles.card}
                key={item.id}
                style={{ backgroundImage: `url(${item.poster.url})` }}
                onClick={() => showFirst(item)}
              ></div>
            ))}
          </div>
        </div>
        <CarouselX wrapper={wrapper} data={movies} />
        <Footer />
      </section>
    );
  } else {
    return (
      <section className={styles.main}>
        <nav className={styles.header}>
          <Navbar path={ROUTES.home}>Ha главную</Navbar>
          <Navbar
            path={ROUTES.myCollection}
            icon={<BiCameraMovie />}
            dataLength={data["myCollection"]}
          >
            Моя коллекция
          </Navbar>
          <Navbar path={ROUTES.myReviews} icon={<CiViewList />} dataLength={data["arrayReviews"]}>
            Мои рецензии
          </Navbar>
          <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
        </nav>
        <h1 style={{ margin: "50px" }}> Список пуст</h1>
        <div className={styles.footer}>
          <Footer />
        </div>
      </section>
    );
  }
};

export default WantToSee;
