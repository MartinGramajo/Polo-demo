import "animate.css";
import ImageTextComponent2 from "../components/ImageTextComponent2";
import ImageTextMobileComponent2 from "../components/ImageTextMobileComponente2";

import imagenKinesio from "../assets/img/kinesio.jpg"; // Importa tus imágenes aquí
import imagenTermografica from "../assets/img/termo.png";
import imagenTerapiaManual from "../assets/img/terapiaManual.jpg";
import imagenOsteopatia from "../assets/img/osteopatia.jpg";
import imagenAnalisis from "../assets/img/analisis.jpg";
import BannerServicios from "../components/BannerServicios";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ComoTrabajamos = () => {
  // Datos de las cartas con imágenes
  const cartasData = [
    {
      titulo: " Plan Polo Salud",

      puntos: [
        "Registro de los caballos con imagenes térmicas para evaluar su estado de salud músculo esquelética ",
        "Elaboración de plan de Tratamiento y duración del mismo ",
        "Evaluación palpatoria activa y pasiva músculo esquelética ",
        "Evaluación biomecánica del equipo",
        "Tratamiento manual, kinesiotape y seguimiento y monitoreo con soporte de imágenes térmicas ",
        "Ideal para la preparación de la temporada ",
      ],
    },
    {
      titulo: "Plan mantenimiento Polo Salud",

      puntos: [
        "Registro, monitoreo y seguimiento de la salud de los caballos con  imagenes térmicas durante todo el mantenimiento ",
        "Recuperación de lesiones",
        "Utilización de técnicas palpatorias y estiramientos activos, pasivos y uso de kinesiotape según necesidad particular",
        "Evaluación y seguimiento biomecánico del equipo",
        "Ideal para el seguimiento y acompañamiento durante la temporada ",
      ],
    },
    {
      titulo: "Plan Descanso Polo Salud",

      puntos: [
        "Registro de los caballos con imagenes térmicas",
        "Recuperación muscular y articular de los caballos ",
        "Recuperación muscular y articular de los jugadores",
        "Ideal para el final de la temporada, antes de darle descanso a los caballos en el campo. ",
      ],
    },
  ];

  const handleContactClick = () => {
    window.location.href = "#/contacto";
  };

  return (
    <div className="container">
      <div
        className="d-none d-lg-block animate__animated   animate__fadeIn"
        id="trabajamos"
      >
        <ImageTextComponent2 />
      </div>

      <div>
        <div
          id="trabajamos/mobile"
          className="d-lg-none d-block  animate__animated  animate__fadeIn"
        >
          <ImageTextMobileComponent2 />
        </div>
      </div>

      <div className="container animate__animated animate__fadeInUp py-4">
        <section className="row">
          {cartasData.map((carta, index) => (
            <div key={index} className="col-lg-12 mb-4">
              <Card
                className="border border-danger rounded-3 cartas-planes2-como-trabajamos
"
              >
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
        <div className="container animate__animated animate__fadeInUp py-4">
          <blockquote className="blockquote text-center">
            <p className="mb-0">
              Nuestro espíritu es innovador, colaborativo y eficaz. Nuestras
              técnicas son no invasivas y sin doping. Nuestro alcance es
              internacional.
            </p>
          </blockquote>
          <div className="text-center pb-4 mx-4">
            <button
              className="ver-mas-btn-sidebar text-white montserrat-regular"
              onClick={handleContactClick}
            >
              CONTACTO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComoTrabajamos;
