import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./nav/Navigation";
import Home from "./pages/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import OurTeam from "./pages/aboutus/OurTeam";
import Footer from "./footer/Footer";
import Donate from "./pages/Donate";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/aboutus/ourteam" element={<OurTeam />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
