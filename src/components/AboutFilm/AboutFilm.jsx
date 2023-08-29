import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AboutFilm = () => {
  const { id } = useParams();
  const detail = useSelector((state) =>
    state.movie.movie.docs.find((emp) => emp.id === parseInt(id))
  );

  return <div>{detail.name}</div>;
};

export default AboutFilm;
