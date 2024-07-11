import "animate.css";
import ContactoForm from "./ContactoForm";

const ContactoContenido = () => {
  return (
    <section className="container">
      <div className="py-4 d-none d-lg-block">
        <div className="d-flex justify-content-start ">
          <h1
            className="animate__animated  animate__fadeInLeft montserrat-bold"
            style={{ fontSize: "22px", fontWeight: "bold" }}
          >
            Programe una consulta gratuita hoy para analizar cómo Polo Salud
            puede ayudar a su organización calendly o rellene el siguiente
            formulario de contacto
          </h1>
        </div>
      </div>
      <div className="d-flex justify-content-start py-4 d-lg-none d-block">
        <h1
          className="animate__animated  animate__fadeInLeft montserrat-bold"
          style={{ fontSize: "18px", fontWeight: "bold" }}
        >
          CONECTA CON LOS EXPERTOS EN BIENESTAR EQUINO
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
