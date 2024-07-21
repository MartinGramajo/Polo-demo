import { Image } from "react-bootstrap";
import bannerServicios from "../assets/img/slider10.png";
import bannerServiciosCuadrada from "../assets/img/slider10.png";

import ContactoContenidoFR from "../components/ContactoContenidoFR";

const ContactoFR = () => {
  return (
    <div>
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
      <ContactoContenidoFR />
    </div>
  );
};

export default ContactoFR;
