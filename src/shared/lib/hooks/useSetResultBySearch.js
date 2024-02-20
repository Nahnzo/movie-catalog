import { useState } from "react";

export const useSetResultBySearch = (movies, handleModal, dispatchFn = null) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filteredBySearchMovie, setFilteredBySearchMovie] = useState(null);
  const search = (name) => {
    if (name.trim() === "") {
      return;
    }
    const regex = new RegExp(name, "i");
    const result = movies.filter((item) => regex.test(item.name) || regex.test(item.alternativeName));
    if (result.length === 0) {
      return;
    }
    if (result.length === 1) {
      if (dispatchFn) {
        dispatchFn(result[0]);
      } else {
        setSelectedMovie(result[0]);
      }
    } else {
      setFilteredBySearchMovie(result);
      handleModal();
    }
  };
  return {
    search,
    selectedMovie,
    filteredBySearchMovie,
    setSelectedMovie,
  };
};
