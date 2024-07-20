import React, { createContext, useState, useContext } from "react";

const LanguageSupContext = createContext();

export const LanguageSupProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  return (
    <LanguageSupContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageSupContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageSupContext);
