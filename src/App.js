import "./App.css";
import "animate.css/animate.compat.css"
import { HashRouter, Route, Routes } from "react-router-dom";
import Contacto from "./views/Contacto";
import ScrollToTop from "./components/common/ScrollToTop";
import Servicios from "./views/Servicios";
import Empresa from "./views/Empresa";
import Home2 from "./views/Home2";
import ComoTrabajamos from "./views/ComoTrabajamos";
import BlogScreen from "./views/BlogScreen";
import Home2EN from "./views/Home2EN";
import Home2FR from "./views/Home2FR";
import ServiciosEN from "./views/ServiciosEN";
import ServiciosFR from "./views/ServiciosFR";
import ComoTrabajamosEN from "./views/ComoTrabajamosEN";
import ComoTrabajamosFR from "./views/ComoTrabajamosFR";
import EmpresaEN from "./views/EmpresaEN";
import EmpresaFR from "./views/EmpresaFR";
import BlogScreenEN from "./views/BlogScreenEN";
import BlogScreenFR from "./views/BlogScreenFR";
import ContactoEN from "./views/ContactoEN";
import ContactoFR from "./views/ContactoFR";


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
          <Route exact path="/como-trabajamos" element={<ComoTrabajamos />} />
          <Route exact path="/how-we-work" element={<ComoTrabajamosEN />} />
          <Route exact path="/comment-nous-travaillons" element={<ComoTrabajamosFR />} />
          <Route exact path="/quien/soy" element={<Empresa />} />
          <Route exact path="/about/us" element={<EmpresaEN />} />
          <Route exact path="/a/propos/de/nous" element={<EmpresaFR />} />
          <Route exact path="/blog" element={<BlogScreen />} />
          <Route exact path="/blog-en" element={<BlogScreenEN />} />
          <Route exact path="/blog-fr" element={<BlogScreenFR />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/contact" element={<ContactoEN />} />
          <Route exact path="/contact-fr" element={<ContactoFR />} />
        </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
