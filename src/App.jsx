import "./App.css";
import Footer from "./shared/ui/Footer/Footer";
import Header from "./shared/ui/Header/Header";
import { MainPage } from "./pages/MainPage";
import { ErrorBoundary } from "./app/providers";

const App = () => {
  return (
    <>
      <section className="main">
        <Header />
        <ErrorBoundary>
          <MainPage />
        </ErrorBoundary>
        <Footer />
      </section>
    </>
  );
};

export default App;
