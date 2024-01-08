import { ROUTES } from "../../lib/config/routes";
import { User } from "entities/User";
import { GetFilmBySearch } from "features/GetFilmBySearch/index";
import Navbar from "../Navbar/Navbar";
import styles from "./header.module.css";
const Header = () => {
  return (
    <nav className={styles.navigation}>
      <Navbar path={ROUTES.home}>Главная</Navbar>
      <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
      <div className={styles.searchBar}>
        <GetFilmBySearch placeholder="Мультфильм, фильм, сериал" />
      </div>
      <User />
    </nav>
  );
};

export default Header;
