import styles from "./wantToSee.module.css";
import WantToSeeCard from "../../components/WantToSeeCard/WantToSeeCard";
import CarouselX from "../../widgets/CarouselX/CarouselX";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import useDataLength from "../../hooks/useDataLength";
import { ROUTES } from "../../routes";
import { useEffect, useState, useRef } from "react";
import { clearAll } from "../../Slices/WantToSeeSlice";
import { BiCameraMovie } from "react-icons/bi";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import MyButton from "../../shared/MyButton/MyButton";

const WantToSee = () => {
  const ref = useRef(null);
  const wrapper = ref.current;
  const { myCollection } = useDataLength();
  const { dispatchFunction } = useAppDispatch();
  const { data } = useAppSelector("wantToSee");
  const [first, setFirst] = useState([]);
  useEffect(() => {
    setFirst([...data.wantToSee]);
  }, [data.wantToSee]);
  const showFirst = (movie) => {
    setFirst([movie]);
  };

  if (data.wantToSee.length) {
    return (
      <section className={styles.main}>
        <nav className={styles.header}>
          <Navbar path={ROUTES.home}>Ha главную</Navbar>
          <Navbar
            path={ROUTES.myCollection}
            icon={<BiCameraMovie />}
            dataLength={myCollection.length}
          >
            Моя коллекция
          </Navbar>
          <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
          <Navbar path={ROUTES.myReviews}>Мои рецензии</Navbar>
          <MyButton
            styles={`${styles.deleteAll}`}
            handler={() => dispatchFunction(() => clearAll())}
          >
            Очистить список ({data.wantToSee.length})
          </MyButton>
        </nav>
        <div className={styles.container}>
          <WantToSeeCard firstMovie={first} setFirst={setFirst} data={data} />
          <div className={styles.wrapperCollection} ref={ref}>
            {data.wantToSee.map((item) => (
              <div
                className={styles.card}
                key={item.id}
                style={{ backgroundImage: `url(${item.poster.url})` }}
                onClick={() => showFirst(item)}
              ></div>
            ))}
          </div>
        </div>
        <CarouselX wrapper={wrapper} data={data} />
        <Footer />
      </section>
    );
  } else {
    return (
      <section className={styles.main}>
        <nav className={styles.header}>
          <Navbar path={ROUTES.home}>Ha главную</Navbar>
          <Navbar
            path={ROUTES.myCollection}
            icon={<BiCameraMovie />}
            dataLength={myCollection.length}
          >
            Моя коллекция
          </Navbar>
          <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
          <Navbar path={ROUTES.myReviews}>Мои рецензии</Navbar>
        </nav>
        <h1 style={{ margin: "50px" }}> Список пуст</h1>
        <div className={styles.footer}>
          <Footer />
        </div>
      </section>
    );
  }
};

export default WantToSee;
