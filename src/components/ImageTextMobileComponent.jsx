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
        <h3> Plan Polo Salud</h3>
        <p style={{ fontSize: "14px" }}>
          Evaluamos los caballos mediante cámara termo gráfica y métodos de
          palpación precisos, los cuales nos permiten establecer un plan de
          tratamiento osteopático de recuperación y mantenimiento. Esto se
          integra perfectamente en el manejo diario de los caballos. Asimismo
          ofrecemos servicios de osteopatía para los jugadores, aliviando
          tensiones musculares y recuperando la movilidad funcional de las
          estructuras músculo esqueléticas solicitadas durante la temporada.
        </p>
        <h3> Plan Mantenimiento Polo Salud</h3>
        <p style={{ fontSize: "14px" }}>
          Establecemos un plan de seguimiento y mantenimiento de los equinos,
          analizando la biomecánica funcional y estructuras músculo esquelética
          de los caballos mediante palpación manual precisa y análisis de las
          imágenes térmicas profesionales. Esto se integra perfectamente en el
          manejo diario de los caballos. Asimismo, brindamos soporte osteopático
          a los jugadores, aliviando tensiones musculares y recuperando la
          movilidad funcional de las estructuras músculo esqueléticas
          solicitadas durante la temporada.
        </p>
      </div>
    </div>
  );
};

export default ImageTextMobileComponent;
