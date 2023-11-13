/* eslint-disable react/prop-types */
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MyCollectionActions } from "../../pages/MyCollection/model/slices/MyCollectionSlice";
import { useDispatch } from "react-redux";
import styles from "./handleMyCollection.module.css";
import useAppSelector from "shared/lib/hooks/useAppSelector";

const HandleWantToSee = ({ movie }) => {
  const dispatch = useDispatch();
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
      dispatch(() => MyCollectionActions.removeMovieFromCollection(item));
    } else {
      event.stopPropagation();
      dispatch(() => MyCollectionActions.addMovieToCollection(item));
    }
  };
  return <>{handleIconFolder}</>;
};

export default HandleWantToSee;
