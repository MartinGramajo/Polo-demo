import "./App.css";
import "animate.css/animate.compat.css"
import { HashRouter, Route, Routes } from "react-router-dom";
import Contacto from "./views/Contacto";
import ScrollToTop from "./components/common/ScrollToTop";
import Galeria from "./views/Galeria";
import Novedades from "./views/Novedades";
import Servicios from "./views/Servicios";
import Empresa from "./views/Empresa";
import Home2 from "./views/Home2";
import ComoTrabajamos from "./views/ComoTrabajamos";
import CamaraTermografica from "./views/CamaraTermografica";
import BlogScreen from "./views/BlogScreen";
import NavReact from "./components/common/NavReact";
import Footer from "./components/common/Footer";
import Home2EN from "./views/Home2EN";
import Home2FR from "./views/Home2FR";
import ServiciosEN from "./views/ServiciosEN";
import ServiciosFR from "./views/ServiciosFR";


function App() {
  return (
    <div className="d-flex flex-column min-vh-100 " id="top">
      <HashRouter>
        <ScrollToTop />

        <Routes>
          <Route exact path="/" element={<Home2 />} />
          <Route exact path="/home-en" element={<Home2EN />} />
          <Route exact path="/home-fr" element={<Home2FR />} />
          <Route exact path="/servicios" element={<Servicios />} />
          <Route exact path="/services" element={<ServiciosEN />} />
          <Route exact path="/services-fr" element={<ServiciosFR />} />
          <Route exact path="/quien/soy" element={<Empresa />} />
          <Route exact path="/galeria" element={<Galeria />} />
          <Route exact path="/novedades" element={<Novedades />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/como-trabajamos" element={<ComoTrabajamos />} />
          <Route exact path="/blog" element={<BlogScreen />} />
          <Route exact path="/camara" element={<CamaraTermografica />} />
        </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
