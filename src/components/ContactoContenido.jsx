import "animate.css";
import ContactoForm from "./ContactoForm";
import { useContext } from "react";
import { LanguageContextContact } from "../context/LanguageContextContact";

const ContactoContenido = () => {
  const { language, translations, setLanguage } = useContext(
    LanguageContextContact
  );

  console.log("Servicios ~ translations:", translations);

  const getTranslation = (key) => {
    const translationKey = `${key}${language.toUpperCase()}`;
    const translation = translations[1] ? translations[1][translationKey] : "";
    return translation;
  };

  return (
    <section className="container">
      <div className="py-4 d-none d-lg-block">
        <div className="d-flex justify-content-start ">
          <h1
            className="animate__animated  animate__fadeInLeft montserrat-bold"
            style={{ fontSize: "22px", fontWeight: "bold" }}
          >
            {getTranslation("tituloContacto")}
          </h1>
        </div>
      </div>
      <div className="d-flex justify-content-start py-4 d-lg-none d-block py-5-mobile">
        <h1
          className="animate__animated  animate__fadeInLeft montserrat-bold"
          style={{ fontSize: "18px", fontWeight: "bold" }}
        >
          {getTranslation("tituloContacto")}
        </h1>
      </div>
      <div className="d-flex justify-content-start">
        <hr style={{ width: "200px", color: "#ff282d" }} />
      </div>
      <div className="row my-4 text-center">
        <div className=" col-12 animate__animated  animate__fadeInUp">
          <ContactoForm />
        </div>
      </div>
    </section>
  );
};

export default ContactoContenido;
