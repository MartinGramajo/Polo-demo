import "animate.css";
import { useEffect, useState } from "react";
import ImageTextComponent2EN from "../components/ImageTextComponent2EN";
import ImageTextMobileComponent2EN from "../components/ImageTextMobileComponent2EN";
import axios from "axios";
import Papa from "papaparse";
import NavReactEN from "../components/common/NavReactEN";
import FooterEN from "../components/common/FooterEN";
import CardComoTrabajamosDinamicoEN from "../components/CardComoTrabajamosDinamicoEN";
const ComoTrabajamosEN = () => {
  const handleContactClick = () => {
    window.location.href = "#/contact";
  };

  const [language, setLanguage] = useState("en"); // idioma por defecto, 'es' para español
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
      <NavReactEN />
      <div className="container">
        <div
          className="d-none d-lg-block animate__animated   animate__fadeIn"
          id="trabajamos"
        >
          <ImageTextComponent2EN />
        </div>

        <div>
          <div
            id="trabajamos/mobile"
            className="d-lg-none d-block  animate__animated  animate__fadeIn"
          >
            <ImageTextMobileComponent2EN />
          </div>
        </div>

        <div className="container animate__animated animate__fadeInUp py-4">
          <section className="row">
            <CardComoTrabajamosDinamicoEN />
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
      <div className="mt-auto">
        <FooterEN />
      </div>
    </section>
  );
};

export default ComoTrabajamosEN;
