import React, { useContext } from "react";
import backgroundImage from "../assets/img/mapaMundi.png";
import { LanguageContextComoTrabajamos } from "../context/LanguageContextComoTrabajamos";

const ImageTextComponent2 = () => {
  const { language, translations } = useContext(LanguageContextComoTrabajamos);

  const getTranslation = (key) => {
    const translationKey = `${key}${language.toUpperCase()}`;
    const translation = translations[1] ? translations[1][translationKey] : "";
    return translation;
  };
  return (
    <div className="d-flex align-items-center">
      <div className="container" style={{ width: "50%" }}>
        <h3 className="montserrat-bold" style={{ fontSize: "32px" }}>
          {getTranslation("tituloPagina")}
        </h3>
        <p className="montserrat-regular" style={{ fontSize: "18px" }}>
          {getTranslation("parrafo1")}
        </p>
        <p className="montserrat-regular" style={{ fontSize: "18px" }}>
          {getTranslation("parrafo2")}
        </p>
        <p className="montserrat-regular" style={{ fontSize: "18px" }}>
          {getTranslation("parrafo3")}
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
