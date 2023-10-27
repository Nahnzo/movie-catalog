import { ROUTES } from "../../../routes";
import { useEffect, useState, useRef } from "react";
import { useDataLength } from "hooks/useDataLength";
import { BiCameraMovie } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { clearAll } from "../../../Slices/WantToSeeSlice";
import MyButton from "../../../shared/MyButton/MyButton";
import WantToSeeCard from "../../../entities/WantToSeeCard/WantToSeeCard";
import CarouselX from "../../../widgets/CarouselX/CarouselX";
import Footer from "components/Footer/Footer";
import Navbar from "../../../shared/Navbar/Navbar";
import useAppDispatch from "hooks/useAppDispatch";
import useLocalStorageData from "hooks/useLocalStorage";
import styles from "./wantToSee.module.css";
import { useSelector } from "react-redux";
import { getMovieForWantToSee } from "../model/selectors/getMovieForWantToSee";

const WantToSee = () => {
  const ref = useRef(null);
  const { dispatchFunction } = useAppDispatch();
  const wrapper = ref.current;
  const data = useDataLength(["arrayReviews", "myCollection", "wantToSee"]);
  useLocalStorageData(["wantToSee", "myReviews", "myCollection"]);
  const movies = useSelector(getMovieForWantToSee);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
            handler={() => dispatchFunction(() => clearAll())}
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
        <CarouselX wrapper={wrapper} data={data} />
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
