import styles from "./wantToSee.module.css";
import WantToSeeCard from "../../entities/WantToSeeCard/WantToSeeCard";
import CarouselX from "../../widgets/CarouselX/CarouselX";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import MyButton from "../../shared/MyButton/MyButton";
import { ROUTES } from "../../routes";
import { useEffect, useState, useRef } from "react";
import { clearAll } from "../../Slices/WantToSeeSlice";
import { BiCameraMovie } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import useLocalStorageData from "../../hooks/useLocalStorage";
import { useLocalStorageLength } from "../../hooks/useLocalStorageLength";
import { useDataLength } from "../../hooks/useDataLength";

const WantToSee = () => {
  const ref = useRef(null);
  const wrapper = ref.current;
  const { dispatchFunction } = useAppDispatch();
  const data = useDataLength();
  const [selectedMovie, setSelectedMovie] = useState(null);
  useLocalStorageData("wantToSee");

  useEffect(() => {
    setSelectedMovie(data.wantToSee.wantToSee[0]);
  }, [data.wantToSee]);
  const showFirst = (movie) => {
    setSelectedMovie(movie);
  };

  if (data.wantToSee.length) {
    return (
      <section className={styles.main}>
        <nav className={styles.header}>
          <Navbar path={ROUTES.home}>Ha главную</Navbar>
          <Navbar
            path={ROUTES.myCollection}
            icon={<BiCameraMovie />}
            dataLength={data.myCollection.length}
          >
            Моя коллекция
          </Navbar>
          <Navbar
            path={ROUTES.myReviews}
            icon={<CiViewList />}
            dataLength={data.arrayReview.length}
          >
            Мои рецензии
          </Navbar>
          <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
          <MyButton
            styles={`${styles.deleteAll}`}
            handler={() => dispatchFunction(() => clearAll())}
          >
            Очистить список ({data.wantToSee.length})
          </MyButton>
        </nav>
        <div className={styles.container}>
          {selectedMovie && <WantToSeeCard firstMovie={selectedMovie} />}
          <div className={styles.wrapperCollection} ref={ref}>
            {data.wantToSee.wantToSee.map((item) => (
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
            dataLength={data.myCollection.length}
          >
            Моя коллекция
          </Navbar>
          <Navbar
            path={ROUTES.myReviews}
            icon={<CiViewList />}
            dataLength={data.arrayReview.length}
          >
            Мои рецензии
          </Navbar>
          <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
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
