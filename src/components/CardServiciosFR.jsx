import React, { useContext, useEffect, useState } from "react";
import imagenKinesio from "../assets/img/kinesio.jpg"; // Importa tus imágenes aquí
import imagenTermografica from "../assets/img/termo.png";
import imagenTerapiaManual from "../assets/img/terapiaManual.jpg";
import imagenOsteopatia from "../assets/img/osteopatia.jpg";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Papa from "papaparse";

const CardServiciosFR = () => {
  const [language, setLanguage] = useState("fr"); // idioma por defecto, 'es' para español

  const [translationsCards, setTranslationsCards] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vT5uzbHvnfL7by920NLATs8ysafau5kwg1HYc6hhEBXIUhfw39Tiumak0J7bCt6rl01v2RUfsAQw7TO/pub?output=csv"
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

  const getTranslation = (key) => {
    const translationKey = `${key}${language.toUpperCase()}`;
    const translation = translationsCards[1]
      ? translationsCards[1][translationKey]
      : "";

    return translation;
  };

  const transformTextToList = (text) => {
    return text.split(".").map((item) => item.trim());
  };

  // Datos de las cartas con imágenes
  const cartasData = [
    {
      titulo: getTranslation("tituloCard1"),
      imgSrc: imagenKinesio,
      puntos: transformTextToList(getTranslation("puntosCard1")),
    },
    {
      titulo: getTranslation("tituloCard2"),
      imgSrc: imagenTermografica,
      puntos: transformTextToList(getTranslation("puntosCard2")),
    },
    {
      titulo: getTranslation("tituloCard3"),
      imgSrc: imagenTerapiaManual,
      puntos: transformTextToList(getTranslation("puntosCard3")),
    },
    {
      titulo: getTranslation("tituloCard4"),
      imgSrc: imagenOsteopatia,
      puntos: transformTextToList(getTranslation("puntosCard3")),
    },
    // {
    //   titulo: "Anáisis biomecánico de los jugadores",
    //   imgSrc: imagenAnalisis,
    //   puntos: [
    //     " Evaluación funcional de la movilidad músculo esquelética del jugado",
    //     " Sedeterminará el impacto que tiene el cuerpo del jugador sobre la estructura anatómica del caballo",
    //   ],
    // },
  ];

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

export default CardServiciosFR;
