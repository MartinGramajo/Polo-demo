import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import axios from "axios";
import Papa from "papaparse";
import back from "../assets/back.png";

function MiHistoriaFR() {
  const [language, setLanguage] = useState("fr"); // idioma por defecto, 'es' para español

  const [translationsHistoria, setTranslationsHistoria] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vRa08op_8H-qvzSDfvbgJYXIPm97E7fIilzVw8XSLnNiLTZi_d2V0FTHpKkpcOCfEdmXVbTZT9HjH30/pub?output=csv"
        );
        const parsedData = Papa.parse(response.data, { header: true }).data;
        const translationsData = {};
        parsedData.forEach((row) => {
          translationsData[row.id] = row;
        });
        setTranslationsHistoria(translationsData);
      } catch (error) {
        console.error("Error fetching translations:", error);
      }
    };

    fetchTranslations();
  }, []);

  const getTranslation = (key) => {
    const translationKey = `${key}${language.toUpperCase()}`;
    const translation = translationsHistoria[1]
      ? translationsHistoria[1][translationKey]
      : "";
    return translation;
  };

  const [open, setOpen] = useState(false);

  const handleHomeClick = () => {
    window.location.href = "#/home-en";
  };

  return (
    <>
      <div className="d-flex justify-content-center pt-5">
        <Button
          onClick={() => setOpen(!open)}
          className={
            open
              ? `d-none ver-mas-btn-sidebar text-white montserrat-regular`
              : `d-block ver-mas-btn-sidebar text-white montserrat-regular`
          }
          aria-controls="MiHistoria-collapse-text"
          aria-expanded={open}
        >
          {getTranslation("botonTexto")}
        </Button>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="container text-dark montserrat-regular">
            <h4
              style={{ fontSize: "24px" }}
              className="pt-4  montserrat-bold text-dark lato-regular py-2 animate__animated  animate__backInUp"
            >
              {getTranslation("tituloHistoria")}
            </h4>
            <div>
              <h6 className="lato-regular py-2 animate__animated  animate__fadeInUp ">
                {getTranslation("parrafo1")}
              </h6>
            </div>
            <div>
              <h6 className="lato-regular py-2 animate__animated  animate__fadeInUp ">
                {getTranslation("parrafo2")}
              </h6>
            </div>
            <div>
              <h6 className="lato-regular py-2 animate__animated  animate__fadeInUp">
                {getTranslation("parrafo3")}
              </h6>
            </div>
            <div>
              <h6 className="lato-regular py-2 animate__animated  animate__fadeInUp">
                {getTranslation("parrafo4")}
              </h6>
            </div>
            <div>
              <h6 className="lato-regular py-2 aanimate__animated  animate__fadeInUp">
                {getTranslation("parrafo5")}
              </h6>
            </div>
            <div>
              <h6 className="lato-regular py-2 pb-5 animate__animated  animate__fadeInUp">
                {getTranslation("parrafo6")}
              </h6>
            </div>
          </div>
          <section className="d-flex justify-content-center flex-wrap">
            <div className="text-center pb-4 mx-4">
              <Button
                onClick={() => setOpen(!open)}
                className={
                  open
                    ? ` ver-mas-btn-sidebar text-white montserrat-regular`
                    : `ver-mas-btn-sidebar text-white montserrat-regular`
                }
                aria-controls="MiHistoria-collapse-text"
                aria-expanded={open}
              >
                {open ? (
                  <>
                    <img className="icono-back me-2" src={back} alt="back" />
                    Back
                  </>
                ) : (
                  getTranslation("botonTexto")
                )}
              </Button>
            </div>
          </section>
        </div>
      </Collapse>
    </>
  );
}

export default MiHistoriaFR;
