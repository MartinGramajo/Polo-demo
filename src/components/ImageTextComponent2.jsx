import React from "react";
import backgroundImage from "../assets/img/mapaMundi.png";

const ImageTextComponent2 = () => {
  return (
    <div className="d-flex align-items-center">
      {/* Texto a la derecha */}
      <div className="container" style={{ width: "50%" }}>
        <h3 className="montserrat-bold" style={{ fontSize: "32px" }}>
          CÓMO TRABAJAMOS
        </h3>
        <p className="montserrat-regular" style={{ fontSize: "18px" }}>
          Trabajamos en los principales spots de polo más reconocidos. ESPAÑA,
          INGLATERRA, FRANCIA Y ARGENTINA
        </p>
        <p className="montserrat-regular" style={{ fontSize: "18px" }}>
          Ofrecemos servicios y planes de tratamiento in situ que se integran
          perfectamente con las funciones diarias de cada organización.
        </p>
        <p className="montserrat-regular" style={{ fontSize: "18px" }}>
          Trabajamos con organizaciones de polo que comparten nuestra misma
          misión: cuidar a sus caballos y optimizar el desempeño de cada uno en
          armonía
        </p>
      </div>
      {/* Imagen cuadrada a la izquierda */}
      <div style={{ width: "50%", marginRight: "20px" }}>
        <img
          src={backgroundImage}
          alt="Imagen"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default ImageTextComponent2;
