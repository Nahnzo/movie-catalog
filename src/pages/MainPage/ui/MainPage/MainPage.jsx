import { memo } from "react";
import { MovieCard } from "entities/CardMovie/index";
import { usePagination } from "shared/lib/hooks/usePagination";
import { MOVIES_PER_PAGE } from "shared/lib/const/const";
import Skeleton from "shared/ui/Skeleton/Skeleton";
import Pagination from "../Pagination/Pagination";
import styles from "./MainPage.module.css";

const skeletons = Array(24)
  .fill()
  .map((_, index) => index + 1);

const MainPage = memo(() => {
  const { currentPage, currentMovies, handlePageChange, totalMovies } =
    usePagination(MOVIES_PER_PAGE);

  if (totalMovies) {
    return (
      <>
        <div className={styles.container}>
          {currentMovies.map((item) => (
            <MovieCard data={item} key={item.id} />
          ))}
        </div>
        <Pagination
          moviesPerPage={MOVIES_PER_PAGE}
          totalMovies={totalMovies}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </>
    );
  } else {
    return (
      <div className={styles.container}>
        {skeletons.map((item) => (
          <Skeleton width={200} height={300} key={item} />
        ))}
      </div>
    );
  }
});

export default MainPage;
