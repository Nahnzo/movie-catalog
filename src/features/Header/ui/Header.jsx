import { User } from "entities/User";
import { routes } from "shared/lib/config/routes";
import Navbar from "shared/ui/Navbar/Navbar";
import styles from "./header.module.scss";
const Header = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navigation}>
        <Navbar path={routes.home}>Главная</Navbar>
        <Navbar path={routes.whatToSeePage}>Что посмотреть?</Navbar>
        <div className={styles.searchBar}>{children}</div>
        <User />
      </nav>
    </div>
  );
};

export default Header;
