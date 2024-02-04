import { MyCollectionActions } from "pages/CollectionPage/model/slices/MyCollectionSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSortedMovie } from "../../model/selectors/getSortedMovie";
import Button from "shared/ui/Button/Button";
import styles from "./handleMovieInWantToSee.module.scss";

const HandleMovieInWantToSee = ({ firstMovie }) => {
  const dispatch = useDispatch();
  const action = useSelector((state) => getSortedMovie(state)(firstMovie.id));
  const handleMovie = (movie) => {
    action
      ? dispatch(MyCollectionActions.removeMovieFromCollection(movie))
      : dispatch(MyCollectionActions.addMovieToCollection(movie));
  };
  return (
    <Button styles={styles.btn} handler={() => handleMovie(firstMovie)}>
      {action ? "Удалить из коллекции" : "Добавить в коллекцию"}
    </Button>
  );
};

export default HandleMovieInWantToSee;
