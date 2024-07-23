import React, { useState, useEffect } from "react";
import "animate.css";
import BannerHome2Texto from "../components/BannerHome2Texto";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import CalendlyWidget from "../components/CalendlyWidget";
import axios from "axios";
import Papa from "papaparse";
import PregFrecuentesEN from "../components/PreguntasFrecuentasEN";
import NavReactEN from "../components/common/NavReactEN";
import FooterEN from "../components/common/FooterEN";
import ContactoFormEN from "../components/ContactoFormEN";
import CalendlyWidgetEN from "../components/CalendlyWidgetEN";

const Home2EN = () => {
  const [language, setLanguage] = useState("en"); // idioma por defecto, 'es' para español
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vTTmSJGxSNe2kImEIVgKhtxknXLKAp_VGisaA8Uw-4k0loYDNSjyCkIhfg-E_VwLT7XFxobD0H0rMWz/pub?output=csv"
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

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasPopupBeenShown = localStorage.getItem("popupShown");
    if (!hasPopupBeenShown) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const triggerPoint = 200; // Cambia este valor según cuándo quieras que aparezca el popup
        if (scrollY > triggerPoint) {
          setShowPopup(true);
          localStorage.setItem("popupShown", "true");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    window.location.reload();
  };

  const getTranslation = (key) => {
    const translationKey = `${key}Home${language.toUpperCase()}`;
    const translation = translations[1] ? translations[1][translationKey] : "";
    return translation;
  };

  return (
    <div className="d-flex flex-column min-vh-100 ">
      <NavReactEN />
      <BannerHome2Texto translations={translations} language={language} />
      <article className="pt-4 container d-none d-lg-block py-5">
        <h6 className="montserrat-regular" style={{ fontSize: "20px" }}>
          {getTranslation("parrafo1")}
          <br />
          {getTranslation("parrafo2")}
        </h6>
      </article>
      <article className="py-2 container d-lg-none d-block py-5-mobile">
        <h6 className="montserrat-regular" style={{ fontSize: "16px" }}>
          {getTranslation("titulo")}
          <br />
          {getTranslation("parrafo1")}
          <br />
          {getTranslation("parrafo2")}
        </h6>
      </article>

      <article className="container pt-4">
        <div className="pb-5 pt-2">
          <PregFrecuentesEN />
        </div>
      </article>

      <Modal show={showPopup} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold" }}>
            ¡Subscribe today!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            ¡Sign up today and get a 10% discount on the contracting of your
            first your first Polo Salud plan!
          </p>
          <ul>
            <li>Valid for the Polo Salud plan</li>
            <li>Not cumulative with other discounts</li>
          </ul>
          <p>¡Register now and take advantage of this exclusive benefit!</p>
          <ContactoFormEN />
        </Modal.Body>
      </Modal>
      <div className="mt-auto">
        <FooterEN />
      </div>
    </div>
  );
};

export default Home2EN;
