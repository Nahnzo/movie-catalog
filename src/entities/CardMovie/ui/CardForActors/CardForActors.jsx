import { useNavigate } from "react-router-dom";
import styles from "./cardForActors.module.css";

const CardForActors = ({ actor }) => {
  const navigate = useNavigate();
  function goToAboutPerson(id) {
    navigate(`/movie-catalog/person/${id}`);
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
