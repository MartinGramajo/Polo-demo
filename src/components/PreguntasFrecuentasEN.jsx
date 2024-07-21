import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import axios from "axios";
import Papa from "papaparse";

const PregFrecuentesEN = () => {
  const [language, setLanguage] = useState("en"); // idioma por defecto, 'es' para español
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vTTmSJGxSNe2kImEIVgKhtxknXLKAp_VGisaA8Uw-4k0loYDNSjyCkIhfg-E_VwLT7XFxobD0H0rMWz/pub?output=csv"
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
  }, []);

  const getTranslation = (item, field) => {
    return item[`${field}${language.toUpperCase()}`];
  };

  return (
    <Accordion>
      {Object.values(translations).map((item, index) => (
        <Accordion.Item eventKey={index} key={item.id}>
          <Accordion.Header>
            {getTranslation(item, "pregunta")}
          </Accordion.Header>
          <Accordion.Body>{getTranslation(item, "respuesta")}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default PregFrecuentesEN;
