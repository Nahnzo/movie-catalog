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
    <BsFolderMinus
      className={styles.wantToSeeMinus}
      onClick={(event) => handleClick(event, movie)}
    />
  ) : (
    <BsFolderPlus className={styles.wantToSeePlus} onClick={(event) => handleClick(event, movie)} />
  );

  const handleClick = (event, item) => {
    if (isInWantToSee) {
      event.stopPropagation();
      dispatch(removeMovie(item));
    } else {
      event.stopPropagation();
      dispatch(addMovie(item));
    }
  };
  return <>{handleIconFolder}</>;
};

export default HandleWantToSee;
