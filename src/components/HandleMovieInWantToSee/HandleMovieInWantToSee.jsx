/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

const HandleMovieInWantToSee = ({ fMovie }) => {
  let movie = useSelector((data) => data.myCollection.myCollection);
  let phrase = movie.some((item) => item.id === fMovie.id);

  return <button>{phrase ? "Удалить из коллекции" : "Добавить в коллекцию"}</button>;
};

export default HandleMovieInWantToSee;
