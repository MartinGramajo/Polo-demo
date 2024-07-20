import { Image } from "react-bootstrap";
import ContactoContenido from "../components/ContactoContenido";
import bannerServicios from "../assets/img/slider10.png";
import bannerServiciosCuadrada from "../assets/img/slider10.png";
import { LanguageContextContact } from "../context/LanguageContextContact";
import { useContext } from "react";
import NavReactContacto from "../components/common/NavReactContacto";

const Contacto = () => {
  const { language, translations, setLanguage } = useContext(
    LanguageContextContact
  );

  console.log("Servicios ~ translations:", translations);

  return (
    <div>
      <NavReactContacto />
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
    </div>
  );
};

export default Contacto;
