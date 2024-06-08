import { Card } from "react-bootstrap";
import BannerServicios from "../components/BannerServicios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Servicios = () => {
  const handleContactClick = () => {
    window.location.href = "#/contacto"; // Redirecciona a la página de contacto
  };

  return (
    <div>
      <BannerServicios />
      <article className="py-4 " style={{ textAlign: "start" }}>
        <div className=" pt-4 container">
          <h1
            className=" animate__animated  animate__fadeInLeft montserrat-bold"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          >
            PLANES Y SERVICIOS
          </h1>
        </div>
        <article className="container pb-4">
          <h6 className=" montserrat-regular " style={{ fontSize: "20px" }}>
            Experimente los beneficios de trabajar con Polo Salud mediante sus
            servicios diseñados para optimizar el rendimiento de los caballos de
            polo y prevenir lesiones
          </h6>
        </article>
        <div className="container animate__animated animate__fadeInUp">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <Card className="border border-danger rounded-3 cartas-planes">
                <Card.Body>
                  <Card.Title className="montserrat-bold">
                    Plan Polo Salud
                  </Card.Title>
                  <ul className="list-unstyled">
                    <li className="pt-2 montserrat-regular">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="me-2"
                        style={{ color: "#8E9092" }}
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
                        className="me-2"
                        style={{ color: "#8E9092" }}
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
              <Card className="border border-danger rounded-3 cartas-planes">
                <Card.Body>
                  <Card.Title className="montserrat-bold">
                    Plan Mantenimiento Polo Salud
                  </Card.Title>
                  <ul className="list-unstyled">
                    <li className="pt-2 montserrat-regular">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="me-2"
                        style={{ color: "#8E9092" }}
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
                        className="me-2"
                        style={{ color: "#8E9092" }}
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
          <section className="row">
            <div className="col-lg-6 mb-4">
              <Card className="border border-danger rounded-3 cartas-planes2">
                <Card.Body>
                  <Card.Title className="montserrat-bold">
                    Terapia manual
                  </Card.Title>
                  <ul className="list-unstyled">
                    <li className="pt-2 montserrat-regular">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="me-2"
                        style={{ color: "#8E9092" }}
                      />
                      <strong className="montserrat-bold">
                        Trabaja los tejidos blandos con técnicas manuales de
                        masaje
                      </strong>{" "}
                    </li>
                    <li className="py-4 montserrat-regular">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="me-2"
                        style={{ color: "#8E9092" }}
                      />
                      <strong className="montserrat-bold">
                        Favorece la circulación y restablece la fatiga muscular
                      </strong>{" "}
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 mb-4">
              <Card className="border border-danger rounded-3 cartas-planes2">
                <Card.Body>
                  <Card.Title className="montserrat-bold">
                    Osteopatía
                  </Card.Title>
                  <ul className="list-unstyled">
                    <li className="pt-2 montserrat-regular">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="me-2"
                        style={{ color: "#8E9092" }}
                      />
                      <strong className="montserrat-bold">
                        Trabaja las reestricciones de movilidad articular y/o
                        miofascial
                      </strong>{" "}
                    </li>
                    <li className="py-4 montserrat-regular">
                      <FontAwesomeIcon
                        className="me-2"
                        icon={faCheck}
                        style={{ color: "#8E9092" }}
                      />
                      <strong className="montserrat-bold">
                        Reestablece la fisiología y funcionalidad corporal
                        disminuyendo la nocicepción
                      </strong>{" "}
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </section>
          <section className="row">
            <div className="col-lg-6 mb-4">
              <Card className="border border-danger rounded-3 cartas-planes2">
                <Card.Body>
                  <Card.Title className="montserrat-bold">
                    Kinesio tapping
                  </Card.Title>
                  <ul className="list-unstyled">
                    <li className="pt-2 montserrat-regular">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="me-2"
                        style={{ color: "#8E9092" }}
                      />
                      <strong className="montserrat-bold">
                        Trabaja la función muscular
                      </strong>{" "}
                    </li>
                    <li className="py-4 montserrat-regular">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="me-2"
                        style={{ color: "#8E9092" }}
                      />
                      <strong className="montserrat-bold">
                        Activa el sistema analgésico endógeno y previene
                        lesiones en articulaciones estresadas
                      </strong>{" "}
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6 mb-4">
              <Card className="border border-danger rounded-3 cartas-planes2">
                <Card.Body>
                  <Card.Title className="montserrat-bold">
                    Monitoreo con cámara termográfica
                  </Card.Title>
                  <ul className="list-unstyled">
                    <li className="pt-2 montserrat-regular">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="me-2"
                        style={{ color: "#8E9092" }}
                      />
                      <strong className="montserrat-bold">
                        Las imágenes térmicas muestran con diferentes colores
                        sitios de inflamacion
                      </strong>{" "}
                    </li>
                    <li className="py-4 montserrat-regular">
                      <FontAwesomeIcon
                        className="me-2"
                        icon={faCheck}
                        style={{ color: "#8E9092" }}
                      />
                      <strong className="montserrat-bold">
                        Las usamos para diagnosticar precozmente lesiones, sobre
                        todo en tendones, ligamentos y dorso y evaluar su
                        evolución
                      </strong>{" "}
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </section>
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
