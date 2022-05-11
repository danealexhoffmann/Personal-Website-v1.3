import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="appContainer">
          <NavBar id="navbar" />
          <Routes id="routes">
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer id="footer" />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
