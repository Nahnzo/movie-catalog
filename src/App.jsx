import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { FetchMovie } from "./pages/FetchMovie";
import { ErrorBoundary } from "./app/providers";
import { Suspense } from "react";

const App = () => {
  return (
    <section className="main">
      <Suspense fallback="s">
        <Header />
      </Suspense>
      <ErrorBoundary>
        <FetchMovie />
      </ErrorBoundary>
      <Footer />
    </section>
  );
};

export default App;
