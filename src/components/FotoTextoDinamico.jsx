import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import axios from "axios";
import Papa from "papaparse";

const FotoTextoDinamico = () => {
  const [language, setLanguage] = useState("es");
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vTCVR6MsDjn7wZiWO0wMoPpcgAi6sRfOozie0jKCQOyuOOmystMmMAYQuHocnJwWw7hst788aXCTssB/pub?output=csv"
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

  const getTranslation = (translation, key) => {
    const translationKey = `${key}${language.toUpperCase()}`;
    return translation ? translation[translationKey] : "";
  };

  const translationsArray = Object.values(translations);

  return (
    <>
      <div className="text-center">
        <h4
          style={{ fontSize: "24px" }}
          className="pt-4 py-5-mobile montserrat-bold text-dark lato-regular py-2 animate__animated  animate__backInUp"
        >
          {getTranslation(translations[1], "tituloPagina")}
        </h4>
      </div>
      <section className="container py-4">
        <article className="row">
          {translationsArray.map((translation, i) => (
            <React.Fragment key={i}>
              <div className="col-lg-6 col-12">
                <Image
                  className="pt-4 bannerImage"
                  src={getTranslation(translation, "imagenCard")}
                  alt="texto imagen"
                  fluid
                />
              </div>
              <div className="col-lg-6 col-12">
                <h4
                  style={{ fontSize: "24px" }}
                  className="pt-4 py-5-mobile montserrat-bold text-dark lato-regular py-2 animate__animated  animate__backInUp"
                >
                  {getTranslation(translation, "tituloCard")}
                </h4>
                <h5
                  style={{ fontSize: "20px" }}
                  className="py-5-mobile montserrat-bold text-dark lato-regular py-2 animate__animated  animate__backInUp"
                >
                  {getTranslation(translation, "subtituloCard")}
                </h5>
                <h5
                  style={{ fontSize: "18px" }}
                  className="py-5-mobile text-dark py-2 animate__animated animate__backInUp"
                >
                  {getTranslation(translation, "parrafoCard")}
                </h5>
              </div>
            </React.Fragment>
          ))}
        </article>
      </section>
    </>
  );
};

export default FotoTextoDinamico;
