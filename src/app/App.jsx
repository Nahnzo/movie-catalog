import Footer from "shared/ui/Footer/Footer";
import Header from "shared/ui/Header/Header";
import { GetFilmBySearch } from "features/GetFilmBySearch/index";
import { User } from "entities/User";
import { MainPage } from "pages/MainPage";
import { ErrorBoundary } from "../app/providers/index";
import "./styles/index.scss";

const App = () => {
  return (
    <section className="main">
      <Header>
        <GetFilmBySearch placeholder="Мультфильм, фильм, сериал" />
        <User />
      </Header>
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
      {/* <Footer /> */}
    </section>
  );
};

export default App;
