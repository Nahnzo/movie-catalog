import { memo } from "react";
import { ReviewActions } from "pages/ReviewsPage/model/slices/ReviewSlice";
import { getExistingMovieForArrayReviews } from "../../selectors/getSortedMovie/getSortedMovie";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../selectors/getUserData/getUserData";
import { addMovieToCollection, removeMovieFromCollection } from "shared/lib/config/movieService";
import { routes } from "shared/lib/config/routes";
import styles from "./handleReviews.module.scss";
import ReviewIcon from "shared/assets/review-icon.svg";
import { useNavigate } from "react-router-dom";
import Svg from "shared/ui/Svg/Svg";

const HandleReviews = memo(({ movie, handleModal }) => {
  const dispatch = useDispatch();
  const isExist = useSelector((state) => getExistingMovieForArrayReviews(state)(movie));
  const id = useSelector(getUserId);
  const isAuth = useSelector((state) => state.user.isAuth);
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
      dispatch(ReviewActions.addMovieToReview(item));
      addMovieToCollection({ movie }, id, "myReviews");
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
