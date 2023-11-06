import { WantToSeeActions } from "../../pages/WantToSee/model/slices/WantToSeeSlice";
import styles from "./handleMovieInWantToSee.module.css";
import useAppDispatch from "hooks/useAppDispatch";
import useAppSelector from "hooks/useAppSelector";
import MyButton from "../../shared/MyButton/MyButton";

const HandleMovieInWantToSee = ({ firstMovie }) => {
  const { dispatchFunction } = useAppDispatch();
  const { data } = useAppSelector("myCollection");
  const description = data.myCollection.some((item) => item.id === firstMovie.id);
  const handleMovie = (movie) => {
    description
      ? dispatchFunction(() => WantToSeeActions.removeMovieFromCollection(movie))
      : dispatchFunction(() => WantToSeeActions.addMovieToCollection(movie));
  };

  return (
    <MyButton styles={styles.btn} handler={() => handleMovie(firstMovie)}>
      {description ? "Удалить из коллекции" : "Добавить в коллекцию"}
    </MyButton>
  );
};

export default HandleMovieInWantToSee;
