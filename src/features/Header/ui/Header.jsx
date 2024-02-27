import { User } from "../../User";
import { routes } from "shared/lib/config/routes";
import React, { useEffect, useState } from "react";
import { useResize } from "shared/lib/hooks/useResize";
import { useModal } from "shared/lib/hooks/useModal";
import { AuthForm } from "features/AuthForm/";
import BurgerMenu from "shared/assets/burger-menu-icon.svg";
import Svg from "shared/ui/Svg/Svg";
import Navbar from "shared/ui/Navbar/Navbar";
import styles from "./header.module.scss";

const Header = ({ children }) => {
  const size = useResize();
  const [isOpenedMenu, setIsOpened] = useState(false);
  const { isOpened, handleModal } = useModal();

  const handleSearch = () => {
    setIsOpened(false);
  };

  useEffect(() => {
    if (size >= 1103) {
      setIsOpened(false);
    }
  }, [size]);

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navigation}>
        <Navbar path={routes.home}>Главная</Navbar>
        <Navbar path={routes.whatToSeePage}>Что посмотреть?</Navbar>
        <div className={styles.searchBar}>
          {children}
          <User />
        </div>
        <div className={!isOpenedMenu ? styles.mobileContent : styles.mobileContentOpen}>
          <div className={styles.burger} onClick={() => setIsOpened((prev) => !prev)}>
            <Svg path={BurgerMenu} />
          </div>
          {isOpenedMenu && (
            <div onClick={(event) => event.stopPropagation()} className={styles.content}>
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                  return React.cloneElement(child, { handleSearch: handleSearch });
                }
                return child;
              })}
              <div className={styles.modal}>
                <AuthForm isOpened={isOpened} handleModal={handleModal} />
              </div>
              <div className={styles.userContent}>
                <User />
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
