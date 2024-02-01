import { routes } from "shared/lib/config/routes";
import { useSelector, useDispatch } from "react-redux";
import { getMovieForCollection } from "../../model/selectors/getMovieForCollection/getMovieForCollection";
import { MyCollectionActions } from "../../model/slices/MyCollectionSlice";
import { getIsAuthUser } from "../../../MainPage";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { removeEntireListCollection } from "shared/lib/config/movieService";
import Sidebar from "shared/ui/Sidebar/Sidebar";
import Footer from "shared/ui/Footer/Footer";
import MyButton from "shared/ui/MyButton/MyButton";
import styles from "./collectionPage.module.css";
import Slider from "widgets/Slider/Slider";
import Header from "shared/ui/Header/Header";
import CollectionCard from "../CollectionCard/CollectionCard";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getMovieForCollection);
  const isAuth = useSelector(getIsAuthUser);
  const navigate = useNavigate();
  const id = useSelector((state) => state.user.id);

  const handleCollection = async () => {
    dispatch(MyCollectionActions.clearAll());
    removeEntireListCollection(id, "myCollection");
  };

  useEffect(() => {
    if (!localStorage.getItem("userEmail")) {
      navigate(routes.home);
    }
  }, [navigate]);
  if (!movies.length) {
    return (
      <section className={styles.main}>
        <Header />

        <div className={styles.emptyWrapper}>
          <Sidebar />
          <h2 className={styles.emptyPage}>Список пуст</h2>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.main}>
      <Header />
      {movies.length && (
        <MyButton styles={styles.deleteEntireList} handler={() => handleCollection()}>
          Очистить список ({movies.length})
        </MyButton>
      )}
      <div className={styles.mainWrapper}>
        <Sidebar />
        <Slider
          width="80%"
          height="80%"
          sizeCard={1800}
          itemsPerPage={1}
          snowButtons={movies.length > 1 ? true : false}
        >
          {movies.map((item) => (
            <CollectionCard movie={item} key={item.id} />
          ))}
        </Slider>
      </div>
      <Footer />
    </section>
  );
};

export default CollectionPage;
