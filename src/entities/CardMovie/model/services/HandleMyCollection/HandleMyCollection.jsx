import { MyCollectionActions } from "pages/MyCollection/model/slices/MyCollectionSlice";
import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import { getExistingMovieForMyCollection } from "../../selectors/getSortedMovie/getSortedMovie";
import HeartIcon from "shared/assets/heart-icon.svg";
import styles from "./handleMyCollection.module.css";
import Svg from "shared/ui/Svg/Svg";

const HandleWantToSee = memo(({ movie }) => {
  const dispatch = useDispatch();
  const isExist = useSelector((state) => getExistingMovieForMyCollection(state)(movie));

  const handleClick = (event, item) => {
    if (isExist) {
      event.stopPropagation();
      dispatch(MyCollectionActions.removeMovieFromCollection(item));
    } else {
      event.stopPropagation();
      dispatch(MyCollectionActions.addMovieToCollection(item));
    }
  };

  return (
    <Svg
      path={HeartIcon}
      viewBox="-25 0 135 105"
      styles={isExist ? styles.collectionFill : styles.collectionEmpty}
      onClick={(event) => handleClick(event, movie)}
    />
  );
});

export default HandleWantToSee;
