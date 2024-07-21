import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/img/mapaMundi.png";
import axios from "axios";
import Papa from "papaparse";

const ImageTextComponent2EN = () => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState({});
  const [translationsCards, setTranslationsCards] = useState({});

  // Efecto para cargar las traducciones principales
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWBofmPkYqHsDhDlEFHB2INpfVF3JalzE06bfd9T0Gb40Bb7Tf-L5hqQYR9IW95lDvE7-gDU8Nzdte/pub?output=csv"
        );
        const parsedData = Papa.parse(response.data, { header: true }).data;
        const translationsData = {};
        parsedData.forEach((row) => {
          translationsData[row.id] = row;
        });
        setTranslations(translationsData);
      } catch (error) {
        console.error("Error fetching translations:", error);
      }
    };

    fetchTranslations();
  }, [language]); // Dependencia en el idioma

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

export default ImageTextComponent2EN;
