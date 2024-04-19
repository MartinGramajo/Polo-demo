import React from "react";

// Define manualmente los índices de los modales que quieres importar
// en este caso, quieres cargar los modales 9, 10, 11, 1 y 2.
const modalIndices = [17, 18, 19, 20];

// Carga los componentes modales según los índices definidos.
// Ajusta la ruta de importación según tu estructura de archivos.
const modalComponents = modalIndices.map(
  (index) => require(`./modales/ModalFoto${index}`).default
);

const ModalesC = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row text-white text-center">
          {modalComponents.map((ModalComponent, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <ModalComponent />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModalesC;
