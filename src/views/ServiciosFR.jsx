import React, { useContext, useEffect, useState } from "react";
import BannerServicios from "../components/BannerServicios";
import { LanguageContextService } from "../context/LanguageContextService";
import CardServicios from "../components/CardServicios";
import NavReactService from "../components/common/NavReactService";
import FooterServicios from "../components/common/FooterServicios";
import axios from "axios";
import Papa from "papaparse";
import CardServiciosEN from "../components/CardServiciosEN";
import CardServiciosFR from "../components/CardServiciosFR";

const ServiciosFR = () => {
  const handleContactClick = () => {
    window.location.href = "#/contacto";
  };

  const handleTrabajamosClick = () => {
    window.location.href = "#/como-trabajamos";
  };

  const [language, setLanguage] = useState("fr"); // idioma por defecto, 'es' para español
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQaHibhN2EoD0Yz3Kh4h9MjHKic_KwacspvB5pBgHVpn9InUm6ERhstFxoiUx8i8LWl-n3ZIW5Vszc-/pub?gid=0&single=true&output=csv"
        );
        const parsedData = Papa.parse(response.data, { header: true }).data;
        const translationsData = {};
        parsedData.forEach((row) => {
          translationsData[row.id] = row;
        });
        setTranslations(translationsData);
      } catch (error) {
        console.error("Error fetching translations:", error);
      }
    };

    fetchTranslations();
  }, []);

  const getTranslation = (key) => {
    const translationKey = `${key}${language.toUpperCase()}`;
    const translation = translations[1] ? translations[1][translationKey] : "";
    return translation;
  };

  return (
    <div className="d-flex flex-column min-vh-100 ">
      <NavReactService />
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
          <CardServiciosFR />
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
    </div>
  );
};

export default ServiciosFR;
