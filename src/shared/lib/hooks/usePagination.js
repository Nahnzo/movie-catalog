import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getMovie } from "pages/MainPage/model/api/getMovie";
import { LOCAL_STORAGE_USER_NUMBER_PAGINATION } from "../const/const";

export const usePagination = (moviesPerPage = 18, data) => {
  const isSearch = localStorage.getItem("isSearch");
  const userPaginationNumber = localStorage.getItem(LOCAL_STORAGE_USER_NUMBER_PAGINATION);
  const [currentPage, setCurrentPage] = useState(userPaginationNumber || 1);

  const dispatch = useDispatch();

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = data?.slice(isSearch ? 0 : indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = useCallback(
    (page) => {
      localStorage.setItem(LOCAL_STORAGE_USER_NUMBER_PAGINATION, page);
      dispatch(getMovie({ page: page, limit: moviesPerPage * page }));
      setCurrentPage(page);
    },
    [dispatch, moviesPerPage]
  );

  useEffect(() => {
    localStorage.removeItem("isSearch");
    localStorage.setItem(LOCAL_STORAGE_USER_NUMBER_PAGINATION, currentPage);
    if (!data?.length) {
      dispatch(
        getMovie({
          page: Number(localStorage.getItem(LOCAL_STORAGE_USER_NUMBER_PAGINATION)) || 1,
          limit: Number(localStorage.getItem(LOCAL_STORAGE_USER_NUMBER_PAGINATION)) * 25 || 25,
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
