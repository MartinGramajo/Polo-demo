import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es"); // idioma por defecto, 'es' para español
  const [translations, setTranslations] = useState({});
  console.log("LanguageProvider ~ translations:", translations);

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

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
