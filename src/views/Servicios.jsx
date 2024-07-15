import React from "react";
import { Card } from "react-bootstrap"; // Asumiendo que estás usando react-bootstrap
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import imagenKinesio from "../assets/img/kinesio.jpg"; // Importa tus imágenes aquí
import imagenTermografica from "../assets/img/termo.png";
import imagenTerapiaManual from "../assets/img/terapiaManual.jpg";
import imagenOsteopatia from "../assets/img/osteopatia.jpg";
import imagenAnalisis from "../assets/img/analisis.jpg";
import BannerServicios from "../components/BannerServicios";

const Servicios = () => {
  const handleContactClick = () => {
    window.location.href = "#/contacto";
  };

  const handleTrabajamosClick = () => {
    window.location.href = "#/como-trabajamos";
  };

  // Datos de las cartas con imágenes
  const cartasData = [
    {
      titulo: "Kinesio tapping",
      imgSrc: imagenKinesio,
      puntos: [
        "Trabaja la función muscular",
        "Activa el sistema analgésico endógeno y previene lesiones en articulaciones estresadas",
      ],
    },
    {
      titulo: "Monitoreo con cámara termográfica",
      imgSrc: imagenTermografica,
      puntos: [
        "Las imágenes térmicas muestran con diferentes colores sitios de inflamación",
        "Las usamos para diagnosticar precozmente lesiones, sobre todo en tendones, ligamentos y dorso y evaluar su evolución",
      ],
    },
    {
      titulo: "Terapia manual",
      imgSrc: imagenTerapiaManual,
      puntos: [
        "Trabaja los tejidos blandos con técnicas manuales de masaje",
        "Favorece la circulación y restablece la fatiga muscular",
      ],
    },
    {
      titulo: "Osteopatía",
      imgSrc: imagenOsteopatia,
      puntos: [
        "Trabaja las restricciones de movilidad articular y/o miofascial",
        "Reestablece la fisiología y funcionalidad corporal disminuyendo la nocicepción",
      ],
    },
    {
      titulo: "Anáisis biomecánico de los jugadores",
      imgSrc: imagenAnalisis,
      puntos: [
        " Evaluación funcional de la movilidad músculo esquelética del jugado",
        " Sedeterminará el impacto que tiene el cuerpo del jugador sobre la estructura anatómica del caballo",
      ],
    },
  ];

  return (
    <div>
      <BannerServicios />
      <article className="py-4" style={{ textAlign: "start" }}>
        <div className="pt-4 container">
          <h1
            className="animate__animated animate__fadeInLeft montserrat-bold"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          >
            PLANES Y SERVICIOS
          </h1>
        </div>
        <article className="container pb-4">
          <h6
            className="montserrat-regular py-5-mobile"
            style={{ fontSize: "20px" }}
          >
            Experimente los beneficios de trabajar con Polo Salud mediante sus
            servicios diseñados para optimizar el rendimiento de los caballos de
            polo y prevenir lesiones
          </h6>
        </article>
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
        <article className="container pb-4 text-center">
          <h6
            className="montserrat-regular py-5-mobile"
            style={{ fontSize: "20px" }}
          >
            Conoce más cómo trabajamos y nuestros Planes de tratamiento para
            organizaciones de polo
          </h6>
        </article>
        <section className="d-flex justify-content-center flex-wrap">
          <div className="text-center pb-4 mx-4">
            <button
              className="ver-mas-btn-sidebar text-white montserrat-regular"
              onClick={handleTrabajamosClick}
            >
              CÓMO TRABAJAMOS
            </button>
          </div>
          <div className="text-center pb-4 mx-4">
            <button
              className="ver-mas-btn-sidebar text-white montserrat-regular"
              onClick={handleContactClick}
            >
              CONTACTO
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Servicios;
