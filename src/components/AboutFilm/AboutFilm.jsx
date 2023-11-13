import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilmById } from "../../tools/getFilmById";
import styles from "./aboutFilm.module.css";
// import CardForDetail from "../../entities/CardForDetails/CardForDetail";
import { CardForDetails } from "entities/CardMovie/index";

const AboutFilm = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getInfo = async () => {
    const response = await getFilmById(id);
    setMovie([response]);
  };

  useEffect(() => {
    getInfo();
  }, [id]);

  return (
    <section className={styles.mainWrapper}>
      {movie.length && <CardForDetails movie={movie[0]} />}
    </section>
  );
};

export default AboutFilm;
