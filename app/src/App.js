import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./nav/Navigation";
import Home from "./pages/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import OurTeam from "./pages/aboutus/OurTeam";
import Footer from "./footer/Footer";
import Donate from "./pages/Donate";
import Programs from "./pages/programs/Programs";
import Entrepreneurship from "./pages/programs/Entrepreneurship";
import CodingBootcamp from "./pages/programs/CodingBootcamp";

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
          <Route path="/programs" element={<Programs />} />
          <Route path="/codingbootcamp" element={<CodingBootcamp />} />
          <Route path="/entrepreneurship" element={<Entrepreneurship />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
