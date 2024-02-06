import { MovieCard } from "entities/CardMovie/index";
import { memo } from "react";
const MovieList = memo(({ currentMovies, handleModal }) => {
  return (
    <>
      {currentMovies?.map((item) => (
        <MovieCard data={item} key={item.id} handleModal={handleModal} />
      ))}
    </>
  );
});

export default MovieList;
