import { memo } from "react";
import { getExistingMovieForArrayReviews } from "../../model/selectors/getMovieData";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToCollection } from "shared/lib/config/movieService";
import { routes } from "shared/lib/config/routes";
import { getIsUserAuth, getUserId } from "../../model/selectors/getUserData";
import { useNavigate } from "react-router-dom";
import ReviewIcon from "shared/assets/review-icon.svg";
import styles from "./handleReviews.module.scss";
import Svg from "shared/ui/Svg/Svg";

const HandleReviews = memo(({ movie, handleModal, actions }) => {
  const dispatch = useDispatch();
  const isExist = useSelector((state) => getExistingMovieForArrayReviews(state)(movie));
  const userId = useSelector(getUserId);
  const isAuth = useSelector(getIsUserAuth);
  const navigate = useNavigate();

  const handleClick = (event, item) => {
    if (!isAuth) {
      event.stopPropagation();
      handleModal();
    } else if (isExist) {
      event.stopPropagation();
      navigate(routes.reviewsPage);
    } else {
      event.stopPropagation();
      dispatch(actions.addItem(item));
      addMovieToCollection({ movie }, userId, "myReviews");
    }
  };
  return (
    <Svg
      title={isExist ? "Изменить рецензиюю" : "Написать рецензию"}
      path={ReviewIcon}
      viewBox="-25 0 135 105"
      styles={isExist ? styles.collectionFill : styles.collectionEmpty}
      onClick={(event) => handleClick(event, movie)}
    />
  );
});

export default HandleReviews;
