import { routes } from "shared/lib/config/routes";
import { useEffect, useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { WantToSeeActions } from "../../model/slices/WantToSeeSlice";
import { getMovieForWantToSee } from "../../model/selectors/getMovieForWantToSee";
import { getFirstMovie } from "../../model/selectors/getFirstMovie";
import { getIsUserAuth } from "../../model/selectors/getUserDataSelectors";
import { useNavigate } from "react-router-dom";
import { removeEntireListCollection } from "shared/lib/config/movieService";
import Button from "shared/ui/Button/Button";
import WantToSeeCard from "../WantToSeeCard/WantToSeeCard";
import Sidebar from "shared/ui/Sidebar/Sidebar";
import Footer from "shared/ui/Footer/Footer";
import styles from "./wantToSeePage.module.scss";
import Header from "shared/ui/Header/Header";
import Slider from "widgets/Slider/Slider";

const WantToSee = memo(() => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const dispatch = useDispatch();
  const movies = useSelector(getMovieForWantToSee);
  const firstMovie = useSelector(getFirstMovie);
  const navigate = useNavigate();
  const isAuth = useSelector(getIsUserAuth);
  const id = useSelector((state) => state.user.id);

  useEffect(() => {
    if (!localStorage.getItem("userEmail")) {
      navigate(routes.home);
    }
    setSelectedMovie(movies[movies.length - 1] && firstMovie);
  }, [firstMovie, isAuth, movies, navigate]);
  const handleCollection = async () => {
    dispatch(WantToSeeActions.clearAll());
    removeEntireListCollection(id, "wantToSee");
  };

  if (!movies.length) {
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
          <Button styles={`${styles.deleteEntireList}`} handler={() => handleCollection()}>
            Очистить список ({movies.length})
          </Button>
        </div>
        <Sidebar />
        <div className={styles.container}>
          {selectedMovie && <WantToSeeCard firstMovie={selectedMovie} />}
          <Slider width="100%" height="25%" sizeCard={160} snowButtons>
            {movies.map((item) => (
              <img
                className={styles.card}
                key={item.id}
                src={item.poster.previewUrl}
                alt={item.title}
                onClick={() => setSelectedMovie(item)}
              />
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </section>
  );
});

export default WantToSee;
