import React from "react";

import backgroundImage from "../assets/img/slider10.png";
import { Link } from "react-router-dom";

const ImageTextMobileComponent = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      {/* Imagen arriba */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={backgroundImage}
          alt="Imagen"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>

      {/* Texto abajo */}
      <div className="container" style={{ width: "100%" }}>
        <h3>SERVICIOS DE VANGUARDIA</h3>
        <p>
          Explora nuestra oferta exclusiva de servicios, donde la ciencia y la
          tradición se unen para asegurar el máximo bienestar y rendimiento de
          los caballos de polo. Nuestra empresa se enorgullece de liderar con un
          enfoque innovador en el cuidado equino, empleando técnicas manuales
          avanzadas y un profundo conocimiento científico en anatomía,
          biomecánica y fisiología. Desde evaluaciones integrales del bienestar
          físico hasta programas personalizados de mantenimiento y recuperación,
          cada servicio está diseñado para responder a las necesidades
          específicas de estos atletas equinos de élite. Descubre cómo nuestros
          servicios especializados pueden transformar la salud y el rendimiento
          de tu caballo, manteniéndolo en la cima de su juego. Bienvenido a la
          excelencia en el cuidado del caballo de polo.
        </p>
      </div>
    </div>
  );
};

export default ImageTextMobileComponent;
