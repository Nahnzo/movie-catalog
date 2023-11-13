import { WantToSeeActions } from "../../pages/WantToSee/model/slices/WantToSeeSlice";
import styles from "./handleMovieInWantToSee.module.css";
import { useDispatch } from "react-redux";
import useAppSelector from "shared/lib/hooks/useAppSelector";
import MyButton from "shared/ui/MyButton/MyButton";

const HandleMovieInWantToSee = ({ firstMovie }) => {
  const dispatch = useDispatch();
  const { data } = useAppSelector("myCollection");
  const description = data.myCollection.some((item) => item.id === firstMovie.id);
  const handleMovie = (movie) => {
    description
      ? dispatch(() => WantToSeeActions.removeMovieFromCollection(movie))
      : dispatch(() => WantToSeeActions.addMovieToCollection(movie));
  };

  return (
    <MyButton styles={styles.btn} handler={() => handleMovie(firstMovie)}>
      {description ? "Удалить из коллекции" : "Добавить в коллекцию"}
    </MyButton>
  );
};

export default HandleMovieInWantToSee;
