/* eslint-disable react/prop-types */
import { getPersonById } from "../../tools/getPerson";
import styles from "./cardForActors.module.css";

const CardForActors = ({ actor }) => {
  const f = async (id) => {
    await getPersonById(id);
  };
  f(actor.id);
  return <div style={{ backgroundImage: `url(${actor.photo})` }} className={styles.avatar}></div>;
};

export default CardForActors;
