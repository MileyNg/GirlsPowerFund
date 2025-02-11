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
import Impact from "./pages/Impact";
import GetInvolved from "./pages/GetInvolved";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/aboutus/ourteam" element={<OurTeam />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/codingbootcamp" element={<CodingBootcamp />} />
          <Route
            path="/programs/entrepreneurship"
            element={<Entrepreneurship />}
          />
          <Route path="/impact" element={<Impact />} />

          <Route path="/donate" element={<Donate />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
