import React, { useState, useEffect } from "react";
import "animate.css";
import BannerHome2Texto from "../components/BannerHome2Texto";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import ContactoForm from "../components/ContactoForm";
import CalendlyWidget from "../components/CalendlyWidget";
import Footer from "../components/common/Footer";
import Papa from "papaparse";
import axios from "axios";
import PregFrecuentesFR from "../components/PreguntasFrecuentesFR";
import NavReactFR from "../components/common/NavReactFR";
import FooterFR from "../components/common/FooterFR";
import ContactoFormFR from "../components/ContactoFormFR";

const Home2FR = () => {
  const [language, setLanguage] = useState("fr"); // idioma por defecto, 'es' para español
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
      <NavReactFR />
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
      <CalendlyWidget />
      <article className="container pt-4">
        <div className="pb-5 pt-2">
          <PregFrecuentesFR />
        </div>
      </article>
      <Modal show={showPopup} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold" }}>
            ¡Abonnez-vous dès aujourd'hui!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            ¡Inscrivez-vous aujourd'hui et obtenez une réduction de 10% sur
            votre premier plan Polo Salud. votre premier plan Polo Salud!
          </p>
          <ul>
            <li>Valable pour le plan Polo Salud</li>
            <li>Non cumulable avec d'autres réductions</li>
          </ul>
          <p>
            ¡Inscrivez-vous maintenant et profitez de cet avantage exclusif!
          </p>
          <ContactoFormFR />
        </Modal.Body>
      </Modal>
      <FooterFR />
    </div>
  );
};

export default Home2FR;
