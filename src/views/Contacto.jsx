import { Image } from "react-bootstrap";
import ContactoContenido from "../components/ContactoContenido";
import bannerServicios from "../assets/img/slider10.png";
import bannerServiciosCuadrada from "../assets/img/slider10.png";
import NavReactES from "../components/common/NavReactES";
import Footer from "../components/common/Footer";

const Contacto = () => {
  return (
    <div>
      <NavReactES />
      <>
        <div className="bannerContainer d-none d-md-block">
          <Image
            src={bannerServicios}
            className="bannerImage"
            alt="inicio banner"
          />
        </div>
        <div className=" d-md-none d-block">
          <Image
            src={bannerServiciosCuadrada}
            className="bannerImage"
            alt="inicio banner"
          />
        </div>
      </>
      <ContactoContenido />
      <Footer />
    </div>
  );
};

export default Contacto;
