import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { FetchMovie } from "./pages/FetchMovie";
import { ErrorBoundary } from "./app/providers";

const App = () => {
  return (
    <section className="main">
      <Header />
      <ErrorBoundary>
        <FetchMovie />
      </ErrorBoundary>
      <Footer />
    </section>
  );
};

export default App;
