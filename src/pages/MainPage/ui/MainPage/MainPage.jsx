import { memo, useCallback, useEffect } from "react";
import { usePagination } from "shared/lib/hooks/usePagination";
import { MOVIES_PER_PAGE } from "shared/lib/const/const";
import { useSelector } from "react-redux";
import { getIsLoadingMovie } from "../../model/selectors/getIsLoadingMovie/getIsLoadingMovie";
import { initialDataUser } from "shared/lib/config/getInitialDataUserSlice";
import { getIsAuthUser, getUserId } from "../../model/selectors/getUserSelectors/getUserSelectors";
import { useDispatch } from "react-redux";
import { useModal } from "shared/lib/hooks/useModal";
import { getAllMovie } from "../../model/selectors/getAllMovie/getAllMovie";
import Button from "shared/ui/Button/Button";
import Skeleton from "shared/ui/Skeleton/Skeleton";
import Pagination from "../Pagination/Pagination";
import Sidebar from "shared/ui/Sidebar/Sidebar";
import styles from "./mainPage.module.scss";
import AuthForm from "features/AuthForm/ui/AuthForm";
import MovieList from "../MovieList/MovieList";

const skeletons = Array(24)
  .fill()
  .map((_, index) => index + 1);

const MainPage = memo(() => {
  const data = useSelector(getAllMovie);
  const { currentPage, currentMovies, handlePageChange } = usePagination(MOVIES_PER_PAGE, data);
  const isLoading = useSelector(getIsLoadingMovie);
  const isAuth = useSelector(getIsAuthUser);
  const id = useSelector(getUserId);
  const dispatch = useDispatch();

  const { isOpened, handleModal } = useModal();
  const onHandleModal = useCallback(() => {
    handleModal();
  }, [handleModal]);

  useEffect(() => {
    const localDataWantToSee = localStorage.getItem("WANT_TO_SEE");
    const localDataMyCollection = localStorage.getItem("MY_COLLECTION");
    const localDataMyReviews = localStorage.getItem("MY_REVIEWS");
    if (!localDataWantToSee && !localDataMyCollection && !localDataMyReviews) {
      dispatch(initialDataUser(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <section className={styles.wrapper}>
        <div className={styles.container}>
          {skeletons.map((item) => (
            <Skeleton width="15%" height={240} key={item} margin={25} />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className={styles.wrapper}>
        <AuthForm isOpened={isOpened} handleModal={onHandleModal} />
        {isAuth && <Sidebar />}
        <div className={styles.container}>
          <MovieList currentMovies={currentMovies} handleModal={handleModal} />
          {currentMovies?.length < MOVIES_PER_PAGE && (
            <Button handler={() => handlePageChange(currentPage)} styles={styles.buttonBack}>
              Назад к списку
            </Button>
          )}
        </div>
        {currentMovies?.length == MOVIES_PER_PAGE && (
          <Pagination
            moviesPerPage={MOVIES_PER_PAGE}
            // хардкодим 250 из за ограничения API
            totalMovies={250}
            // ----
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        )}
      </section>
    );
  }
});

export default MainPage;
