import React from "react";
import backgroundImage from "../assets/img/slider2.png"; // Ruta de tu imagen de fondo
import logoNuevo from "../assets/img/logoblanco.png";
import { Link } from "react-router-dom";
import "animate.css";

const BioComponentMobile = () => {
  return (
    <div
      className="animate__animated  animate__backInUp"
      style={{
        position: "relative",
        height: "700px",
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
          width: "100%", // Ancho del área de la imagen de fondo
          height: "80%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`, // Degradado negro sobre la imagen de fondo
          backgroundSize: "cover",
          backgroundPosition: "bottom", // Ajusta la posición de la imagen a la izquierda
        }}
      />

      {/* Biografía */}
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "10%",
          transform: "translateY(-50%)",
          color: "white",
          zIndex: "1", // Asegura que la biografía esté sobre la imagen de fondo
          maxWidth: "80%", // Ancho máximo de la biografía
        }}
      >
        <p>
          De criarse entre caballos en la provincia de Buenos Aires, a elegir
          una vida más citadina estudiando abogacía en la UBA y trabajar en el
          poder judicial al mismo tiempo que comenzaba una carrera de bailarina
          de danza contemporánea que la hizo mudarse a Europa a los 22 años, es
          que Maria Luján llegó a la Osteopatía y decidió formarse en ello.
        </p>
        <div className="mt-4">
          <Link to="/quien/soy">
            <button className="ver-mas-btn text-white">Ver biografía</button>
          </Link>
        </div>
      </div>

      {/* Contenedor del contenido negro */}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%", // Ancho del contenido negro
          height: "20%",
          backgroundColor: "black",
          opacity: "0.9", // Opacidad del contenido negro
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Marca */}
        <div>
          <img
            style={{ width: "100px" }}
            className="img-fluid"
            src={logoNuevo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BioComponentMobile;
