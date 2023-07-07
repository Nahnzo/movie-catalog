import "./App.css";
import FetchMovie from "./components/FetchMovie/FetchMovie";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <section className="main">
        <Header />
        <FetchMovie />
      </section>
    </>
  );
}

export default App;
