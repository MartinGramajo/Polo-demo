// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import Papa from "papaparse";

// export const LanguageContextBiografia = createContext();

// const LanguageBiografiaProvider = ({ children }) => {
//   const [language, setLanguage] = useState("es"); // idioma por defecto, 'es' para español
//   const [translations, setTranslations] = useState({});

//   useEffect(() => {
//     const fetchTranslations = async () => {
//       try {
//         const response = await axios.get(
//           "https://docs.google.com/spreadsheets/d/e/2PACX-1vRWPr0BiioyGpFXf-4STqeB--yC-Ts0A2IRNIsfF6r3YFKb3CGV7pwOPzDF679I9JcU5dcoBQ-CN1Iq/pub?output=csv"
//         );
//         const parsedData = Papa.parse(response.data, { header: true }).data;
//         const translationsData = {};
//         parsedData.forEach((row) => {
//           translationsData[row.id] = row;
//         });
//         setTranslations(translationsData);
//       } catch (error) {
//         console.error("Error fetching translations:", error);
//       }
//     };

//     fetchTranslations();
//   }, []);

//   const [translationsHistoria, setTranslationsHistoria] = useState({});

//   useEffect(() => {
//     const fetchTranslations = async () => {
//       try {
//         const response = await axios.get(
//           "https://docs.google.com/spreadsheets/d/e/2PACX-1vRa08op_8H-qvzSDfvbgJYXIPm97E7fIilzVw8XSLnNiLTZi_d2V0FTHpKkpcOCfEdmXVbTZT9HjH30/pub?output=csv"
//         );
//         const parsedData = Papa.parse(response.data, { header: true }).data;
//         const translationsData = {};
//         parsedData.forEach((row) => {
//           translationsData[row.id] = row;
//         });
//         setTranslationsHistoria(translationsData);
//       } catch (error) {
//         console.error("Error fetching translations:", error);
//       }
//     };

//     fetchTranslations();
//   }, []);

//   return (
//     <LanguageContextBiografia.Provider
//       value={{ language, setLanguage, translations, translationsHistoria }}
//     >
//       {children}
//     </LanguageContextBiografia.Provider>
//   );
// };

// export default LanguageBiografiaProvider;

import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import Papa from "papaparse";

// Crear el contexto de idioma para Biografía
export const LanguageContextBiografia = createContext();

// Proveedor del contexto de idioma para Biografía
const LanguageBiografiaProvider = ({ children }) => {
  // Leer el idioma desde localStorage o usar 'es' por defecto
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "es"
  );
  const [translations, setTranslations] = useState({});
  const [translationsHistoria, setTranslationsHistoria] = useState({});

  // Efecto para cargar las traducciones de Biografía
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vRWPr0BiioyGpFXf-4STqeB--yC-Ts0A2IRNIsfF6r3YFKb3CGV7pwOPzDF679I9JcU5dcoBQ-CN1Iq/pub?output=csv"
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

  // Efecto para cargar las traducciones de Historia
  useEffect(() => {
    const fetchTranslationsHistoria = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vRa08op_8H-qvzSDfvbgJYXIPm97E7fIilzVw8XSLnNiLTZi_d2V0FTHpKkpcOCfEdmXVbTZT9HjH30/pub?output=csv"
        );
        const parsedData = Papa.parse(response.data, { header: true }).data;
        const translationsData = {};
        parsedData.forEach((row) => {
          translationsData[row.id] = row;
        });
        setTranslationsHistoria(translationsData);
      } catch (error) {
        console.error("Error fetching translations:", error);
      }
    };

    fetchTranslationsHistoria();
  }, [language]); // Dependencia en el idioma

  // Efecto para guardar el idioma en localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContextBiografia.Provider
      value={{ language, setLanguage, translations, translationsHistoria }}
    >
      {children}
    </LanguageContextBiografia.Provider>
  );
};

// Hook para usar el contexto en componentes
export const useLanguageBiografia = () => useContext(LanguageContextBiografia);

export default LanguageBiografiaProvider;
