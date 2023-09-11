import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPersonById } from "../../tools/getPerson";
import styles from "./personDetail.module.css";
import ActorsMovies from "../ActorsMovies/ActorsMovies";

const PersonDetail = () => {
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
        <h3>{person.name}</h3>
      </div>
      <h1>Снялась</h1>
      {person.movies && <ActorsMovies movies={person.movies} />}
    </section>
  );
};

export default PersonDetail;
