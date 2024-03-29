import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import { getExistingMovieForWanToSee } from "../../model/selectors/getMovieData";
import { addMovieToCollection, removeMovieFromCollection } from "shared/lib/config/movieService";
import { getIsUserAuth, getUserId } from "../../model/selectors/getUserData";
import AddMovieFolder from "shared/assets/folder-plus-icon.svg";
import DeletedMovieFolder from "shared/assets/folder-minus-icon.svg";
import Svg from "shared/ui/Svg/Svg";
import styles from "./handleWantToSee.module.scss";

const HandleWantToSee = memo(({ movie, handleModal, actions }) => {
  const dispatch = useDispatch();
  const isExist = useSelector((state) => getExistingMovieForWanToSee(state)(movie));
  const userId = useSelector(getUserId);
  const isAuth = useSelector(getIsUserAuth);

  const handleClick = (event, item) => {
    if (!isAuth) {
      event.stopPropagation();
      handleModal();
    } else if (isExist) {
      event.stopPropagation();
      dispatch(actions.deleteItem(item));
      removeMovieFromCollection({ movie }, userId, "wantToSee");
    } else {
      event.stopPropagation();
      dispatch(actions.addItem(item));
      addMovieToCollection({ movie }, userId, "wantToSee");
    }
  };

  return (
    <>
      <Svg
        title={isExist ? "Уже смотрел, удалить" : "Буду смотреть"}
        styles={isExist ? styles.wantToSeeMinus : styles.wantToSeePlus}
        onClick={(event) => handleClick(event, movie)}
        path={isExist ? DeletedMovieFolder : AddMovieFolder}
        viewBox="-1.6 2 25 25"
      />
    </>
  );
});

export default HandleWantToSee;
