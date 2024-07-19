import React, { useContext } from "react";
import imagenKinesio from "../assets/img/kinesio.jpg"; // Importa tus imágenes aquí
import imagenTermografica from "../assets/img/termo.png";
import imagenTerapiaManual from "../assets/img/terapiaManual.jpg";
import imagenOsteopatia from "../assets/img/osteopatia.jpg";
import imagenAnalisis from "../assets/img/analisis.jpg";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { LanguageContextServiceCards } from "../context/LanguageContextServiceCards";

const CardServicios = () => {
  const { language, translations, setLanguage } = useContext(
    LanguageContextServiceCards
  );

  const getTranslation = (key) => {
    const translationKey = `${key}${language.toUpperCase()}`;
    const translation = translations[1] ? translations[1][translationKey] : "";
    console.log("Translation Key:", translationKey);
    console.log("Translation:", translation);
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
  console.log("CardServicios ~ translations:", translations);
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

export default CardServicios;
