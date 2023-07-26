import "./App.css";
import FetchMovie from "./components/FetchMovie/FetchMovie";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <section className="main">
        <Header />
        <FetchMovie />
        <Footer />
      </section>
    </>
  );
}

export default App;
