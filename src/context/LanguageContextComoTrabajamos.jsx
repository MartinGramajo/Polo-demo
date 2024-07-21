// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import Papa from "papaparse";

// export const LanguageContextComoTrabajamos = createContext();

// const LanguageComoTrabajamosProvider = ({ children }) => {
//   const [language, setLanguage] = useState("es"); // idioma por defecto, 'es' para español
//   const [translations, setTranslations] = useState({});

//   useEffect(() => {
//     const fetchTranslations = async () => {
//       try {
//         const response = await axios.get(
//           "https://docs.google.com/spreadsheets/d/e/2PACX-1vQWBofmPkYqHsDhDlEFHB2INpfVF3JalzE06bfd9T0Gb40Bb7Tf-L5hqQYR9IW95lDvE7-gDU8Nzdte/pub?output=csv"
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

//   const [translationsCards, setTranslationsCards] = useState({});

//   useEffect(() => {
//     const fetchTranslations = async () => {
//       try {
//         const response = await axios.get(
//           "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHHKeStvm2T8Aau3gC2X81Cfc-frpHXxRGtwOAvK_5IyItt2P-X6apNR4LAomYszG-1X4Dnowk1LAg/pub?output=csv"
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

//     fetchTranslations();
//   }, []);

//   return (
//     <LanguageContextComoTrabajamos.Provider
//       value={{ language, setLanguage, translations, translationsCards }}
//     >
//       {children}
//     </LanguageContextComoTrabajamos.Provider>
//   );
// };

// export default LanguageComoTrabajamosProvider;
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import Papa from "papaparse";

// Crear el contexto de idioma para "Cómo Trabajamos"
export const LanguageContextComoTrabajamos = createContext();

// Proveedor del contexto de idioma para "Cómo Trabajamos"
const LanguageComoTrabajamosProvider = ({ children }) => {
  // Leer el idioma desde localStorage o usar 'es' por defecto
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "es"
  );
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

  // Efecto para cargar las traducciones de tarjetas
  useEffect(() => {
    const fetchTranslationsCards = async () => {
      try {
        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHHKeStvm2T8Aau3gC2X81Cfc-frpHXxRGtwOAvK_5IyItt2P-X6apNR4LAomYszG-1X4Dnowk1LAg/pub?output=csv"
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

    fetchTranslationsCards();
  }, [language]); // Dependencia en el idioma

  // Efecto para guardar el idioma en localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContextComoTrabajamos.Provider
      value={{ language, setLanguage, translations, translationsCards }}
    >
      {children}
    </LanguageContextComoTrabajamos.Provider>
  );
};

// Hook para usar el contexto en componentes
export const useLanguageComoTrabajamos = () =>
  useContext(LanguageContextComoTrabajamos);

export default LanguageComoTrabajamosProvider;
