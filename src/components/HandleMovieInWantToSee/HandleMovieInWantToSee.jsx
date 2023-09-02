/* eslint-disable react/prop-types */
import styles from "./handleMovieInWantToSee.module.css";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import { addMovieToCollection, removeMovieFromCollection } from "../../Slices/MyCollectionSlice";

const HandleMovieInWantToSee = ({ fMovie }) => {
  const { dispatchFunction } = useAppDispatch();
  const { data } = useAppSelector("myCollection");
  let phrase = data.myCollection.some((item) => item.id === fMovie.id);
  const handleMovie = (movie) => {
    phrase
      ? dispatchFunction(() => removeMovieFromCollection(movie))
      : dispatchFunction(() => addMovieToCollection(movie));
  };

  return (
    <button className={styles.btn} onClick={() => handleMovie(fMovie)}>
      {phrase ? "Удалить из коллекции" : "Добавить в коллекцию"}
    </button>
  );
};

export default HandleMovieInWantToSee;
