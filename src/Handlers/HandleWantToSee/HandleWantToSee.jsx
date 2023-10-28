/* eslint-disable react/prop-types */
import { BsFolderPlus, BsFolderMinus } from "react-icons/bs";
import { addMovie, removeMovie } from "../../pages/WantToSee/model/slices/WantToSeeSlice";
import styles from "./handleWantToSee.module.css";
import useAppDispatch from "hooks/useAppDispatch";
import useAppSelector from "hooks/useAppSelector";

const HandleWantToSee = ({ movie }) => {
  const { dispatchFunction } = useAppDispatch();
  const { data } = useAppSelector("wantToSee");
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
      dispatchFunction(() => removeMovie(item));
    } else {
      event.stopPropagation();
      dispatchFunction(() => addMovie(item));
    }
  };
  return <>{handleIconFolder}</>;
};

export default HandleWantToSee;
