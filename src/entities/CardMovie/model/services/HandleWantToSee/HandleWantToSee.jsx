import { BsFolderPlus, BsFolderMinus } from "react-icons/bs";
import { WantToSeeActions } from "pages/WantToSee/model/slices/WantToSeeSlice";
import { useDispatch } from "react-redux";
import styles from "./handleWantToSee.module.css";
import useAppSelector from "shared/lib/hooks/useAppSelector";
import AddMovieFolder from "shared/assets/folder-plus-icon.svg";
import DeletedMovieFolder from "shared/assets/folder-minus-icon.svg";
import { memo } from "react";

const HandleWantToSee = memo(({ movie }) => {
  const dispatch = useDispatch();
  const { data } = useAppSelector("wantToSee");
  const isInWantToSee = data.wantToSee.some((item) => item.id === movie.id);
  const handleIconFolder = isInWantToSee ? (
    <img
      src={AddMovieFolder}
      className={styles.wantToSeeMinus}
      onClick={(event) => handleClick(event, movie)}
    />
  ) : (
    <img
      src={DeletedMovieFolder}
      className={styles.wantToSeePlus}
      onClick={(event) => handleClick(event, movie)}
    />
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
});

export default HandleWantToSee;
