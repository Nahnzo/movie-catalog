import "./App.css";
import FetchMovie from "./pages/FetchMovie/FetchMovie";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ErrorBoundary from "./app/providers/ErrorBoundary/ui/ErrorBoundary";

function App() {
  return (
    <section className="main">
      <Header />
      <ErrorBoundary>
        <FetchMovie />
      </ErrorBoundary>
      <Footer />
    </section>
  );
}

export default App;
