import { BsFolderPlus, BsFolderMinus } from "react-icons/bs";
import { WantToSeeActions } from "../../../../../pages/WantToSee/model/slices/WantToSeeSlice";
import { useDispatch } from "react-redux";
import styles from "./handleWantToSee.module.css";
import useAppSelector from "shared/lib/hooks/useAppSelector";

const HandleWantToSee = ({ movie }) => {
  const dispatch = useDispatch();
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
      dispatch(WantToSeeActions.removeMovie(item));
    } else {
      event.stopPropagation();
      dispatch(WantToSeeActions.addMovie(item));
    }
  };
  return <>{handleIconFolder}</>;
};

export default HandleWantToSee;
