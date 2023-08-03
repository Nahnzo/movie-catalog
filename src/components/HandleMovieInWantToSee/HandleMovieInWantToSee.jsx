/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { addMovieToCollection, removeMovieFromCollection } from "../../Slices/MyCollectionSlice";
import styles from "./handleMovieInWantToSee.module.css";

const HandleMovieInWantToSee = ({ fMovie }) => {
  const dispatch = useDispatch();
  let movie = useSelector((data) => data.myCollection.myCollection);
  let phrase = movie.some((item) => item.id === fMovie.id);
  const handleMovie = (movie) => {
    phrase ? dispatch(removeMovieFromCollection(movie)) : dispatch(addMovieToCollection(movie));
  };

  return (
    <button className={styles.btn} onClick={() => handleMovie(fMovie)}>
      {phrase ? "Удалить из коллекции" : "Добавить в коллекцию"}
    </button>
  );
};

export default HandleMovieInWantToSee;
