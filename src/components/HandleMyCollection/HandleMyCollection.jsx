/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { addMovieToCollection, removeMovieFromCollection } from "../../Slices/MyCollectionSlice";
import styles from "./handleMyCollection.module.css";

const HandleWantToSee = ({ movie }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.myCollection);
  const isInMyCollection = data.myCollection.some((item) => item.id === movie.id);
  const handleIconFolder = isInMyCollection ? (
    <BsHeartFill className={styles.collectionFill} onClick={(event) => handleClick(event, movie)} />
  ) : (
    <BsHeart className={styles.collectionEmpty} onClick={(event) => handleClick(event, movie)} />
  );

  const handleClick = (event, item) => {
    if (isInMyCollection) {
      event.stopPropagation();
      dispatch(removeMovieFromCollection(item));
    } else {
      event.stopPropagation();
      dispatch(addMovieToCollection(item));
    }
  };
  return <>{handleIconFolder}</>;
};

export default HandleWantToSee;
