import logo from "./logo.svg";
import "./App.css";
import Carrousel from "./components/Carrousel";
import Navbar from "./components/Navbar";
import AnimeList from "./components/AnimeList";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full bg-black">
      <Carrousel />
      <AnimeList />
      <Footer />
    </div>
  );
}

export default App;
