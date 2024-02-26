import { User } from "../../User";
import { routes } from "shared/lib/config/routes";
import { useState } from "react";
import Navbar from "shared/ui/Navbar/Navbar";
import styles from "./header.module.scss";
const Header = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navigation}>
        <Navbar path={routes.home}>Главная</Navbar>
        <Navbar path={routes.whatToSeePage}>Что посмотреть?</Navbar>
        <div className={styles.searchBar}>
          {children} <User />
        </div>
        <div
          className={!isOpened ? styles.mobileContent : styles.mobileContentOpen}
          onClick={() => setIsOpened((prev) => !prev)}
        >
          X
          {isOpened && (
            <div onClick={(event) => event.stopPropagation()} className={styles.content}>
              {children}
              <User />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
