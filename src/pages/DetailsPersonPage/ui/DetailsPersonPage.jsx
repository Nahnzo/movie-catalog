import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPersonById } from "../model/api/getPersonById";
import { DetailsMoviePage } from "pages/DetailsMoviePage";
import styles from "./DetailsPersonPage.module.css";

const DetailsPersonPage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState([]);
  const getPerson = async () => {
    const response = await getPersonById(id);
    setPerson(response);
  };

  useEffect(() => {
    getPerson(id);
  }, [id]);

  return (
    <section className={styles.main}>
      <div className={styles.wrapperCard}>
        <div className={styles.card} style={{ backgroundImage: `url(${person.photo})` }}></div>
        <div className={styles.description}>
          <h3>{person.name}</h3>
          <h3>Возвраст: {person.age}</h3>
          <h3>Фильмов: {person.movies?.length}</h3>
        </div>
      </div>
      {person.movies && <DetailsMoviePage movies={person.movies} />}
    </section>
  );
};

export default DetailsPersonPage;
