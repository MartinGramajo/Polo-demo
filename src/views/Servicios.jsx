import React, { useContext } from "react";
import { Card } from "react-bootstrap"; // Asumiendo que estás usando react-bootstrap
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// import imagenKinesio from "../assets/img/kinesio.jpg"; // Importa tus imágenes aquí
// import imagenTermografica from "../assets/img/termo.png";
// import imagenTerapiaManual from "../assets/img/terapiaManual.jpg";
// import imagenOsteopatia from "../assets/img/osteopatia.jpg";
// import imagenAnalisis from "../assets/img/analisis.jpg";
import BannerServicios from "../components/BannerServicios";
import { LanguageContextService } from "../context/LanguageContextService";
import CardServicios from "../components/CardServicios";

const Servicios = () => {
  const handleContactClick = () => {
    window.location.href = "#/contacto";
  };

  const handleTrabajamosClick = () => {
    window.location.href = "#/como-trabajamos";
  };

  // Datos de las cartas con imágenes
  // const cartasData = [
  //   {
  //     titulo: "Kinesio tapping",
  //     imgSrc: imagenKinesio,
  //     puntos: [
  //       "Trabaja la función muscular",
  //       "Activa el sistema analgésico endógeno y previene lesiones en articulaciones estresadas",
  //     ],
  //   },
  //   {
  //     titulo: "Monitoreo con cámara termográfica",
  //     imgSrc: imagenTermografica,
  //     puntos: [
  //       "Las imágenes térmicas muestran con diferentes colores sitios de inflamación",
  //       "Las usamos para diagnosticar precozmente lesiones, sobre todo en tendones, ligamentos y dorso y evaluar su evolución",
  //     ],
  //   },
  //   {
  //     titulo: "Terapia manual",
  //     imgSrc: imagenTerapiaManual,
  //     puntos: [
  //       "Trabaja los tejidos blandos con técnicas manuales de masaje",
  //       "Favorece la circulación y restablece la fatiga muscular",
  //     ],
  //   },
  //   {
  //     titulo: "Osteopatía",
  //     imgSrc: imagenOsteopatia,
  //     puntos: [
  //       "Trabaja las restricciones de movilidad articular y/o miofascial",
  //       "Reestablece la fisiología y funcionalidad corporal disminuyendo la nocicepción",
  //     ],
  //   },
  //   {
  //     titulo: "Anáisis biomecánico de los jugadores",
  //     imgSrc: imagenAnalisis,
  //     puntos: [
  //       " Evaluación funcional de la movilidad músculo esquelética del jugado",
  //       " Sedeterminará el impacto que tiene el cuerpo del jugador sobre la estructura anatómica del caballo",
  //     ],
  //   },
  // ];

  const { language, translations, setLanguage } = useContext(
    LanguageContextService
  );

  console.log("Servicios ~ translations:", translations);

  const getTranslation = (key) => {
    const translationKey = `${key}${language.toUpperCase()}`;
    const translation = translations[1] ? translations[1][translationKey] : "";
    return translation;
  };

  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
      <BannerServicios />
      <article className="py-4" style={{ textAlign: "start" }}>
        <div className="pt-4 container">
          <h1
            className="animate__animated animate__fadeInLeft montserrat-bold"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          >
            {getTranslation("titulo")}
          </h1>
        </div>
        <article className="container pb-4">
          <h6
            className="montserrat-regular py-5-mobile"
            style={{ fontSize: "20px" }}
          >
            {getTranslation("parrafo")}
          </h6>
        </article>
        <article>
          <CardServicios />
        </article>
        {/* <div className="container animate__animated animate__fadeInUp">
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
        </div> */}
        <article className="container pb-4 text-center">
          <h6
            className="montserrat-regular py-5-mobile"
            style={{ fontSize: "20px" }}
          >
            {getTranslation("textoFooter")}
          </h6>
        </article>
        <section className="d-flex justify-content-center flex-wrap">
          <div className="text-center pb-4 mx-4">
            <button
              className="ver-mas-btn-sidebar text-white montserrat-regular"
              onClick={handleTrabajamosClick}
            >
              {getTranslation("botonTrabajamos")}
            </button>
          </div>
          <div className="text-center pb-4 mx-4">
            <button
              className="ver-mas-btn-sidebar text-white montserrat-regular"
              onClick={handleContactClick}
            >
              {getTranslation("botonContacto")}
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Servicios;
