import React, { memo, useState } from "react";
import MyButton from "../MyButton/MyButton";
import Navbar from "../Navbar/Navbar";
import styles from "./sidebar.module.css";
import ListReviewIcon from "shared/assets/list-review-icon.svg";
import FilmIcon from "shared/assets/wanttosee-icon.svg";
import Svg from "../Svg/Svg";
import { ROUTES } from "../../lib/config/routes";
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
        <MyButton handler={() => toggleSidebar()} styles={styles.btnHandleSidebar}>
          {collapsed ? "<" : ">"}
        </MyButton>
        <div className={styles.icons}>
          {/* <Svg path={ListReviewIcon} styles={styles.svgReview} viewBox="-200 -290 990 900" /> */}
          {/* <Svg path={FilmIcon} styles={styles.svgReview} viewBox="-200 260 990 10" /> */}
        </div>
        <div className={styles.routes}>
          <Navbar path={ROUTES.myCollection}>Моя коллекция</Navbar>
          <Navbar path={ROUTES.myReviews}>Мои рецензии</Navbar>
          <Navbar path={ROUTES.wantToSee}>Хочу посмотреть</Navbar>
        </div>
      </div>
    </>
  );
});

export default Sidebar;
