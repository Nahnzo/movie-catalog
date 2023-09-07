/* eslint-disable react/prop-types */
import { getPersonById } from "../../tools/getPerson";
import styles from "./cardForActors.module.css";

const CardForActors = ({ actor }) => {
  async function goToAboutPerson(id) {
    await getPersonById(id);
    console.log(id);
  }
  return (
    <div
      style={{ backgroundImage: `url(${actor.photo})` }}
      className={styles.avatar}
      onClick={() => goToAboutPerson(actor.id)}
    ></div>
  );
};

export default CardForActors;
