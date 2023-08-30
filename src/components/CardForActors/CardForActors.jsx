/* eslint-disable react/prop-types */
import styles from "./cardForActors.module.css";

const CardForActors = ({ actor }) => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${actor.photo})` }} className={styles.avatar}></div>
    </div>
  );
};

export default CardForActors;