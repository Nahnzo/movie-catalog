import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import { addMovieToCollection, removeMovieFromCollection } from "shared/lib/config/movieService";
import { getIsUserAuth, getUserId } from "../../model/selectors/getUserData";
import { getExistingMovieForMyCollection } from "../../model/selectors/getMovieData";
import HeartIcon from "shared/assets/heart-icon.svg";
import styles from "./handleMyCollection.module.scss";
import Svg from "shared/ui/Svg/Svg";

const HandleMyCollection = memo(({ movie, handleModal, actions }) => {
  const dispatch = useDispatch();
  const isExist = useSelector((state) => getExistingMovieForMyCollection(state)(movie));
  const userId = useSelector(getUserId);
  const isAuth = useSelector(getIsUserAuth);

  const handleClick = (event, item) => {
    if (!isAuth) {
      event.stopPropagation();
      handleModal();
    } else if (isExist) {
      event.stopPropagation();
      dispatch(actions.deleteItem(item));
      removeMovieFromCollection({ movie }, userId, "myCollection");
    } else {
      event.stopPropagation();
      dispatch(actions.addItem(item));
      addMovieToCollection({ movie }, userId, "myCollection");
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

export default HandleMyCollection;
