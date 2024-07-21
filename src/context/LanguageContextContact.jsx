import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";

export const LanguageContextContact = createContext();

const LanguageContactProvider = ({ children }) => {
  const [language, setLanguage] = useState("es"); // idioma por defecto, 'es' para español
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_ZcSsAXNNVg10BaEZ9WfreNzaFGIXNVC0Zaz7dxcgM0IoirzTIein6LC2wx6t0FC7c9WDg3_u_Lwu/pub?output=csv"
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

  return (
    <LanguageContextContact.Provider
      value={{ language, setLanguage, translations }}
    >
      {children}
    </LanguageContextContact.Provider>
  );
};

export default LanguageContactProvider;
