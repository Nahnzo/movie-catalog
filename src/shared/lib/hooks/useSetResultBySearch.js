import { useState, useCallback } from "react";

const useSetResultBySearch = () => {
  const [filteredBySearchMovie, setFilteredBySearchMovie] = useState(null);

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
      dispatch(MyCollectionActions.setMovieBySearch(result[0]));
    } else {
      setFilteredBySearchMovie(result);
      handleModal();
    }
  },
    [dispatch, handleModal, movies];
};

export default useSetResultBySearch;
