import "animate.css";
import ImageTextComponent2 from "../components/ImageTextComponent2";
import ImageTextMobileComponent2 from "../components/ImageTextMobileComponente2";
import { LanguageContextComoTrabajamos } from "../context/LanguageContextComoTrabajamos";
import { useContext } from "react";
import NavReactES from "../components/common/NavReactES";
import Footer from "../components/common/Footer";
import CardComoTrabajamosDinamico from "../components/CardComoTrabajamosDinamico";

const ComoTrabajamos = () => {
  const handleContactClick = () => {
    window.location.href = "#/contacto";
  };

  const { language, translations } = useContext(LanguageContextComoTrabajamos);

  const getTranslation = (key) => {
    const translationKey = `${key}${language.toUpperCase()}`;
    const translation = translations[1] ? translations[1][translationKey] : "";
    return translation;
  };

  return (
    <section className="d-flex flex-column min-vh-100 ">
      <NavReactES />
      <div className="container">
        <div
          className="d-none d-lg-block animate__animated   animate__fadeIn"
          id="trabajamos"
        >
          <ImageTextComponent2 />
        </div>

        <div>
          <div
            id="trabajamos/mobile"
            className="d-lg-none d-block  animate__animated  animate__fadeIn"
          >
            <ImageTextMobileComponent2 />
          </div>
        </div>

        <div className="container animate__animated animate__fadeInUp py-4">
          <section className="row">
            {/* <CardComoTrabajamos /> */}
            <CardComoTrabajamosDinamico />
          </section>
          <div className="container animate__animated animate__fadeInUp py-4">
            <blockquote className="blockquote text-center py-5-mobile">
              <p className="mb-0">{getTranslation("footerTexto")}</p>
            </blockquote>
            <div className="text-center pb-4 mx-4">
              <button
                className="ver-mas-btn-sidebar text-white montserrat-regular"
                onClick={handleContactClick}
              >
                {getTranslation("botonContacto")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ComoTrabajamos;
