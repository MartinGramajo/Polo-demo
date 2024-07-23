import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Papa from "papaparse";

const CardServiciosDinamica = () => {
  const [language, setLanguage] = useState("es"); // idioma por defecto, 'es' para español
  const [translationsCards, setTranslationsCards] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vT_Cr5IXpooPdg4wPh0RJ_VzLU8xMr0aiFFRAcTXIELwxY1Fp6hN7nkWKdWl_L32bf2DnjE-sds58_M/pub?output=csv"
        );
        const parsedData = Papa.parse(response.data, { header: true }).data;
        const translationsData = {};
        parsedData.forEach((row) => {
          translationsData[row.id] = row;
        });
        setTranslationsCards(translationsData);
      } catch (error) {
        console.error("Error fetching translations:", error);
      }
    };

    fetchTranslations();
  }, []);

  const getTranslation = (key, row) => {
    const translationKey = `${key}${language.toUpperCase()}`;
    return row ? row[translationKey] : "";
  };

  const transformTextToList = (text) => {
    return text.split(".").map((item) => item.trim());
  };

  // Suponiendo que translationsCards contiene los datos del Excel
  const cartasData = Object.values(translationsCards).map((row) => ({
    titulo: getTranslation("tituloCard1", row),
    imgSrc: row[`imagenCard1${language.toUpperCase()}`], // Usar la URL de la imagen del archivo Excel
    puntos: transformTextToList(getTranslation("puntosCard1", row)),
  }));

  return (
    <div>
      <div className="container animate__animated animate__fadeInUp">
        <section className="row">
          {cartasData.map((carta, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <Card className="border border-danger rounded-3 cartas-planes2">
                <Card.Img
                  variant="top"
                  src={carta.imgSrc}
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title className="montserrat-bold">
                    {carta.titulo}
                  </Card.Title>
                  <ul className="list-unstyled">
                    {carta.puntos.map((punto, idx) => (
                      <li
                        key={idx}
                        className={
                          idx === 0
                            ? "pt-2 montserrat-regular"
                            : "py-4 montserrat-regular"
                        }
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="me-2"
                          style={{ color: "#8E9092" }}
                        />
                        <strong className="montserrat-bold">{punto}</strong>{" "}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CardServiciosDinamica;
