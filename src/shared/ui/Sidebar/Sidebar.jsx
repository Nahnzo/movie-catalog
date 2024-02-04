import React, { memo, useState } from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import styles from "./sidebar.module.scss";
import { routes } from "../../lib/config/routes";
import { useLocation } from "react-router-dom";

const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const styledRoute = location?.pathname?.slice(15);

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
          <Navbar path={routes.collectionPage}>Моя коллекция</Navbar>
          <Navbar path={routes.reviewsPage}>Мои рецензии</Navbar>
          <Navbar path={routes.wantToSeePage}>Хочу посмотреть</Navbar>
        </div>
      </div>
    </>
  );
});

export default Sidebar;
