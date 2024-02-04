import { routes } from "../../lib/config/routes";
import { User } from "entities/User";
import { GetFilmBySearch } from "features/GetFilmBySearch/index";
import Navbar from "../Navbar/Navbar";
import styles from "./header.module.scss";
const Header = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navigation}>
        <Navbar path={routes.home}>Главная</Navbar>
        <Navbar path={routes.whatToSeePage}>Что посмотреть?</Navbar>
        <div className={styles.searchBar}>
          <GetFilmBySearch placeholder="Мультфильм, фильм, сериал" />
        </div>
        <User />
      </nav>
    </div>
  );
};

export default Header;
