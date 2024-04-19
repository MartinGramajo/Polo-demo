import React from "react";

// Se asume que todos los modales tienen una interfaz similar para simplificar.
// Cambia "./modales/ModalFoto" según sea necesario para ajustarse a tu estructura real de carpetas y archivos.
const modalComponents = Array.from(
  { length: 8 },
  (_, index) => require(`./modales/ModalFoto${index + 1}`).default
);

const ModalesA = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row text-white text-center">
          {modalComponents.map((ModalComponent, index) => (
            <div
              key={index}
              className={`col-12 col-md-6 col-lg-3 ${index >= 4 ? "mt-5" : ""}`}
            >
              <ModalComponent />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalesA;
