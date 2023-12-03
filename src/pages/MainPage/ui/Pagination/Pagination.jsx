import { memo } from "react";
import styles from "./pagination.module.css";

const Pagination = memo(({ totalMovies, moviesPerPage, onPageChange, currentPage }) => {
  const pages = Array.from({ length: Math.ceil(totalMovies / moviesPerPage) }, (_, i) => i + 1);

  return (
    <div className={styles.btnsWrapper}>
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber == currentPage ? styles.currentPage : styles.otherPages}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
});

export default Pagination;
