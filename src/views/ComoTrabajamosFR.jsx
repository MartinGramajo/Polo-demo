import "animate.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Papa from "papaparse";
import ImageTextComponent2FR from "../components/ImageTextComponent2FR";
import ImageTextMobileComponent2FR from "../components/ImageTextMobileComponenteFR";
import CardComoTrabajamosFR from "../components/CardComoTrabajamosFR";
import NavReactFR from "../components/common/NavReactFR";
import FooterFR from "../components/common/FooterFR";

const ComoTrabajamosFR = () => {
  const handleContactClick = () => {
    window.location.href = "#/contacto";
  };

  const [language, setLanguage] = useState("fr"); // idioma por defecto, 'es' para español
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWBofmPkYqHsDhDlEFHB2INpfVF3JalzE06bfd9T0Gb40Bb7Tf-L5hqQYR9IW95lDvE7-gDU8Nzdte/pub?output=csv"
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
    <section className="d-flex flex-column min-vh-100 ">
      <NavReactFR />
      <div className="container">
        <div
          className="d-none d-lg-block animate__animated   animate__fadeIn"
          id="trabajamos"
        >
          <ImageTextComponent2FR />
        </div>

        <div>
          <div
            id="trabajamos/mobile"
            className="d-lg-none d-block  animate__animated  animate__fadeIn"
          >
            <ImageTextMobileComponent2FR />
          </div>
        </div>

        <div className="container animate__animated animate__fadeInUp py-4">
          <section className="row">
            <CardComoTrabajamosFR />
          </section>
          <div className="container animate__animated animate__fadeInUp py-4">
            <blockquote className="blockquote text-center py-5-mobile">
              <p className="mb-0">{getTranslation("footerTexto")}</p>
            </blockquote>
            <div className="text-center pb-4 mx-4">
              <button
                className="ver-mas-btn-sidebar text-white montserrat-regular"
                onClick={handleContactClick}
              >
                {getTranslation("botonContacto")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterFR />
    </section>
  );
};

export default ComoTrabajamosFR;
