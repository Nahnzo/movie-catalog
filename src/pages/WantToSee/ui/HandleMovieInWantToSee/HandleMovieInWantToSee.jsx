import { MyCollectionActions } from "pages/MyCollection/model/slices/MyCollectionSlice";
import { useDispatch } from "react-redux";
import useAppSelector from "shared/lib/hooks/useAppSelector";
import MyButton from "shared/ui/MyButton/MyButton";
import styles from "./handleMovieInWantToSee.module.css";

const HandleMovieInWantToSee = ({ firstMovie }) => {
  const { data } = useAppSelector("myCollection");
  const dispatch = useDispatch();
  const description = data.myCollection.some((item) => item.id === firstMovie.id);
  const handleMovie = (movie) => {
    description
      ? dispatch(MyCollectionActions.removeMovieFromCollection(movie))
      : dispatch(MyCollectionActions.addMovieToCollection(movie));
  };

  return (
    <MyButton styles={styles.btn} handler={() => handleMovie(firstMovie)}>
      {description ? "Удалить из коллекции" : "Добавить в коллекцию"}
    </MyButton>
  );
};

export default HandleMovieInWantToSee;
