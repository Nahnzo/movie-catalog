import { WantToSeeActions } from "pages/WantToSee/model/slices/WantToSeeSlice";
import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import { getExistingMovieForWanToSee } from "../../selectors/getSortedMovie/getSortedMovie";
import { userActions } from "../../../../User/model/slices/userSlice";
import { addMovieToCollection, removeMovieFromCollection } from "../handleMovie";
import AddMovieFolder from "shared/assets/folder-plus-icon.svg";
import DeletedMovieFolder from "shared/assets/folder-minus-icon.svg";
import Svg from "shared/ui/Svg/Svg";
import styles from "./handleWantToSee.module.css";

const HandleWantToSee = memo(({ movie }) => {
  const dispatch = useDispatch();
  const isExist = useSelector((state) => getExistingMovieForWanToSee(state)(movie));
  const id = useSelector((state) => state.user.id);

  const handleClick = (event, item) => {
    if (isExist) {
      event.stopPropagation();
      dispatch(WantToSeeActions.removeMovie(item));
      removeMovieFromCollection({ movie }, id);
      // dispatch(userActions.removeItemFromCollections(item.id));
    } else {
      event.stopPropagation();
      // dispatch(userActions.setNameOfCollection("wantToSee"));
      // dispatch(userActions.addItemInCollections(item.id));
      dispatch(WantToSeeActions.addMovie(item));
      addMovieToCollection({ movie }, id);
    }
  };
  return (
    <Svg
      styles={isExist ? styles.wantToSeeMinus : styles.wantToSeePlus}
      onClick={(event) => handleClick(event, movie)}
      path={isExist ? DeletedMovieFolder : AddMovieFolder}
      viewBox="-1.6 2 25 25"
    />
  );
});

export default HandleWantToSee;
