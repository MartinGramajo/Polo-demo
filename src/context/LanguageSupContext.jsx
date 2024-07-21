// import React, { createContext, useState, useContext } from "react";

// const LanguageSupContext = createContext();

// export const LanguageSupProvider = ({ children }) => {
//   const [language, setLanguage] = useState("es");

//   return (
//     <LanguageSupContext.Provider value={{ language, setLanguage }}>
//       {children}
//     </LanguageSupContext.Provider>
//   );
// };

// export const useLanguage = () => useContext(LanguageSupContext);
import React, { createContext, useState, useEffect, useContext } from "react";

// Crear el contexto de idioma
const LanguageSupContext = createContext();

// Proveedor del contexto de idioma
export const LanguageSupProvider = ({ children }) => {
  // Leer el idioma desde localStorage o usar 'es' por defecto
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "es"
  );

  // Efecto para guardar el idioma en localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageSupContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageSupContext.Provider>
  );
};

// Hook para usar el contexto en componentes
export const useLanguage = () => useContext(LanguageSupContext);
