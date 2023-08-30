import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilmById } from "../../tools/getFilmById";
import styles from "./aboutFilm.module.css";
import CardForDetail from "../CardForDetails/CardForDetail";

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
    <main className={styles.mainWrapper}>{movie.length && <CardForDetail movie={movie[0]} />}</main>
  );
};

export default AboutFilm;
