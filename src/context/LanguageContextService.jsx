import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";

export const LanguageContextService = createContext();

const LanguageServiceProvider = ({ children }) => {
  const [language, setLanguage] = useState("es"); // idioma por defecto, 'es' para español
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQaHibhN2EoD0Yz3Kh4h9MjHKic_KwacspvB5pBgHVpn9InUm6ERhstFxoiUx8i8LWl-n3ZIW5Vszc-/pub?gid=0&single=true&output=csv"
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
    <LanguageContextService.Provider
      value={{ language, setLanguage, translations }}
    >
      {children}
    </LanguageContextService.Provider>
  );
};

export default LanguageServiceProvider;
