import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Accordion } from "react-bootstrap";

const PregFrecuentes = () => {
  const { language, translations } = useContext(LanguageContext);

  const getTranslation = (item, field) => {
    console.log("getTranslation ~ item:", item);
    return item[`${field}${language.toUpperCase()}`];
  };

  return (
    <Accordion>
      {Object.values(translations).map((item, index) => (
        <Accordion.Item eventKey={index} key={item.id}>
          <Accordion.Header>
            {getTranslation(item, "pregunta")}
          </Accordion.Header>
          <Accordion.Body>{getTranslation(item, "respuesta")}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default PregFrecuentes;
