import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";

export const LanguageContextServiceCards = createContext();

const LanguageServiceCardsProvider = ({ children }) => {
  const [language, setLanguage] = useState("es"); // idioma por defecto, 'es' para español
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vT5uzbHvnfL7by920NLATs8ysafau5kwg1HYc6hhEBXIUhfw39Tiumak0J7bCt6rl01v2RUfsAQw7TO/pub?output=csv"
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
    <LanguageContextServiceCards.Provider
      value={{ language, setLanguage, translations }}
    >
      {children}
    </LanguageContextServiceCards.Provider>
  );
};

export default LanguageServiceCardsProvider;
