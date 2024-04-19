import React from "react";
import backgroundImage from "../assets/img/slider10.png";

const ImageTextComponent = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        {/* Imagen cuadrada a la izquierda */}
        <div style={{ width: "50%", marginRight: "20px" }}>
          <img
            src={backgroundImage}
            alt="Imagen"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Texto a la derecha */}
        <div className="container" style={{ width: "50%" }}>
          <h3>SERVICIOS DE VANGUARDIA</h3>
          <p>
            Explora nuestra oferta exclusiva de servicios, donde la ciencia y la
            tradición se unen para asegurar el máximo bienestar y rendimiento de
            los caballos de polo. Nuestra empresa se enorgullece de liderar con
            un enfoque innovador en el cuidado equino, empleando técnicas
            manuales avanzadas y un profundo conocimiento científico en
            anatomía, biomecánica y fisiología. Desde evaluaciones integrales
            del bienestar físico hasta programas personalizados de mantenimiento
            y recuperación, cada servicio está diseñado para responder a las
            necesidades específicas de estos atletas equinos de élite. Descubre
            cómo nuestros servicios especializados pueden transformar la salud y
            el rendimiento de tu caballo, manteniéndolo en la cima de su juego.
            Bienvenido a la excelencia en el cuidado del caballo de polo.
          </p>
        </div>
      </div>
    </>
  );
};

export default ImageTextComponent;
