import React, { useContext } from "react";
import backgroundImage from "../assets/img/slider10.png";
import { LanguageContextComoTrabajamos } from "../context/LanguageContextComoTrabajamos";

const ImageTextMobileComponent2 = () => {
  const { language, translations } = useContext(LanguageContextComoTrabajamos);

  const getTranslation = (key) => {
    const translationKey = `${key}${language.toUpperCase()}`;
    const translation = translations[1] ? translations[1][translationKey] : "";
    return translation;
  };

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
      <div
        className="container padding-lr-responsive"
        style={{ width: "100%" }}
      >
        <h3
          className="montserrat-bold  py-5-mobile"
          style={{ fontSize: "18px" }}
        >
          {getTranslation("tituloPagina")}
        </h3>
        <div className="py-5-mobile">
          <p className="montserrat-regular h6">{getTranslation("parrafo1")}</p>
          <p className="montserrat-regular h6">{getTranslation("parrafo2")}</p>
          <p className="montserrat-regular h6">{getTranslation("parrafo3")}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageTextMobileComponent2;
