/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { addMovieToCollection, removeMovieFromCollection } from "../../Slices/MyCollectionSlice";
import styles from "./handleMyCollection.module.css";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";

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
      dispatchFunction(() => removeMovieFromCollection(item));
    } else {
      event.stopPropagation();
      dispatchFunction(() => addMovieToCollection(item));
    }
  };
  return <>{handleIconFolder}</>;
};

export default HandleWantToSee;
