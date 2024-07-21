// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import Papa from "papaparse";

// export const LanguageContext = createContext();

// const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState("es"); // idioma por defecto, 'es' para español
//   const [translations, setTranslations] = useState({});

//   useEffect(() => {
//     const fetchTranslations = async () => {
//       try {
//         const response = await axios.get(
//           "https://docs.google.com/spreadsheets/d/e/2PACX-1vTTmSJGxSNe2kImEIVgKhtxknXLKAp_VGisaA8Uw-4k0loYDNSjyCkIhfg-E_VwLT7XFxobD0H0rMWz/pub?output=csv"
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
//     <LanguageContext.Provider value={{ language, setLanguage, translations }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export default LanguageProvider;
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import Papa from "papaparse";

// Crear el contexto de idioma
export const LanguageContext = createContext();

// Proveedor del contexto de idioma
const LanguageProvider = ({ children }) => {
  // Leer el idioma desde localStorage o usar 'es' por defecto
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "es"
  );
  const [translations, setTranslations] = useState({});

  // Efecto para cargar las traducciones al montar el componente
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
  }, [language]); // Dependencia en el idioma para actualizar traducciones si cambia el idioma

  // Efecto para guardar el idioma en localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar el contexto en componentes
export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;
