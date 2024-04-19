import React from "react";
import ModalesA from "../components/ModalesA";
import ModalesB from "../components/ModalesB";
import bannerInicio from "../assets/img/CABALLO2.png";
import { Image } from "react-bootstrap";
import ModalesC from "../components/ModalesC";

const Galeria = () => {
  return (
    <div>
      <section className="my-5">
        <div className="d-none d-md-block text-center">
          <Image
            className="py-4"
            src={bannerInicio}
            fluid
            alt="inicio banner"
          />
        </div>
        <div className="d-md-none d-block text-center">
          <div>
            <Image
              className="py-4"
              src={bannerInicio}
              fluid
              alt="inicio banner"
            />
          </div>
        </div>

        <article className="container text-center">
          <h1
            className="text-center text-dark py-5"
            style={{ fontSize: "26px", fontWeight: "bold" }}
          >
            CONTACTA CON LOS MEJORES ESPECIALISTAS
          </h1>
        </article>
        <ModalesB />
        <ModalesC />
        <ModalesA />
      </section>
    </div>
  );
};

export default Galeria;
