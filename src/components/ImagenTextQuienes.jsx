import React from "react";
import Counter from "./Counter";
import bannerServiciosCuadrado from "../assets/img/slider12.png";
import { Image } from "react-bootstrap";
import MiHistoria from "./MiHistoria";

const ImagenTextQuienes = () => {
  return (
    <div className="container">
      <section className="row">
        <div className="col-lg-6 col-12">
          <Image
            src={bannerServiciosCuadrado}
            className="bannerImage"
            alt="inicio banner"
          />
        </div>
        <div className="col-lg-6 col-12">
          <h4
            style={{ fontSize: "24px" }}
            className="pt-4 py-5-mobile container montserrat-bold text-dark lato-regular py-2 animate__animated  animate__backInUp"
          >
            María Luján Arias es la Directora de la empresa Polo Salud.
          </h4>
          <h5 className="container py-4" style={{ fontSize: "18px" }}>
            Para llevar a cabo la misión de la empresa y dependiendo en que país
            esté trabajando, se asocia con profesionales cuidadosamente
            seleccionados.
          </h5>
          <div className="container">
            <h5 style={{ fontSize: "18px" }}>
              <span className="py-2">Luján es:</span>
              <ul className="pt-4">
                <li>
                  Diplomada en Osteopatía por la European alliance y Animal
                  Osteopathy International reconocida por la European School of
                  Osteopathy de Inglaterra.
                </li>
                <li>Miembro del registro de Osteopatas de España ROE N°783.</li>
                <li>
                  Auxiliar veterinario ATV especializada en fisoterapia y
                  rehabilitación equina.
                </li>
                <li>
                  Técnico especializado en el uso de cámaras termográficas en
                  caballos deportivos.
                </li>
                <li>
                  Docente de Osteopatía humana y equina en America Latina y
                  España.
                </li>
              </ul>
            </h5>
          </div>
        </div>
      </section>
      {/* <section className="row py-5">
          <div className="col-lg-6 animate__animated  animate__backInUp py-2">
            <article
              className="text-white py-4 text-center"
              style={{ backgroundColor: "#898B8D" }}
            >
              <p style={{ fontSize: "14px" }}>
                Atendió más de{" "}
                <span style={{ fontSize: "26px", fontWeight: "bold" }}>
                  <Counter endValue={1000} />
                </span>{" "}
                caballos.
              </p>
            </article>
          </div>
          <div className="col-lg-6 animate__animated  animate__backInUp py-2">
            <article
              className="text-white py-4 text-center"
              style={{ backgroundColor: "#898B8D" }}
            >
              <p style={{ fontSize: "14px" }}>
                Tiene más de{" "}
                <span style={{ fontSize: "26px", fontWeight: "bold" }}>
                  <Counter endValue={10000} />
                </span>{" "}
                horas de formación académica.
              </p>
            </article>
          </div>
        </section> */}
      <section>
        <MiHistoria />
      </section>
    </div>
  );
};

export default ImagenTextQuienes;
