import { GetFilmBySearch } from "features/GetFilmBySearch";
import Sidebar from "shared/ui/Sidebar/Sidebar";
import Header from "features/Header/ui/Header";
import Slider from "widgets/Slider/Slider";
import ModalResultMovies from "widgets/ModalResultMovies/ModalResultMovies";
import styles from "./reviewsPage.module.scss";
import Button from "shared/ui/Button/Button";
import { routes } from "shared/lib/config/routes";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, getFirsMovie, getMoviesForReviews } from "../model/selectors/getMoviesForReviews";
import { ReviewArea } from "features/ReviewArea/index";
import { useModal } from "shared/lib/hooks/useModal";
import { removeEntireListCollection } from "shared/lib/config/movieService";
import { useCallback, useEffect, useState } from "react";
import { ReviewActions } from "../model/slices/ReviewSlice";
import { useNavigate } from "react-router-dom";

const ReviewsPage = () => {
  const id = useSelector((state) => state.user.id);
  const [filteredBySearchMovie, setFilteredBySearchMovie] = useState(null);
  const movies = useSelector(getMoviesForReviews);
  const firstMovie = useSelector(getFirsMovie);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const backgroundImage = selectedMovie?.poster?.previewUrl || selectedMovie?.poster;
  const isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();
  const { isOpened, handleModal } = useModal();

  const setResultBySearch = useCallback(
    (name) => {
      if (name.trim() === "") {
        return;
      }
      const regex = new RegExp(name, "i");
      const result = movies.filter((item) => regex.test(item.name) || regex.test(item.alternativeName));
      if (result.length === 0) {
        return;
      }
      if (result.length === 1) {
        setSelectedMovie(result[0]);
      } else {
        setFilteredBySearchMovie(result);
        handleModal();
      }
    },
    [handleModal, movies]
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem("userEmail")) {
      navigate(routes.home);
    }
    setSelectedMovie(firstMovie);
  }, [isAuth]);

  useEffect(() => {
    dispatch(ReviewActions.addAllInitialMovie(movies));
  }, [dispatch, firstMovie, movies]);

  const handleCard = (item) => {
    setSelectedMovie(item);
  };
  const deleteEntireCollection = async () => {
    setSelectedMovie(null);
    dispatch(ReviewActions.deleteAll());
    removeEntireListCollection(id, "myReviews");
  };

  if (selectedMovie) {
    return (
      <section className={styles.main}>
        <Header>
          <GetFilmBySearch placeholder="Найдите ваш отзыв" handleMovie={setResultBySearch} />
          <ModalResultMovies
            movies={filteredBySearchMovie}
            isOpen={isOpened}
            onClose={handleModal}
            styles={styles.modal}
            handleCard={handleCard}
          />
        </Header>
        {movies.length && (
          <Button styles={styles.deleteEntireList} handler={() => deleteEntireCollection()}>
            Очистить список ({movies.length})
          </Button>
        )}
        <div className={styles.mainWrapper}>
          <img className={styles.img} src={backgroundImage} />
          <div className={styles.reviewBlock}>
            <ReviewArea movie={selectedMovie} />
          </div>
          <div className={styles.sliders}>
            <Slider width="100%" height="100%" sizeCard={160} snowButtons>
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
          <Sidebar />
        </div>
      </section>
    );
  } else {
    return (
      <section className={styles.main}>
        <Header>
          <GetFilmBySearch placeholder="Найдите ваш отзыв" />
        </Header>
        <div className={styles.emptyWrapper}>
          <Sidebar />
          <h2 className={styles.emptyPage}>Список пуст</h2>
        </div>
      </section>
    );
  }
};

export default ReviewsPage;
