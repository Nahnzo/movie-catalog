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
    <BsHeartFill className={styles.collectionFill} onClick={() => handleClick(movie)} />
  ) : (
    <BsHeart className={styles.collectionEmpty} onClick={() => handleClick(movie)} />
  );

  const handleClick = (item) => {
    if (isInMyCollection) {
      dispatch(removeMovieFromCollection(item));
    } else {
      dispatch(addMovieToCollection(item));
    }
  };
  return <>{handleIconFolder}</>;
};

export default HandleWantToSee;
