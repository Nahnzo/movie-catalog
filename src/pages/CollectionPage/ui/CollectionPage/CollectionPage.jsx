import { routes } from "shared/lib/config/routes";
import { useSelector, useDispatch } from "react-redux";
import { MyCollectionActions } from "../../model/slices/MyCollectionSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeEntireListCollection } from "shared/lib/config/movieService";
import { GetFilmBySearch } from "features/GetFilmBySearch";
import { useModal } from "shared/lib/hooks/useModal";
import { getMovieForCollection } from "../../model/selectors/getMovieData";
import { useSetResultBySearch } from "shared/lib/hooks/useSetResultBySearch";
import { getIsAuth, getUserId } from "../../model/selectors/getUserData";
import Sidebar from "shared/ui/Sidebar/index.js";
import Footer from "shared/ui/Footer/Footer";
import Button from "shared/ui/Button/Button";
import Slider from "widgets/Slider/Slider";
import Header from "features/Header/ui/Header";
import CollectionCard from "../CollectionCard/CollectionCard";
import ModalResultMovies from "widgets/ModalResultMovies/ModalResultMovies";
import styles from "./collectionPage.module.scss";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getMovieForCollection);
  const navigate = useNavigate();
  const id = useSelector(getUserId);
  const isAuth = useSelector(getIsAuth);

  const { isOpened, handleModal } = useModal();
  const setMovie = (item) => {
    dispatch(MyCollectionActions.setMovieBySearch(item));
  };
  const { search, filteredBySearchMovie } = useSetResultBySearch(movies, handleModal, setMovie);

  const handleCollection = async () => {
    dispatch(MyCollectionActions.clearAll());
    removeEntireListCollection(id, "myCollection");
  };

  useEffect(() => {
    if (!localStorage.getItem("userEmail")) {
      navigate(routes.home);
    }
  }, [navigate, isAuth, movies]);

  const handleCard = (item) => {
    dispatch(MyCollectionActions.setMovieBySearch(item));
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
      <Header>
        <GetFilmBySearch placeholder="Что найти в коллекции?" handleMovie={search} />
        <ModalResultMovies
          movies={filteredBySearchMovie}
          isOpen={isOpened}
          onClose={handleModal}
          styles={styles.modal}
          handleCard={handleCard}
        />
      </Header>
      {movies.length && (
        <Button styles={styles.deleteEntireList} handler={() => handleCollection()}>
          Очистить список ({movies.length})
        </Button>
      )}
      <div className={styles.mainWrapper}>
        <Sidebar />
        {/* <div className={styles.prevAndNextMovies}>
          <p className={styles.prevMovie}>{movies[0].name}</p>
          <p className={styles.nextMovie}>{movies[1].name}</p>
        </div> */}
        <Slider
          width="80%"
          height="80%"
          sizeCard={1800}
          itemsPerPage={1}
          snowButtons={movies.length > 1 ? true : false}
        >
          {movies.map((item) => (
            <CollectionCard movie={item} key={item.id} />
          ))}
        </Slider>
      </div>
      <Footer />
    </section>
  );
};

export default CollectionPage;
