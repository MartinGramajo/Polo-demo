import { Image } from "react-bootstrap";
import bannerServicios from "../assets/img/slider10.png";
import bannerServiciosCuadrada from "../assets/img/slider10.png";
import ContactoContenidoEN from "../components/ContactoContenidoEN";
import NavReactEN from "../components/common/NavReactEN";

const ContactoEN = () => {
  return (
    <div>
      <NavReactEN />
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
      <ContactoContenidoEN />
    </div>
  );
};

export default ContactoEN;
