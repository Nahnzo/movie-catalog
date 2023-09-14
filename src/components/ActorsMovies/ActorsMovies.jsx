/* eslint-disable react/prop-types */
import { getFilmById } from "../../tools/getFilmById";

const ActorsMovies = ({ movies }) => {
  const arrayId = movies.map((item) => item.id);
  const f = async () => {
    const res = await movies.forEach((item) => getFilmById(item));
  };

  return <div></div>;
};

export default ActorsMovies;
