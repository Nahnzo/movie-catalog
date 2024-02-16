import { GetFilmBySearch } from "features/GetFilmBySearch";
import Sidebar from "shared/ui/Sidebar/Sidebar";
import Header from "features/Header/ui/Header";
import Slider from "widgets/Slider/Slider";
import styles from "./reviewsPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, getMoviesForReviews } from "../model/selectors/getMoviesForReviews";
import { ReviewArea } from "features/ReviewArea/index";
import { useEffect, useState } from "react";
import { ReviewActions } from "../model/slices/ReviewSlice";
const ReviewsPage = () => {
  const movies = useSelector(getMoviesForReviews);
  console.log(movies);
  // const getAllFromCollections = useSelector(getAllMovies);
  // const getAllFromCollections = useSelector((state) => state.arrayReviews.arrayReviews);
  // console.log(getAllFromCollections);
  // const [selectedMovie, setSelectedMovie] = useState(null);
  const backgroundImage = movies[0]?.poster?.previewUrl || movies[0]?.poster;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (getAllFromCollections.length) {
  //     setSelectedMovie(getAllFromCollections[0]);
  //     dispatch(ReviewActions.addAllInitialMovie(getAllFromCollections));
  //   }
  // }, [dispatch, getAllFromCollections]);

  if (true) {
    return (
      <section className={styles.main}>
        <Header>
          <GetFilmBySearch placeholder="Найдите ваш отзыв" />
        </Header>
        <div className={styles.mainWrapper}>
          <img className={styles.img} src={backgroundImage} />
          <div className={styles.reviewBlock}>
            <ReviewArea movie={movies[0]} />{" "}
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
    return <h1>Список пуст</h1>;
  }
};

export default ReviewsPage;
