import { GetFilmBySearch } from "features/GetFilmBySearch";
import Sidebar from "shared/ui/Sidebar/Sidebar";
import Header from "features/Header/ui/Header";
import Slider from "widgets/Slider/Slider";
import styles from "./reviewsPage.module.scss";
import { routes } from "shared/lib/config/routes";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, getFirsMovie, getMoviesForReviews } from "../model/selectors/getMoviesForReviews";
import { ReviewArea } from "features/ReviewArea/index";
import { useCallback, useEffect, useState } from "react";
import { ReviewActions } from "../model/slices/ReviewSlice";
import { useNavigate } from "react-router-dom";

const ReviewsPage = () => {
  const movies = useSelector(getMoviesForReviews);
  const firstMovie = useSelector(getFirsMovie);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const backgroundImage = selectedMovie?.poster?.previewUrl || selectedMovie?.poster;
  const isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();

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
        // setFilteredBySearchMovie(result);
      }
    },
    [movies]
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

  if (selectedMovie) {
    return (
      <section className={styles.main}>
        <Header>
          <GetFilmBySearch placeholder="Найдите ваш отзыв" handleMovie={setResultBySearch} />
        </Header>
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
      </section>
    );
  }
};

export default ReviewsPage;
