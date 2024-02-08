// import Footer from "shared/ui/Footer/Footer";
import Header from "features/Header/ui/Header";
import { MainPage } from "pages/MainPage";
import { GetFilmBySearch } from "features/GetFilmBySearch";
import { ErrorBoundary } from "../app/providers/index";
import "./styles/index.scss";

const App = () => {
  return (
    <section className="main">
      <ErrorBoundary>
        <Header>
          <GetFilmBySearch placeholder="Мультфильм, фильм, сериал" collectionType="movie" />
        </Header>
        <MainPage />
      </ErrorBoundary>
      {/* <Footer /> */}
    </section>
  );
};

export default App;
