import { ROUTES } from "../../routes";
import { BsFolder2Open } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { clearAll } from "../../Slices/MyCollectionSlice";
import Footer from "../../components/Footer/Footer";
import styles from "./myCollection.module.css";
import CardForCollection from "../../entities/CardForCollection/CardForCollection";
import useDataLength from "../../hooks/useDataLength";
import Navbar from "../../shared/Navbar/Navbar";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import MyButton from "../../shared/MyButton/MyButton";
import { useEffect, useState } from "react";
import useLocalStorageData from "../../hooks/useLocalStorage";

const MyCollection = () => {
  const { wantToSee, arrayReview } = useDataLength();
  const { dispatchFunction } = useAppDispatch();
  // const [array, setArray] = useLocalStorageData("myCollection", data.myCollection);
  const { data } = useAppSelector("myCollection");

  const [array, setArray] = useState(() => {
    const storedData = localStorage.getItem("myCollection");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    if (data.myCollection.length) {
      setArray((prevArray) => {
        const mergedData = [...new Set([...prevArray, ...data.myCollection])];
        localStorage.setItem("myCollection", JSON.stringify(mergedData));
        return mergedData;
      });
    }
  }, [data.myCollection]);

  return (
    <section className={styles.main}>
      {array.map((item) => (
        <p style={{ margin: "auto", fontSize: "30px", color: "white" }} key={item.id}>
          {item.name}
        </p>
      ))}
      {/* <nav className={styles.header}>
        <Navbar path={ROUTES.home}>На главную</Navbar>
        <Navbar path={ROUTES.wantToSee} icon={<BsFolder2Open />} dataLength={wantToSee.length}>
          Хочу посмотреть
        </Navbar>
        <Navbar path={ROUTES.myReviews} icon={<CiViewList />} dataLength={arrayReview.length}>
          Мои рецензии
        </Navbar>
        <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
        {data.length !== 0 ? (
          <MyButton styles={styles.deleteAll} handler={() => dispatchFunction(() => clearAll())}>
            Очистить список ({data.length})
          </MyButton>
        ) : (
          ""
        )}
      </nav>
      <section
        className={styles.wrapper}
        style={{ borderRight: data.length ? "2px solid white" : "none" }}
      >
        <div className={styles.myCollection}>
          {data.length === 0 ? (
            <h1 style={{ fontSize: "26px" }}>Список пуст</h1>
          ) : (
            data.myCollection.map((item) => <CardForCollection movie={item} key={item.id} />)
          )}
        </div>
      </section>
      <Footer /> */}
    </section>
  );
};

export default MyCollection;
