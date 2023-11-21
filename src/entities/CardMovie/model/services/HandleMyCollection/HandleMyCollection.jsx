import { MyCollectionActions } from "pages/MyCollection/model/slices/MyCollectionSlice";
import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import { getExistingMovieForMyCollection } from "../../selectors/getSortedMovie/getSortedMovie";
import styles from "./handleMyCollection.module.css";

const HandleWantToSee = memo(({ movie }) => {
  const dispatch = useDispatch();
  const isExist = useSelector((state) => getExistingMovieForMyCollection(state)(movie));

  const handleClick = (event, item) => {
    if (isExist) {
      event.stopPropagation();
      dispatch(MyCollectionActions.removeMovieFromCollection(item));
    } else {
      event.stopPropagation();
      dispatch(MyCollectionActions.addMovieToCollection(item));
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={isExist ? styles.collectionFill : styles.collectionEmpty}
      onClick={(event) => handleClick(event, movie)}
    >
      {isExist ? (
        <path
          fill="red"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      ) : (
        <path
          fill="transparent"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      )}
    </svg>
  );
});

export default HandleWantToSee;
