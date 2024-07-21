import "animate.css";
import axios from "axios";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import ContactoFormEN from "./ContactoFormEN";

const ContactoContenidoEN = () => {
  const [language, setLanguage] = useState("en"); // idioma por defecto, 'es' para español
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_ZcSsAXNNVg10BaEZ9WfreNzaFGIXNVC0Zaz7dxcgM0IoirzTIein6LC2wx6t0FC7c9WDg3_u_Lwu/pub?output=csv"
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
    <section className="container">
      <div className="py-4 d-none d-lg-block">
        <div className="d-flex justify-content-start ">
          <h1
            className="animate__animated  animate__fadeInLeft montserrat-bold"
            style={{ fontSize: "22px", fontWeight: "bold" }}
          >
            {getTranslation("tituloContacto")}
          </h1>
        </div>
      </div>
      <div className="d-flex justify-content-start py-4 d-lg-none d-block py-5-mobile">
        <h1
          className="animate__animated  animate__fadeInLeft montserrat-bold"
          style={{ fontSize: "18px", fontWeight: "bold" }}
        >
          {getTranslation("tituloContacto")}
        </h1>
      </div>
      <div className="d-flex justify-content-start">
        <hr style={{ width: "200px", color: "#ff282d" }} />
      </div>
      <div className="row my-4 text-center">
        <div className=" col-12 animate__animated  animate__fadeInUp">
          <ContactoFormEN />
        </div>
      </div>
    </section>
  );
};

export default ContactoContenidoEN;
