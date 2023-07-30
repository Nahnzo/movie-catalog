/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { BsFolderPlus, BsFolderMinus } from "react-icons/bs";
import { addMovie, removeMovie } from "../../Slices/WantToSeeSlice";
import styles from "./handleWantToSee.module.css";

const HandleWantToSee = ({ movie }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.wantToSee);
  const isInWantToSee = data.wantToSee.some((item) => item.id === movie.id);
  const handleIconFolder = isInWantToSee ? (
    <BsFolderMinus className={styles.wantToSeeMinus} onClick={() => handleClick(movie)} />
  ) : (
    <BsFolderPlus className={styles.wantToSeePlus} onClick={() => handleClick(movie)} />
  );

  const handleClick = (item) => {
    if (isInWantToSee) {
      dispatch(removeMovie(item));
    } else {
      dispatch(addMovie(item));
    }
  };
  return <>{handleIconFolder}</>;
};

export default HandleWantToSee;
