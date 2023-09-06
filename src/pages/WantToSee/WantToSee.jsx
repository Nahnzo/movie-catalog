import styles from "./wantToSee.module.css";
import WantToSeeCard from "../../components/WantToSeeCard/WantToSeeCard";
import CarouselX from "../../components/CarouselX/CarouselX";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useEffect, useState, useRef } from "react";
import { clearAll } from "../../Slices/WantToSeeSlice";
import { BiCameraMovie } from "react-icons/bi";

const WantToSee = () => {
  const ref = useRef(null);
  const wrapper = ref.current;
  let data = useSelector((state) => state.wantToSee.wantToSee);
  const dataLengthMyCollection = useSelector((state) => state.myCollection.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [first, setFirst] = useState([]);
  useEffect(() => {
    setFirst([...data]);
  }, [data]);
  const showFirst = (movie) => {
    setFirst([movie]);
  };

  if (data.length) {
    return (
      <section className={styles.main}>
        <nav className={styles.header}>
          <h3 onClick={() => navigate(`${ROUTES.home}`)}>Ha главную</h3>
          <h3 onClick={() => navigate(`${ROUTES.myCollection}`)}>
            Моя коллекция
            <div className={dataLengthMyCollection ? styles.counter : styles.counterHidden}>
              <BiCameraMovie />
              <div className={styles.counterS}>{dataLengthMyCollection}</div>
            </div>
          </h3>
          <h3 onClick={() => navigate(`${ROUTES.whatToSee}`)}>Что посмотреть?</h3>
          <h3 onClick={() => navigate(`${ROUTES.myReviews}`)}>Мои рецензии</h3>
          <button className={styles.deleteAll} onClick={() => dispatch(clearAll())}>
            Очистить список <div className={styles.counterS}>({data.length})</div>
          </button>
        </nav>
        <div className={styles.container}>
          <WantToSeeCard firstMovie={first} setFirst={setFirst} data={data} />
          <div className={styles.wrapperCollection} ref={ref}>
            {data.map((item) => (
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
          <h3 onClick={() => navigate(`${ROUTES.home}`)}>Ha главную</h3>
          <h3 onClick={() => navigate(`${ROUTES.myCollection}`)}>
            Моя коллекция
            <div className={dataLengthMyCollection ? styles.counter : styles.counterHidden}>
              <BiCameraMovie />
              <div className={styles.counterS}>{dataLengthMyCollection}</div>
            </div>
          </h3>
          <h3 onClick={() => navigate(`${ROUTES.whatToSee}`)}>Что посмотреть?</h3>
          <h3 onClick={() => navigate(`${ROUTES.myReviews}`)}>Мои рецензии</h3>
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
