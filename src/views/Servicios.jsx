import { Card } from "react-bootstrap";
import BannerServicios from "../components/BannerServicios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Servicios = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleContactClick = () => {
    window.location.href = "#/contacto"; // Redirecciona a la página de contacto
  };

  return (
    <div>
      <BannerServicios />
      <article className="py-4 " style={{ textAlign: "start" }}>
        <div className=" py-4 container">
          <h1
            className=" animate__animated  animate__fadeInLeft montserrat-bold"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          >
            PLANES Y SERVICIOS
          </h1>
        </div>
        <div className="container animate__animated animate__fadeInUp">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <Card className="border border-dark rounded-3 cartas-planes">
                <Card.Body>
                  <Card.Title className="montserrat-bold">
                    Plan Polo Salud
                  </Card.Title>
                  <ul className="list-unstyled">
                    <li className="pt-2 montserrat-regular">
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#44f702" }}
                      />
                      <strong className="montserrat-bold">Evaluación:</strong>{" "}
                      Evaluamos los caballos mediante cámara termográfica y
                      métodos de palpación precisos, los cuales nos permiten
                      establecer un plan de tratamiento osteopático de
                      recuperación y mantenimiento.
                    </li>
                    <li className="py-5 montserrat-regular">
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#44f702" }}
                      />
                      <strong className="montserrat-bold">
                        Integración y Servicios:
                      </strong>{" "}
                      Esto se integra perfectamente en el manejo diario de los
                      caballos. Asimismo, ofrecemos servicios de osteopatía para
                      los jugadores, aliviando tensiones musculares y
                      recuperando la movilidad funcional de las estructuras
                      músculo esqueléticas solicitadas durante la temporada.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 mb-4">
              <Card className="border border-dark rounded-3 cartas-planes">
                <Card.Body>
                  <Card.Title className="montserrat-bold">
                    Plan Mantenimiento Polo Salud
                  </Card.Title>
                  <ul className="list-unstyled">
                    <li className="pt-2 montserrat-regular">
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#44f702" }}
                      />
                      <strong className="montserrat-bold">
                        Seguimiento y Mantenimiento:
                      </strong>{" "}
                      Establecemos un plan de seguimiento y mantenimiento de los
                      equinos, analizando la biomecánica funcional y estructuras
                      músculo esquelética de los caballos mediante palpación
                      manual precisa y análisis de las imágenes térmicas
                      profesionales.
                    </li>
                    <li className="py-4 montserrat-regular">
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#44f702" }}
                      />
                      <strong className="montserrat-bold">
                        Integración y Soporte Osteopático:
                      </strong>{" "}
                      Esto se integra perfectamente en el manejo diario de los
                      caballos. Asimismo, brindamos soporte osteopático a los
                      jugadores, aliviando tensiones musculares y recuperando la
                      movilidad funcional de las estructuras músculo
                      esqueléticas solicitadas durante la temporada.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center pb-4">
          <button
            className="ver-mas-btn-sidebar text-white montserrat-regular"
            onClick={handleContactClick}
          >
            CONTACTO
          </button>
        </div>
      </article>
    </div>
  );
};

export default Servicios;
