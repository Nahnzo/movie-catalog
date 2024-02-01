import { MyCollectionActions } from "pages/CollectionPage/model/slices/MyCollectionSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSortedMovie } from "../../model/selectors/getSortedMovie";
import MyButton from "shared/ui/MyButton/MyButton";
import styles from "./handleMovieInWantToSee.module.css";

const HandleMovieInWantToSee = ({ firstMovie }) => {
  const dispatch = useDispatch();
  const action = useSelector((state) => getSortedMovie(state)(firstMovie.id));
  const handleMovie = (movie) => {
    action
      ? dispatch(MyCollectionActions.removeMovieFromCollection(movie))
      : dispatch(MyCollectionActions.addMovieToCollection(movie));
  };
  return (
    <MyButton styles={styles.btn} handler={() => handleMovie(firstMovie)}>
      {action ? "Удалить из коллекции" : "Добавить в коллекцию"}
    </MyButton>
  );
};

export default HandleMovieInWantToSee;
