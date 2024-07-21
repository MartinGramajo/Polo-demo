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

  const [translationsCards, setTranslationsCards] = useState({});

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
        setTranslationsCards(translationsData);
      } catch (error) {
        console.error("Error fetching translations:", error);
      }
    };

    fetchTranslations();
  }, []);

  return (
    <LanguageContextService.Provider
      value={{ language, setLanguage, translations, translationsCards }}
    >
      {children}
    </LanguageContextService.Provider>
  );
};

export default LanguageServiceProvider;
// import React, { createContext, useState, useEffect, useContext } from "react";
// import axios from "axios";
// import Papa from "papaparse";

// // Crear el contexto de idioma para Servicios
// export const LanguageContextService = createContext();

// // Proveedor del contexto de idioma para Servicios
// const LanguageServiceProvider = ({ children }) => {
//   // Leer el idioma desde localStorage o usar 'es' por defecto
//   const [language, setLanguage] = useState(
//     localStorage.getItem("language") || "es"
//   );
//   const [translations, setTranslations] = useState({});
//   const [translationsCards, setTranslationsCards] = useState({});

//   // Efecto para cargar las traducciones de servicios
//   useEffect(() => {
//     const fetchTranslations = async () => {
//       try {
//         const response = await axios.get(
//           "https://docs.google.com/spreadsheets/d/e/2PACX-1vQaHibhN2EoD0Yz3Kh4h9MjHKic_KwacspvB5pBgHVpn9InUm6ERhstFxoiUx8i8LWl-n3ZIW5Vszc-/pub?gid=0&single=true&output=csv"
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
//   }, [language]); // Dependencia en el idioma

//   // Efecto para cargar las traducciones de tarjetas
//   useEffect(() => {
//     const fetchTranslationsCards = async () => {
//       try {
//         const response = await axios.get(
//           "https://docs.google.com/spreadsheets/d/e/2PACX-1vT5uzbHvnfL7by920NLATs8ysafau5kwg1HYc6hhEBXIUhfw39Tiumak0J7bCt6rl01v2RUfsAQw7TO/pub?output=csv"
//         );
//         const parsedData = Papa.parse(response.data, { header: true }).data;
//         const translationsData = {};
//         parsedData.forEach((row) => {
//           translationsData[row.id] = row;
//         });
//         setTranslationsCards(translationsData);
//       } catch (error) {
//         console.error("Error fetching translations:", error);
//       }
//     };

//     fetchTranslationsCards();
//   }, [language]); // Dependencia en el idioma

//   // Efecto para guardar el idioma en localStorage
//   useEffect(() => {
//     localStorage.setItem("language", language);
//   }, [language]);

//   return (
//     <LanguageContextService.Provider
//       value={{ language, setLanguage, translations, translationsCards }}
//     >
//       {children}
//     </LanguageContextService.Provider>
//   );
// };

// // Hook para usar el contexto en componentes
// export const useLanguageService = () => useContext(LanguageContextService);

// export default LanguageServiceProvider;
