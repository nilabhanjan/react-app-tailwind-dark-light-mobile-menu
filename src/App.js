import Navbar from "./MainComponents/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./MainComponents/Footer";
import Location from "./MainComponents/Location";
import Home from "./MainComponents/Home";
import '../src/Styles.css';

function App() {
  let navmenu = [
    { name: "ABOUT ME", link: "/about" },
    { name: "CONTACT", link: "/contact" },
    { name: "OUR LOCATION", link: "/location" },
  ];
  return (
    <>
      <Router>
        <div className="flex flex-col h-screen justify-between ">
          <header>
            <Navbar navmenu={navmenu} />
          </header>

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/location" element={<Location />} />
            </Routes>
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
