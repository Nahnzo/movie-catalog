import { ROUTES } from "../../routes";
import { BsFolder2Open } from "react-icons/bs";
import { clearAll } from "../../Slices/MyCollectionSlice";
import Footer from "../../components/Footer/Footer";
import styles from "./myCollection.module.css";
import CardForCollection from "../../components/CardForCollection/CardForCollection";
import useDataLength from "../../hooks/useDataLength";
import Navbar from "../../shared/Navbar/Navbar";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import MyButton from "../../shared/MyButton/MyButton";

const MyCollection = () => {
  const { data } = useAppSelector("myCollection");
  const { wantToSee } = useDataLength();
  const { dispatchFunction } = useAppDispatch();

  return (
    <section className={styles.main}>
      <nav className={styles.header}>
        <Navbar path={ROUTES.home}>На главную</Navbar>
        <Navbar path={ROUTES.wantToSee} icon={<BsFolder2Open />} dataLength={wantToSee.length}>
          Хочу посмотреть
        </Navbar>
        <Navbar path={ROUTES.myReviews}>Мои рецензии</Navbar>
        <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
        {data.myCollection.length !== 0 ? (
          <MyButton styles={styles.deleteAll} handler={() => dispatchFunction(() => clearAll())}>
            Очистить список ({data.length})
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
            data.myCollection.map((item) => <CardForCollection movie={item} key={item.id} />)
          )}
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default MyCollection;
