import { ROUTES } from "shared/lib/config/routes";
import { useSelector, useDispatch } from "react-redux";
import { getMovieForCollection } from "../model/selectors/getMovieForCollection/getMovieForCollection";
import { MyCollectionActions } from "../model/slices/MyCollectionSlice";
import { useDataLength } from "shared/lib/hooks/useDataLength";
import Footer from "shared/ui/Footer/Footer";
import CardForCollection from "entities/CardMovie/ui/CardForCollection/CardForCollection";
import Navbar from "shared/ui/Navbar/Navbar";
import MyButton from "shared/ui/MyButton/MyButton";
import useLocalStorageData from "shared/lib/hooks/useLocalStorage";
import Svg from "shared/ui/Svg/Svg";
import FilmIcon from "shared/assets/film-icon.svg";
import ListReviewIcon from "shared/assets/list-review-icon.svg";
import styles from "./myCollection.module.css";
import {
  LOCAL_STORAGE_MY_COLLECTION,
  LOCAL_STORAGE_MY_REVIEWS,
  LOCAL_STORAGE_WANT_TO_SEE,
} from "shared/lib/const/const";

const MyCollection = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getMovieForCollection);
  const { wantToSeeLength, myCollectionLength, myReviewsLength } = useDataLength();
  useLocalStorageData([LOCAL_STORAGE_MY_COLLECTION, LOCAL_STORAGE_MY_REVIEWS, LOCAL_STORAGE_WANT_TO_SEE]);

  return (
    <section className={styles.main}>
      <nav className={styles.header}>
        <Navbar path={ROUTES.home}>На главную</Navbar>
        <Navbar path={ROUTES.wantToSee} dataLength={wantToSeeLength}>
          Хочу посмотреть
          <Svg path={FilmIcon} styles={styles.svg} viewBox="0 0 60 60" />
        </Navbar>
        <Navbar path={ROUTES.myReviews} dataLength={myReviewsLength}>
          Мои рецензии
          <Svg path={ListReviewIcon} styles={styles.svg} viewBox="-200 -10 890 500" />
        </Navbar>
        <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
        {myCollectionLength ? (
          <MyButton styles={styles.deleteAll} handler={() => dispatch(MyCollectionActions.clearAll())}>
            Очистить список ({myCollectionLength})
          </MyButton>
        ) : (
          ""
        )}
      </nav>
      <section className={!myCollectionLength ? styles.wrapper : styles.wrapperEmpty}>
        <div className={styles.myCollection}>
          {!myCollectionLength ? (
            <h1 className={styles.listEmpty}>Список пуст</h1>
          ) : (
            movies.map((item) => <CardForCollection movie={item} key={item.id} />)
          )}
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default MyCollection;
