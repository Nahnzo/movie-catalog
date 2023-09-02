import useAppSelector from "./useAppSelector";

const useFilteredMovie = (nameOfStore, movie, options = {}) => {
  const { data } = useAppSelector(nameOfStore);
  const { includeReview } = options;
  const filteredMovie = data.movies.filter((item) => {
    if (includeReview) {
      return item.id === movie.id && item.review;
    }
    return item.id === movie.id;
  });
  return { filteredMovie };
};

export default useFilteredMovie;
