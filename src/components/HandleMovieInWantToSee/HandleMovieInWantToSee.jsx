/* eslint-disable react/prop-types */
import styles from "./handleMovieInWantToSee.module.css";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import MyButton from "../../shared/MyButton/MyButton";
import { addMovieToCollection, removeMovieFromCollection } from "../../Slices/MyCollectionSlice";

const HandleMovieInWantToSee = ({ fMovie }) => {
  const { dispatchFunction } = useAppDispatch();
  const { data } = useAppSelector("myCollection");
  const description = data.myCollection.some((item) => item.id === fMovie.id);
  const handleMovie = (movie) => {
    description
      ? dispatchFunction(() => removeMovieFromCollection(movie))
      : dispatchFunction(() => addMovieToCollection(movie));
  };

  return (
    <MyButton styles={styles.btn} handler={() => handleMovie(fMovie)}>
      {description ? "Удалить из коллекции" : "Добавить в коллекцию"}
    </MyButton>
  );
};

export default HandleMovieInWantToSee;
