// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import Papa from "papaparse";

// export const LanguageContextContact = createContext();

// const LanguageContactProvider = ({ children }) => {
//   const [language, setLanguage] = useState("es"); // idioma por defecto, 'es' para español
//   const [translations, setTranslations] = useState({});

//   useEffect(() => {
//     const fetchTranslations = async () => {
//       try {
//         const response = await axios.get(
//           "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_ZcSsAXNNVg10BaEZ9WfreNzaFGIXNVC0Zaz7dxcgM0IoirzTIein6LC2wx6t0FC7c9WDg3_u_Lwu/pub?output=csv"
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

//   return (
//     <LanguageContextContact.Provider
//       value={{ language, setLanguage, translations }}
//     >
//       {children}
//     </LanguageContextContact.Provider>
//   );
// };

// export default LanguageContactProvider;

import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import Papa from "papaparse";

// Crear el contexto de idioma para Contacto
export const LanguageContextContact = createContext();

// Proveedor del contexto de idioma para Contacto
const LanguageContactProvider = ({ children }) => {
  // Leer el idioma desde localStorage o usar 'es' por defecto
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "es"
  );
  const [translations, setTranslations] = useState({});

  // Efecto para cargar las traducciones
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
  }, [language]); // Dependencia en el idioma

  // Efecto para guardar el idioma en localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContextContact.Provider
      value={{ language, setLanguage, translations }}
    >
      {children}
    </LanguageContextContact.Provider>
  );
};

// Hook para usar el contexto en componentes
export const useLanguageContact = () => useContext(LanguageContextContact);

export default LanguageContactProvider;
