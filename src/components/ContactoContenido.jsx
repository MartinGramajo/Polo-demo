import "animate.css";
import ContactoForm from "./ContactoForm";

const ContactoContenido = () => {
  return (
    <section className="container">
      <div className="d-flex justify-content-center py-4">
        <h1
          className="animate__animated  animate__fadeInLeft"
          style={{ fontSize: "24px", fontWeight: "bold" }}
        >
          CONECTA CON LOS EXPERTOS EN BIENESTAR EQUINO
        </h1>
      </div>
      <div className="d-flex justify-content-center">
        <hr style={{ width: "200px", color: "#ff282d" }} />
      </div>
      <div className="row my-4 text-center">
        <div className=" col-12 animate__animated  animate__fadeInRight">
          <ContactoForm />
        </div>
      </div>
    </section>
  );
};

export default ContactoContenido;
