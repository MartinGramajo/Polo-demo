import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Papa from "papaparse";

const CardComoTrabajamosDinamicoFR = () => {
  const [language, setLanguage] = useState("fr");
  const [translationsCards, setTranslationsCards] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHHKeStvm2T8Aau3gC2X81Cfc-frpHXxRGtwOAvK_5IyItt2P-X6apNR4LAomYszG-1X4Dnowk1LAg/pub?output=csv"
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

  // Generar datos de las cartas dinámicamente desde translationsCards
  const cartasData = Object.values(translationsCards)
    .map((row) => {
      const cardData = [];
      for (let i = 1; i <= 3; i++) {
        const tituloKey = `tituloCard${i}`;
        const puntosKey = `puntosCard${i}`;
        if (row[tituloKey + language.toUpperCase()]) {
          cardData.push({
            titulo: getTranslation(tituloKey, row),
            puntos: transformTextToList(getTranslation(puntosKey, row)),
          });
        }
      }
      return cardData;
    })
    .flat();

  return (
    <div>
      <div className="container animate__animated animate__fadeInUp">
        <section className="row">
          {cartasData.map((carta, index) => (
            <div key={index} className="col-lg-12 mb-4">
              <Card className="border border-danger rounded-3 cartas-planes">
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

export default CardComoTrabajamosDinamicoFR;
