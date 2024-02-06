import { memo, useState } from "react";
import { routes } from "../../lib/config/routes";
import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import styles from "./sidebar.module.scss";

const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(true);
  const { pathname } = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div className={`${styles.Sidebar} ${collapsed ? styles.Collapsed : ""}`}>
        <Button handler={() => toggleSidebar()} styles={styles.btnHandleSidebar}>
          {collapsed ? "<" : ">"}
        </Button>
        <div className={styles.icons}>
          {/* <Svg path={ListReviewIcon} styles={styles.svgReview} viewBox="-200 -290 990 900" /> */}
          {/* <Svg path={FilmIcon} styles={styles.svgReview} viewBox="-200 260 990 10" /> */}
        </div>
        <div className={styles.routes}>
          <Navbar path={routes.collectionPage} pathname={pathname}>
            Моя коллекция
          </Navbar>
          <Navbar path={routes.reviewsPage} pathname={pathname}>
            Мои рецензии
          </Navbar>
          <Navbar path={routes.wantToSeePage} pathname={pathname}>
            Хочу посмотреть
          </Navbar>
        </div>
      </div>
    </>
  );
});

export default Sidebar;
