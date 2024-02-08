import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "pages/MainPage/model/api/getMovie";
import { getAllMovie } from "pages/MainPage/model/selectors/getAllMovie/getAllMovie";
import { LOCAL_STORAGE_USER_NUMBER_PAGINATION } from "../../lib/const/const";

export const usePagination = (moviesPerPage = 18) => {
  const [currentPage, setCurrentPage] = useState(localStorage.getItem(LOCAL_STORAGE_USER_NUMBER_PAGINATION) || 1);

  const data = useSelector(getAllMovie);
  const dispatch = useDispatch();

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = data?.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = useCallback(
    (page) => {
      localStorage.setItem(LOCAL_STORAGE_USER_NUMBER_PAGINATION, page);
      dispatch(getMovie({ page: page, limit: 18 * page }));
      setCurrentPage(page);
    },
    [dispatch]
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_USER_NUMBER_PAGINATION, currentPage);
    if (!data?.length) {
      dispatch(
        getMovie({
          page: Number(localStorage.getItem(LOCAL_STORAGE_USER_NUMBER_PAGINATION)) || 1,
          limit: Number(localStorage.getItem(LOCAL_STORAGE_USER_NUMBER_PAGINATION)) * 18 || 18,
        })
      );
    }
  }, [data, dispatch, currentPage]);

  return {
    currentPage,
    currentMovies,
    handlePageChange,
  };
};
