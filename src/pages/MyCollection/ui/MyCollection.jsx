import { ROUTES } from "../../../routes";
import { useSelector, useDispatch } from "react-redux";
import { getMovieForCollection } from "../model/selectors/getMovieForCollection/getMovieForCollection";
import { MyCollectionActions } from "../model/slices/MyCollectionSlice";
import { useDataLength } from "shared/lib/hooks/useDataLength";
import Footer from "components/Footer/Footer";
import CardForCollection from "entities/CardMovie/ui/CardForCollection/CardForCollection";
import Navbar from "shared/ui/Navbar/Navbar";
import MyButton from "shared/ui/MyButton/MyButton";
import useLocalStorageData from "shared/lib/hooks/useLocalStorage";
import Svg from "shared/ui/Svg/Svg";
import FilmIcon from "shared/assets/film-icon.svg";
import ListReviewIcon from "shared/assets/list-review-icon.svg";
import styles from "./myCollection.module.css";

const MyCollection = () => {
  const dispatch = useDispatch();
  const data = useDataLength(["arrayReviews", "wantToSee", "myCollection"]);
  useLocalStorageData(["wantToSee", "myReviews", "myCollection"]);
  const movies = useSelector(getMovieForCollection);

  return (
    <section className={styles.main}>
      <nav className={styles.header}>
        <Navbar path={ROUTES.home}>На главную</Navbar>
        <Navbar path={ROUTES.wantToSee} dataLength={data["wantToSee"]}>
          Хочу посмотреть
          <Svg path={FilmIcon} styles={styles.svg} viewBox="0 0 60 60" />
        </Navbar>
        <Navbar path={ROUTES.myReviews} dataLength={data["arrayReviews"]}>
          Мои рецензии
          <Svg path={ListReviewIcon} styles={styles.svg} viewBox="-200 -10 890 500" />
        </Navbar>
        <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
        {data["myCollection"] !== 0 ? (
          <MyButton
            styles={styles.deleteAll}
            handler={() => dispatch(MyCollectionActions.clearAll())}
          >
            Очистить список ({data["myCollection"]})
          </MyButton>
        ) : (
          ""
        )}
      </nav>
      <section
        className={styles.wrapper}
        style={{ borderRight: data["myCollection"] ? "2px solid white" : "none" }}
      >
        <div className={styles.myCollection}>
          {data["myCollection"] === 0 ? (
            <h1 style={{ fontSize: "26px" }}>Список пуст</h1>
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
