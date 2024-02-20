import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetFilmBySearch } from "features/GetFilmBySearch";
import { ReviewArea } from "features/ReviewArea/index";
import Header from "features/Header/ui/Header";
import { routes } from "shared/lib/config/routes";
import { useModal } from "shared/lib/hooks/useModal";
import Sidebar from "shared/ui/Sidebar/Sidebar";
import Button from "shared/ui/Button/Button";
import { removeEntireListCollection } from "shared/lib/config/movieService";
import Slider from "widgets/Slider/Slider";
import { useSetResultBySearch } from "shared/lib/hooks/useSetResultBySearch";
import ModalResultMovies from "widgets/ModalResultMovies/ModalResultMovies";
import { getMoviesForReviews } from "../model/selectors/getMoviesForReviews";
import { ReviewActions } from "../model/slices/ReviewSlice";
import { getIsUserAuth, getUserId } from "../model/selectors/getUserData";
import styles from "./reviewsPage.module.scss";

const ReviewsPage = () => {
  const { isOpened, handleModal } = useModal();

  const handleCard = (item) => {
    setSelectedMovie(item);
  };
  const deleteEntireCollection = async () => {
    setSelectedMovie(null);
    dispatch(ReviewActions.deleteAll());
    removeEntireListCollection(id, "myReviews");
  };

  const id = useSelector(getUserId);
  const isAuth = useSelector(getIsUserAuth);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem("userEmail")) {
      navigate(routes.home);
    }
    setSelectedMovie(movies[0]);
  }, [isAuth]);

  const movies = useSelector(getMoviesForReviews);

  const { search, selectedMovie, filteredBySearchMovie, setSelectedMovie } = useSetResultBySearch(movies, handleModal);
  const backgroundImage = selectedMovie?.poster?.previewUrl || selectedMovie?.poster;

  useEffect(() => {
    dispatch(ReviewActions.addAllInitialMovie(movies));
  }, [dispatch, movies[0], movies]);

  if (selectedMovie) {
    return (
      <section className={styles.main}>
        <Header>
          <GetFilmBySearch placeholder="Найдите ваш отзыв" handleMovie={search} />
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
          <GetFilmBySearch placeholder="Найдите ваш отзыв" handleMovie={search} />
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
