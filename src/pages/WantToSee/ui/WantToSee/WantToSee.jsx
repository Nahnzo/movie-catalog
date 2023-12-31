import { ROUTES } from "shared/lib/config/routes";
import { useEffect, useState, useRef, memo } from "react";
import { useDataLength } from "shared/lib/hooks/useDataLength";
import { WantToSeeActions } from "../../model/slices/WantToSeeSlice";
import { useSelector, useDispatch } from "react-redux";
import { getMovieForWantToSee } from "../../model/selectors/getMovieForWantToSee";
import { WantToSeeCard } from "entities/CardMovie/index";
import { getFirstMovie } from "../../model/selectors/getFirstMovie";
import MyButton from "shared/ui/MyButton/MyButton";
import CarouselX from "widgets/CarouselX/CarouselX";
import Footer from "shared/ui/Footer/Footer";
import Navbar from "shared/ui/Navbar/Navbar";
import useLocalStorageData from "shared/lib/hooks/useLocalStorage";
import HeartIcon from "shared/assets/heart-icon.svg";
import ListReviewIcon from "shared/assets/list-review-icon.svg";
import Svg from "shared/ui/Svg/Svg";
import {
  LOCAL_STORAGE_MY_REVIEWS,
  LOCAL_STORAGE_MY_COLLECTION,
  LOCAL_STORAGE_WANT_TO_SEE,
} from "shared/lib/const/const";
import styles from "./wantToSee.module.css";
import Header from "../../../../shared/ui/Header/Header";

const WantToSee = memo(() => {
  useLocalStorageData([LOCAL_STORAGE_WANT_TO_SEE, LOCAL_STORAGE_MY_REVIEWS, LOCAL_STORAGE_MY_COLLECTION]);
  const { wantToSeeLength, myCollectionLength, myReviewsLength } = useDataLength();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const ref = useRef(null);
  const wrapper = ref.current;
  const dispatch = useDispatch();
  const movies = useSelector(getMovieForWantToSee);
  const firstMovie = useSelector(getFirstMovie);

  useEffect(() => {
    setSelectedMovie(firstMovie);
  }, [firstMovie]);

  if (wantToSeeLength) {
    return (
      <section className={styles.main}>
        <Header />
        {/* <nav className={styles.header}>
          <Navbar path={ROUTES.home}>Ha главную</Navbar>
          <Navbar path={ROUTES.myCollection} dataLength={myCollectionLength}>
            Моя коллекция
            <Svg path={HeartIcon} styles={styles.svg} viewBox="-30 -15 180 130" />
          </Navbar>
          <Navbar path={ROUTES.myReviews} dataLength={myReviewsLength}>
            Мои рецензии
            <Svg path={ListReviewIcon} styles={styles.svg} viewBox="-200 -10 890 500" />
          </Navbar>
          <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
          <MyButton styles={`${styles.deleteAll}`} handler={() => dispatch(WantToSeeActions.clearAll())}>
            Очистить список ({wantToSeeLength})
          </MyButton>
        </nav> */}
        <div className={styles.container}>
          {selectedMovie && <WantToSeeCard firstMovie={selectedMovie} />}
          <div className={styles.wrapperCollection} ref={ref}>
            {movies.map((item) => (
              <div
                className={styles.card}
                key={item.id}
                style={{ backgroundImage: `url(${item.poster.url})` }}
                onClick={() => setSelectedMovie(item)}
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
      <section className={styles.mainEmpty}>
        <Header />
        {/* <nav className={styles.header}>
          <Navbar path={ROUTES.home}>Ha главную</Navbar>
          <Navbar path={ROUTES.myCollection} dataLength={myCollectionLength}>
            Моя коллекция
            <Svg path={HeartIcon} styles={styles.svg} viewBox="-30 -15 180 130" />
          </Navbar>
          <Navbar path={ROUTES.myReviews} dataLength={myReviewsLength}>
            Мои рецензии
            <Svg path={ListReviewIcon} styles={styles.svg} viewBox="-200 -10 890 500" />
          </Navbar>
          <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
        </nav> */}
        <h1> Список пуст</h1>
        <Footer />
      </section>
    );
  }
});

export default WantToSee;
