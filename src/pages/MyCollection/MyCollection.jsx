import { ROUTES } from "../../routes";
import { BsFolder2Open } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { clearAll } from "../../Slices/MyCollectionSlice";
import { useLocalStorageLength } from "../../hooks/useLocalStorageLength";
import { useDataLength } from "../../hooks/useDataLength";
import Footer from "../../components/Footer/Footer";
import CardForCollection from "../../entities/CardForCollection/CardForCollection";
import Navbar from "../../shared/Navbar/Navbar";
import useAppDispatch from "../../hooks/useAppDispatch";
import MyButton from "../../shared/MyButton/MyButton";
import useLocalStorageData from "../../hooks/useLocalStorage";
import styles from "./myCollection.module.css";

const MyCollection = () => {
  const { dispatchFunction } = useAppDispatch();
  const data = useDataLength();
  useLocalStorageData("myCollection");
  const deleteAll = () => {
    dispatchFunction(() => clearAll());
  };

  return (
    <section className={styles.main}>
      <nav className={styles.header}>
        <Navbar path={ROUTES.home}>На главную</Navbar>
        <Navbar
          path={ROUTES.wantToSee}
          icon={<BsFolder2Open />}
          dataLength={useLocalStorageLength("wantToSee")}
        >
          Хочу посмотреть
        </Navbar>
        <Navbar
          path={ROUTES.myReviews}
          icon={<CiViewList />}
          dataLength={useLocalStorageLength("myReviews")}
        >
          Мои рецензии
        </Navbar>
        <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
        {data.myCollection.length !== 0 ? (
          <MyButton styles={styles.deleteAll} handler={deleteAll}>
            Очистить список ({data.myCollection.length})
          </MyButton>
        ) : (
          ""
        )}
      </nav>
      <section
        className={styles.wrapper}
        style={{ borderRight: data.myCollection.length ? "2px solid white" : "none" }}
      >
        <div className={styles.myCollection}>
          {data.myCollection.length === 0 ? (
            <h1 style={{ fontSize: "26px" }}>Список пуст</h1>
          ) : (
            data.myCollection.myCollection.map((item) => (
              <CardForCollection movie={item} key={item.id} />
            ))
          )}
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default MyCollection;
