import { ROUTES } from "../../routes";
import { BsFolder2Open } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { useDataLength } from "../../shared/lib/hooks/useDataLength";
import useLocalStorageData from "../../shared/lib/hooks/useLocalStorage";
import styles from "./header.module.css";
import Navbar from "../../shared/ui/Navbar/Navbar";

const Header = () => {
  const data = useDataLength(["arrayReviews", "wantToSee", "myCollection"]);
  useLocalStorageData(["wantToSee", "myReviews", "myCollection"]);
  return (
    <section className={styles.header}>
      <nav className={styles.navigation}>
        <Navbar path={ROUTES.wantToSee} icon={<BsFolder2Open />} dataLength={data["wantToSee"]}>
          Хочу посмотреть
        </Navbar>
        <Navbar
          path={ROUTES.myCollection}
          icon={<BiCameraMovie />}
          dataLength={data["myCollection"]}
        >
          Моя коллекция
        </Navbar>
        <Navbar path={ROUTES.myReviews} icon={<CiViewList />} dataLength={data["arrayReviews"]}>
          Мои рецензии
        </Navbar>
        <Navbar path={ROUTES.whatToSee}>Что посмотреть?</Navbar>
      </nav>
    </section>
  );
};

export default Header;
