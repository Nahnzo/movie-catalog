import "./App.css";
import Footer from "./shared/ui/Footer/Footer";
import Header from "./shared/ui/Header/Header";
import Sidebar from "./shared/ui/Sidebar/Sidebar";
import { MainPage } from "./pages/MainPage";
import { ErrorBoundary } from "./app/providers";

const App = () => {
  return (
    <>
      {/* <Sidebar /> */}
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
