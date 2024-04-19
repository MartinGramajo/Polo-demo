import "./App.css";
import "animate.css/animate.compat.css"
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NavReact from "./components/common/NavReact";
import Footer from "./components/common/Footer";
import Wsp from "./components/common/Wsp";
import ScrollToTop from "./components/common/ScrollToTop";
import Galeria from "./views/Galeria";
import Novedades from "./views/Novedades";
import Servicios from "./views/Servicios";
import Empresa from "./views/Empresa";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <HashRouter>
        <NavReact />
        <Wsp />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/quien/soy" element={<Empresa />} />
          <Route exact path="/servicios" element={<Servicios />} />
          <Route exact path="/galeria" element={<Galeria />} />
          <Route exact path="/novedades" element={<Novedades />} />
          <Route exact path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
