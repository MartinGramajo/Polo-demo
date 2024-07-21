import React, { useState, useEffect, useContext } from "react";
import "animate.css";
import BannerHome2Texto from "../components/BannerHome2Texto";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "@emailjs/browser";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { useRef } from "react";
import ContactoForm from "../components/ContactoForm";
import PregFrecuentes from "../components/PregFrecuentes";
import CalendlyWidget from "../components/CalendlyWidget";
import { LanguageContext } from "../context/LanguageContext";
import NavReact from "../components/common/NavReact";
import Footer from "../components/common/Footer";

const Home2 = () => {
  const { language, translations, setLanguage } = useContext(LanguageContext);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasPopupBeenShown = localStorage.getItem("popupShown");
    if (!hasPopupBeenShown) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const triggerPoint = 200; // Cambia este valor según cuándo quieras que aparezca el popup
        if (scrollY > triggerPoint) {
          setShowPopup(true);
          localStorage.setItem("popupShown", "true");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    window.location.reload();
  };

  const [validated, setValidated] = useState(false);
  const form = useRef();

  /*funcion para mandar msj al gmail*/
  const sendEmail = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === true) {
      e.stopPropagation();
      emailjs
        .sendForm(
          "service_t1121d9",
          "template_dz3ugtk",
          e.target,
          "wnYR1p8-ORmvwBjic"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
      form.reset();
      setValidated(false); //
      window.location.reload();
    } else {
      setValidated(true);
      window.location.reload();
    }
  };

  const getTranslation = (key) => {
    const translationKey = `${key}Home${language.toUpperCase()}`;
    const translation = translations[1] ? translations[1][translationKey] : "";
    return translation;
  };

  return (
    <div className="d-flex flex-column min-vh-100 ">
      <NavReact />
      <BannerHome2Texto />
      <article className="pt-4 container d-none d-lg-block py-5">
        <h6 className="montserrat-regular" style={{ fontSize: "20px" }}>
          {getTranslation("titulo")}
          <br />
          {getTranslation("parrafo1")}
          <br />
          {getTranslation("parrafo2")}
        </h6>
      </article>
      <article className="py-2 container d-lg-none d-block py-5-mobile">
        <h6 className="montserrat-regular" style={{ fontSize: "16px" }}>
          {getTranslation("titulo")}
          <br />
          {getTranslation("parrafo1")}
          <br />
          {getTranslation("parrafo2")}
        </h6>
      </article>

      <CalendlyWidget />
      <article className="container pt-4">
        <h6
          className="montserrat-regular"
          style={{ fontSize: "22px", fontWeight: "bold" }}
        >
          FAQ
        </h6>
        <div className="pb-5 pt-2">
          <PregFrecuentes />
        </div>
      </article>

      <Modal show={showPopup} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold" }}>
            ¡Suscribite hoy!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            ¡Suscribite hoy y obtené un 10% de descuento en la contratación de
            tu primer plan de Polo Salud!
          </p>
          <ul>
            <li>Válido para el plan Polo Salud</li>
            <li>No acumulable con otros descuentos</li>
          </ul>
          <p>¡Inscribite ahora y aprovechá este beneficio exclusivo!</p>
          <ContactoForm />
        </Modal.Body>
      </Modal>
      <Footer />
    </div>
  );
};

export default Home2;
