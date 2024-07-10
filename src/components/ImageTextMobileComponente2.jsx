import React from "react";
import backgroundImage from "../assets/img/mapaMundi.png";

const ImageTextMobileComponent2 = () => {
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
        <h3 className="montserrat-bold" style={{ fontSize: "18px" }}>
          CÓMO TRABAJAMOS
        </h3>
        <p className="montserrat-regular" style={{ fontSize: "14px" }}>
          Trabajamos en los principales spots de polo más reconocidos. ESPAÑA,
          INGLATERRA, FRANCIA Y ARGENTINA
        </p>
        <p className="montserrat-regular" style={{ fontSize: "14px" }}>
          Ofrecemos servicios y planes de tratamiento in situ que se integran
          perfectamente con las funciones diarias de cada organización.
        </p>
        <p className="montserrat-regular" style={{ fontSize: "14px" }}>
          Trabajamos con organizaciones de polo que comparten nuestra misma
          misión: cuidar a sus caballos y optimizar el desempeño de cada uno en
          armonía
        </p>
      </div>
    </div>
  );
};

export default ImageTextMobileComponent2;
