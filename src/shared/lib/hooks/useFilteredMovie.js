import useAppSelector from "./useAppSelector";

const useFilteredMovie = (nameOfStore, movie) => {
  const { data } = useAppSelector(nameOfStore);
  const filteredMovie = data.arrayReviews.filter((item) => {
    return item.id === movie.id;
  });

  return { filteredMovie };
};

export default useFilteredMovie;
