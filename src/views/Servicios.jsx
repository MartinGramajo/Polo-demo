import React, { useContext } from "react";
import BannerServicios from "../components/BannerServicios";
import { LanguageContextService } from "../context/LanguageContextService";
import CardServicios from "../components/CardServicios";
import FooterServicios from "../components/common/FooterServicios";
import NavReactES from "../components/common/NavReactES";

const Servicios = () => {
  const handleContactClick = () => {
    window.location.href = "#/contacto";
  };

  const handleTrabajamosClick = () => {
    window.location.href = "#/como-trabajamos";
  };

  const { language, translations } = useContext(LanguageContextService);

  const getTranslation = (key) => {
    const translationKey = `${key}${language.toUpperCase()}`;
    const translation = translations[1] ? translations[1][translationKey] : "";
    return translation;
  };

  return (
    <div className="d-flex flex-column min-vh-100 ">
      <NavReactES />
      <BannerServicios />
      <article className="py-4" style={{ textAlign: "start" }}>
        <div className="pt-4 container">
          <h1
            className="animate__animated animate__fadeInLeft montserrat-bold"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          >
            {getTranslation("titulo")}
          </h1>
        </div>
        <article className="container pb-4">
          <h6
            className="montserrat-regular py-5-mobile"
            style={{ fontSize: "20px" }}
          >
            {getTranslation("parrafo")}
          </h6>
        </article>
        <article>
          <CardServicios />
        </article>
        <article className="container pb-4 text-center">
          <h6
            className="montserrat-regular py-5-mobile"
            style={{ fontSize: "20px" }}
          >
            {getTranslation("textoFooter")}
          </h6>
        </article>
        <section className="d-flex justify-content-center flex-wrap">
          <div className="text-center pb-4 mx-4">
            <button
              className="ver-mas-btn-sidebar text-white montserrat-regular"
              onClick={handleTrabajamosClick}
            >
              {getTranslation("botonTrabajamos")}
            </button>
          </div>
          <div className="text-center pb-4 mx-4">
            <button
              className="ver-mas-btn-sidebar text-white montserrat-regular"
              onClick={handleContactClick}
            >
              {getTranslation("botonContacto")}
            </button>
          </div>
        </section>
      </article>
      <FooterServicios />
    </div>
  );
};

export default Servicios;
