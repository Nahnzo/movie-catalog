/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { addMovieToCollection, removeMovieFromCollection } from "../../Slices/MyCollectionSlice";
import styles from "./handleMyCollection.module.css";

const HandleWantToSee = ({ movie }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.myCollection);
  const isInMyCollection = data.myCollection.some((item) => item.id === movie.id);
  const handleIconFolder = isInMyCollection ? (
    <AiFillHeart className={styles.collectionFill} />
  ) : (
    <AiOutlineHeart className={styles.collectionEmpty} />
  );

  const handleClick = (item) => {
    if (isInMyCollection) {
      dispatch(removeMovieFromCollection(item));
    } else {
      dispatch(addMovieToCollection(item));
    }
  };
  return <div onClick={() => handleClick(movie)}>{handleIconFolder}</div>;
};

export default HandleWantToSee;
