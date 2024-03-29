import { routes } from "shared/lib/config/routes";
import { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { WantToSeeActions } from "../../model/slices/WantToSeeSlice";
import { getIsUserAuth, getUserId } from "../../model/selectors/getUserDataSelectors";
import { useNavigate } from "react-router-dom";
import { removeEntireListCollection } from "shared/lib/config/movieService";
import { GetFilmBySearch } from "features/GetFilmBySearch";
import { useModal } from "shared/lib/hooks/useModal";
import { getFirstMovie, getMovieForWantToSee } from "../../model/selectors/getMovies";
import { useSetResultBySearch } from "shared/lib/hooks/useSetResultBySearch";
import { useResize } from "shared/lib/hooks/useResize";
import Button from "shared/ui/Button/Button";
import WantToSeeCard from "../WantToSeeCard/WantToSeeCard";
import Sidebar from "shared/ui/Sidebar/index.js";
import Footer from "shared/ui/Footer/Footer";
import Header from "features/Header/ui/Header";
import Slider from "widgets/Slider/Slider";
import ModalResultMovies from "widgets/ModalResultMovies/ModalResultMovies";
import styles from "./wantToSeePage.module.scss";

const WantToSeePage = memo(() => {
  const { isOpened, handleModal } = useModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector(getMovieForWantToSee);
  const firstMovie = useSelector(getFirstMovie);
  const isAuth = useSelector(getIsUserAuth);
  const id = useSelector(getUserId);
  const size = useResize();
  const { search, selectedMovie, filteredBySearchMovie, setSelectedMovie } = useSetResultBySearch(movies, handleModal);

  useEffect(() => {
    if (!localStorage.getItem("userEmail")) {
      navigate(routes.home);
    }
    setSelectedMovie(movies[movies.length - 1] && firstMovie);
  }, [firstMovie, isAuth, movies, navigate]);

  const deleteEntireList = async () => {
    dispatch(WantToSeeActions.clearAll());
    removeEntireListCollection(id, "wantToSee");
  };

  if (!movies.length) {
    return (
      <section className={styles.main}>
        <Header>
          <GetFilmBySearch placeholder="Что найти в коллекции?" handleMovie={search} />
        </Header>
        <div className={styles.emptyWrapper}>
          <Sidebar />
          <h2 className={styles.emptyPage}>Список пуст</h2>
        </div>
      </section>
    );
  }
  return (
    <section className={styles.main}>
      <ModalResultMovies
        movies={filteredBySearchMovie}
        isOpen={isOpened}
        onClose={handleModal}
        handleCard={setSelectedMovie}
      />
      <Header>
        <GetFilmBySearch placeholder="Что найти в коллекции?" handleMovie={search} />
      </Header>
      <div className={styles.wrapper}>
        <div className={styles.wrapperBtn}>
          <Button styles={styles.deleteEntireList} handler={() => deleteEntireList()}>
            Очистить список ({movies.length})
          </Button>
        </div>
        <Sidebar />
        <div className={styles.container}>{selectedMovie && <WantToSeeCard firstMovie={selectedMovie} />}</div>
        <Slider width="100%" height="25%" sizeCard={160} snowButtons itemsPerPage={Math.floor(size / 160)}>
          {movies.map((item) => (
            <img
              className={styles.card}
              key={item.id}
              src={item.poster?.previewUrl || item.poster}
              alt={item.title}
              onClick={() => setSelectedMovie(item)}
            />
          ))}
        </Slider>
      </div>
      {/* <Footer /> */}
    </section>
  );
});

export default WantToSeePage;
