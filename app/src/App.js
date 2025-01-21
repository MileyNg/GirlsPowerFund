import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./nav/Navigation";
import Home from "./pages/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import Quote from "./home/Quote";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
