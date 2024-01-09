import { memo, useEffect } from "react";
import { MovieCard } from "entities/CardMovie/index";
import { usePagination } from "shared/lib/hooks/usePagination";
import { MOVIES_PER_PAGE } from "shared/lib/const/const";
import { useSelector } from "react-redux";
import { getIsLoadingMovie } from "../../model/selectors/getIsLoadingMovie/getIsLoadingMovie";
import { initialDataUser } from "shared/lib/config/getInitialDataUserSlice";
import { getIsAuthUser } from "../../model/selectors/getUserSelectors/getUserSelectors";
import { useDispatch } from "react-redux";
import Skeleton from "shared/ui/Skeleton/Skeleton";
import Pagination from "../Pagination/Pagination";
import Sidebar from "shared/ui/Sidebar/Sidebar";
import styles from "./MainPage.module.css";

const skeletons = Array(24)
  .fill()
  .map((_, index) => index + 1);

const MainPage = memo(() => {
  const { currentPage, currentMovies, handlePageChange } = usePagination(MOVIES_PER_PAGE);
  const isLoading = useSelector(getIsLoadingMovie);
  const isAuth = useSelector(getIsAuthUser);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.id);
  useEffect(() => {
    const localDataWantToSee = localStorage.getItem("WANT_TO_SEE");
    const localDataMyCollection = localStorage.getItem("MY_COLLECTION");
    if (!localDataWantToSee && !localDataMyCollection) {
      dispatch(initialDataUser(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <>
        <div className={styles.container}>
          {skeletons.map((item) => (
            <Skeleton width={200} height={300} key={item} />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.container}>
          {isAuth && <Sidebar />}
          {currentMovies?.map((item) => (
            <MovieCard data={item} key={item.id} />
          ))}
        </div>
        {/* <Pagination
          moviesPerPage={MOVIES_PER_PAGE}
          // хардкодим 250 из за ограничения API
          totalMovies={250}
          // ----
          onPageChange={handlePageChange}
          currentPage={currentPage}
        /> */}
      </>
    );
  }
});

export default MainPage;
