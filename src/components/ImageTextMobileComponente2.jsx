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
          Ofrecemos servicios in situ que se integran perfectamente con las
          funciones diarias de cada organización.
        </p>
        <p className="montserrat-regular" style={{ fontSize: "14px" }}>
          Establecemos un plan de tratamiento y mantenimiento realista según las
          necesidades específicas de cada organización.
        </p>
        <p className="montserrat-regular" style={{ fontSize: "14px" }}>
          Trabajamos con organizaciones de polo que comparten nuestra misma
          misión: cuidar a sus caballos y optimizar el desempeño de cada uno en
          armonía.
        </p>
        <p className="montserrat-regular" style={{ fontSize: "14px" }}>
          Nuestro espíritu es innovador, colaborativo y eficaz.
        </p>
        <p className="montserrat-regular" style={{ fontSize: "14px" }}>
          Nuestras técnicas son no invasivas y sin doping.
        </p>
        <p className="montserrat-regular" style={{ fontSize: "14px" }}>
          Nuestro Alcance es internaciona
        </p>
        <p
          className="montserrat-regular"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          Trabajamos en los principales spots de polo más reconocidos. <br />{" "}
          ESPAÑA, UK, FRANCIA Y ARGENTINA
        </p>
      </div>
    </div>
  );
};

export default ImageTextMobileComponent2;
