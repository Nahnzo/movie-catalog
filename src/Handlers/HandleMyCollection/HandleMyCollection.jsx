/* eslint-disable react/prop-types */
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MyCollectionActions } from "../../pages/MyCollection/model/slices/MyCollectionSlice";
import styles from "./handleMyCollection.module.css";
import useAppDispatch from "hooks/useAppDispatch";
import useAppSelector from "hooks/useAppSelector";

const HandleWantToSee = ({ movie }) => {
  const { dispatchFunction } = useAppDispatch();
  const { data } = useAppSelector("myCollection");

  const isInMyCollection = data.myCollection.some((item) => item.id === movie.id);
  const handleIconFolder = isInMyCollection ? (
    <BsHeartFill className={styles.collectionFill} onClick={(event) => handleClick(event, movie)} />
  ) : (
    <BsHeart className={styles.collectionEmpty} onClick={(event) => handleClick(event, movie)} />
  );

  const handleClick = (event, item) => {
    if (isInMyCollection) {
      event.stopPropagation();
      dispatchFunction(() => MyCollectionActions.removeMovieFromCollection(item));
    } else {
      event.stopPropagation();
      dispatchFunction(() => MyCollectionActions.addMovieToCollection(item));
    }
  };
  return <>{handleIconFolder}</>;
};

export default HandleWantToSee;
