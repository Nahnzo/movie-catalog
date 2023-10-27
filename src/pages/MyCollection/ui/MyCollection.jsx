import { ROUTES } from "../../../routes";
import { BsFolder2Open } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { clearAll } from "../../../Slices/MyCollectionSlice";
import { useDataLength } from "hooks/useDataLength";
import Footer from "components/Footer/Footer";
import CardForCollection from "../../../entities/CardForCollection/ui/CardForCollection";
import Navbar from "../../../shared/Navbar/Navbar";
import useAppDispatch from "hooks/useAppDispatch";
import MyButton from "../../../shared/MyButton/MyButton";
import useLocalStorageData from "hooks/useLocalStorage";
import styles from "./myCollection.module.css";
import { useSelector } from "react-redux";
import { getMovieForCollection } from "../model/selectors/getMovieForCollection/getMovieForCollection";
const MyCollection = () => {
  const { dispatchFunction } = useAppDispatch();
  const data = useDataLength(["arrayReviews", "wantToSee", "myCollection"]);
  useLocalStorageData(["wantToSee", "myReviews", "myCollection"]);
  const movies = useSelector(getMovieForCollection);
  const deleteAll = () => {
    dispatchFunction(() => clearAll());
  };

  return (
    <section className={styles.main}>
      <nav className={styles.header}>
        <Navbar path={ROUTES.home}>На главную</Navbar>
        <Navbar path={ROUTES.wantToSee} icon={<BsFolder2Open />} dataLength={data["wantToSee"]}>
          Хочу посмотреть
        </Navbar>
        <Navbar path={ROUTES.myReviews} icon={<CiViewList />} dataLength={data["arrayReviews"]}>
          Мои рецензии
        </Navbar>
        <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
        {data["myCollection"] !== 0 ? (
          <MyButton styles={styles.deleteAll} handler={deleteAll}>
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
