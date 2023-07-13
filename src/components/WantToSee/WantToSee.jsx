import React from "react";
import styles from "./wantToSee.module.css";
import { useSelector } from "react-redux";
const WantToSee = () => {
  const data = useSelector((state) => state.wantToSee.wantToSee);
  const firstMovie = data[0];
  console.log(firstMovie);
  if (data.length) {
    return (
      <section className={styles.main}>
        <div className={styles.container}>
          <div
            className={styles.firstItem}
            style={{ backgroundImage: `url(${firstMovie.poster.url})` }}
          ></div>
          <div className={styles.wrapper}>
            <div className={styles.info}>
              <p>Жанры: {firstMovie.genres.map((item) => item.name + "") + "."}</p>
              <p>
                Название: <strong>{firstMovie.name}</strong>
              </p>
              <p>
                Альтернативное название: <strong>{firstMovie.alternativeName}</strong>
              </p>

              <p>Страна: {firstMovie.countries[0].name}</p>
            </div>

            <div className={styles.rating}>
              <hr />
              Rating: Кинопоиск <strong> {firstMovie.rating.kp} </strong>
              IMDB <strong>{firstMovie.rating.imdb}</strong>
            </div>
            <div className={styles.description}>
              <h3>Описание:</h3> {firstMovie.description}
            </div>
          </div>
        </div>
        {data.map((item) => item.name)}
      </section>
    );
  } else {
    return (
      <section className={styles.main}>
        <p>Здесь пусто</p>
      </section>
    );
  }
};

export default WantToSee;
