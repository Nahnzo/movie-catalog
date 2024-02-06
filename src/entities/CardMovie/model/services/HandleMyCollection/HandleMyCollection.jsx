import { MyCollectionActions } from "pages/CollectionPage/model/slices/MyCollectionSlice";
import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import { getExistingMovieForMyCollection } from "../../selectors/getSortedMovie/getSortedMovie";
import { addMovieToCollection, removeMovieFromCollection } from "shared/lib/config/movieService";
import { getUserId } from "../../selectors/getUserData/getUserData";
import HeartIcon from "shared/assets/heart-icon.svg";
import styles from "./handleMyCollection.module.css";
import Svg from "shared/ui/Svg/Svg";

const HandleWantToSee = memo(({ movie, handleModal }) => {
  const dispatch = useDispatch();
  const isExist = useSelector((state) => getExistingMovieForMyCollection(state)(movie));
  const id = useSelector(getUserId);
  const isAuth = useSelector((state) => state.user.isAuth);

  const handleClick = (event, item) => {
    if (!isAuth) {
      event.stopPropagation();
      handleModal();
    } else if (isExist) {
      event.stopPropagation();
      dispatch(MyCollectionActions.removeMovieFromCollection(item));
      removeMovieFromCollection({ movie }, id, "myCollection");
    } else {
      event.stopPropagation();
      dispatch(MyCollectionActions.addMovieToCollection(item));
      addMovieToCollection({ movie }, id, "myCollection");
    }
  };

  return (
    <Svg
      title={isExist ? "Удалить из коллекции" : "Добавить в коллекцию"}
      path={HeartIcon}
      viewBox="-25 0 135 105"
      styles={isExist ? styles.collectionFill : styles.collectionEmpty}
      onClick={(event) => handleClick(event, movie)}
    />
  );
});

export default HandleWantToSee;
