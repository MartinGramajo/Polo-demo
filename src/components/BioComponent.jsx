import React from "react";
import backgroundImage from "../assets/img/slider2.png"; // Ruta de tu imagen de fondo
import logoNuevo from "../assets/img/logoblanco.png";
import { Link } from "react-router-dom";
import "animate.css";

const BioComponent = () => {
  return (
    <div
      className="animate__animated  animate__backInUp"
      style={{
        position: "relative",
        height: "800px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Contenedor de la imagen de fondo con degradado negro */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "70%", // Ancho del área de la imagen de fondo
          height: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`, // Degradado negro sobre la imagen de fondo
          backgroundSize: "cover",
          backgroundPosition: "bottom", // Ajusta la posición de la imagen a la izquierda
        }}
      />

      {/* Contenedor del contenido negro */}
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "30%", // Ancho del contenido negro
          height: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), linear-gradient(black, black)`, // Degradado negro sobre el color negro
          opacity: "0.9", // Opacidad del contenido negro
        }}
      >
        {/* Marca abajo */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            color: "white",
          }}
        >
          <img
            style={{ width: "250px" }}
            className="img-fluid"
            src={logoNuevo}
            alt=""
          />
        </div>
      </div>

      {/* Biografía */}
      <div
        style={{
          position: "absolute",
          top: "78%",
          left: "10%",
          transform: "translateY(-50%)",
          color: "white",
          zIndex: "1", // Asegura que la biografía esté sobre la imagen de fondo
          maxWidth: "40%", // Ancho máximo de la biografía
        }}
      >
        <p className="lato-regular " style={{ fontSize: "16px" }}>
          De criarse entre caballos en la provincia de Buenos Aires, a elegir
          una vida más citadina estudiando abogacía en la UBA y trabajar en el
          poder judicial al mismo tiempo que comenzaba una carrera de bailarina
          de danza contemporánea que la hizo mudarse a Europa a los 22 años, es
          que Maria Luján llegó a la Osteopatía y decidió formarse en ello.
        </p>
        <div className="mt-4 ">
          <Link to="/quien/soy">
            <button className="ver-mas-btn text-white">
              Conocé más de su historia
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BioComponent;
