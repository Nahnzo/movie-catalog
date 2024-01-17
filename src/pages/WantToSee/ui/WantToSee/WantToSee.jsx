import { ROUTES } from "shared/lib/config/routes";
import { useEffect, useState, useRef, memo } from "react";
import { useDataLength } from "shared/lib/hooks/useDataLength";
import { WantToSeeActions } from "../../model/slices/WantToSeeSlice";
import { useSelector, useDispatch } from "react-redux";
import { getMovieForWantToSee } from "../../model/selectors/getMovieForWantToSee";
import WantToSeeCard from "../WantToSeeCard/WantToSeeCard";
import { getFirstMovie } from "../../model/selectors/getFirstMovie";
import MyButton from "shared/ui/MyButton/MyButton";
import CarouselX from "widgets/CarouselX/CarouselX";
import Sidebar from "shared/ui/Sidebar/Sidebar";
import Footer from "shared/ui/Footer/Footer";
import useLocalStorageData from "shared/lib/hooks/useLocalStorage";
import {
  LOCAL_STORAGE_MY_REVIEWS,
  LOCAL_STORAGE_MY_COLLECTION,
  LOCAL_STORAGE_WANT_TO_SEE,
} from "shared/lib/const/const";
import styles from "./wantToSee.module.css";
import Header from "shared/ui/Header/Header";
import { getIsAuthUser, getIsLoadingUser } from "../../../MainPage";
import { useNavigate, useParams } from "react-router-dom";
import { removeEntireListCollection } from "shared/lib/config/movieService";

const WantToSee = memo(() => {
  useLocalStorageData([LOCAL_STORAGE_WANT_TO_SEE, LOCAL_STORAGE_MY_REVIEWS, LOCAL_STORAGE_MY_COLLECTION]);

  const { wantToSeeLength, myCollectionLength, myReviewsLength } = useDataLength();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const ref = useRef(null);
  const wrapper = ref.current;
  const dispatch = useDispatch();
  const movies = useSelector(getMovieForWantToSee);
  const firstMovie = useSelector(getFirstMovie);
  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuthUser);
  const id = useSelector((state) => state.user.id);

  useEffect(() => {
    if (!localStorage.getItem("userEmail")) {
      navigate(ROUTES.home);
    }
    setSelectedMovie(movies[movies.length - 1] && firstMovie);
  }, [firstMovie, isAuth, movies, navigate]);
  const handleCollection = async () => {
    dispatch(WantToSeeActions.clearAll());
    removeEntireListCollection(id, "wantToSee");
  };

  if (!wantToSeeLength) {
    return (
      <section className={styles.main}>
        <Header />
        <div className={styles.emptyWrapper}>
          <Sidebar />
          <h2 className={styles.emptyPage}>Список пуст</h2>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.main}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.wrapperBtn}>
          <MyButton styles={`${styles.deleteEntireList}`} handler={() => handleCollection()}>
            Очистить список ({wantToSeeLength})
          </MyButton>
        </div>
        <Sidebar />
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
      </div>
      {/* <CarouselX wrapper={wrapper} data={movies} /> */}
      <Footer />
    </section>
  );
});

export default WantToSee;
