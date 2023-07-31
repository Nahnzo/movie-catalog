import styles from "./wantToSee.module.css";
import WantToSeeCard from "../WantToSeeCard/WantToSeeCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import { useEffect, useState } from "react";
import { clearAll } from "../../Slices/WantToSeeSlice";
import { BiCameraMovie } from "react-icons/bi";

const WantToSee = () => {
  let data = useSelector((state) => state.wantToSee.wantToSee);
  const dataLengthMyCollection = useSelector((state) => state.myCollection.length);
  const dispatch = useDispatch();
  const [first, setFirst] = useState([]);
  useEffect(() => {
    setFirst([...data]);
  }, [data]);
  const navigate = useNavigate();
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
            Очистить список
          </button>
        </nav>
        <div className={styles.container}>
          <WantToSeeCard firstMovie={first} setFirst={setFirst} data={data} />
          <div className={styles.wrapperCollection}>
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
      </section>
    );
  }
};

export default WantToSee;
