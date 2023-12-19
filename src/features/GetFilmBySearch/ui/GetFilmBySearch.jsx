import Input from "shared/ui/Input/Input";
import styles from "./getFilmBySearch.module.css";
import { getFilmByName } from "../model/services/getFilmByName";
import { useDispatch } from "react-redux";
import { MovieActions } from "pages/MainPage/model/slices/MovieSlice";
import { useEffect, useState } from "react";

const GetFilmBySearch = ({ disabled, placeholder }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const getMovie = async () => {
    const res = await getFilmByName(`${search}`).then((data) => data);
    dispatch(MovieActions.setFilmBySearch(res));
  };

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <Input styles={styles.searchInput} disabled={disabled} placeholder={placeholder} handler={onChangeSearch} />
      <button onClick={() => getMovie()}>Искать</button>
    </>
  );
};

export default GetFilmBySearch;
