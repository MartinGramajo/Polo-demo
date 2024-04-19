import React from "react";
import { Image } from "react-bootstrap";
import bannerInicio from "../assets/img/CABALLO1.png";

const ContenidoInicialHome = () => {
  return (
    <section className=" container">
      <div className="text-center my-4">
        <h1 style={{ fontSize: "26px", fontWeight: "bold" }} className="py-5">
          BIENVENIDOS A POLO SALUD
        </h1>
        <article className="d-none d-md-block">
          <Image
            className="py-4"
            src={bannerInicio}
            fluid
            alt="inicio banner"
          />
        </article>
        <article className="d-md-none d-block">
          <Image
            className="pb-4 "
            src={bannerInicio}
            fluid
            alt="inicio banner"
          />
        </article>
        <h4 style={{ fontSize: "18px" }}>
          NUESTRA MISIÓN: LOGRAR QUE EL CABALLO DE POLO MANTENGA SU RENDIMIENTO
          DEPORTIVO Y SU CALIDAD DE VIDA
        </h4>
      </div>
    </section>
  );
};

export default ContenidoInicialHome;
