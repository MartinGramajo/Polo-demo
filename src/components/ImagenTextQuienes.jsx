import React, { useContext } from "react";
import Counter from "./Counter";

import bannerServiciosCuadrado from "../assets/img/mapaMundi.png";
import { Image } from "react-bootstrap";
import MiHistoria from "./MiHistoria";
import { LanguageContextBiografia } from "../context/LanguageContextBiografia";

const ImagenTextQuienes = () => {
  const { language, translations } = useContext(LanguageContextBiografia);
  const getTranslation = (key) => {
    const translationKey = `${key}${language.toUpperCase()}`;
    const translation = translations[1] ? translations[1][translationKey] : "";
    return translation;
  };

  const transformTextToList = (text) => {
    return text.split("\n").map((item, index) => (
      <li key={index} style={{ listStyleType: "disc", marginLeft: "20px" }}>
        {item}
      </li>
    ));
  };
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
            {getTranslation("tituloPagina")}
          </h4>
          <h5 className="container py-4" style={{ fontSize: "18px" }}>
            {getTranslation("parrafo1")}
          </h5>
          <div className="container">
            <h5 style={{ fontSize: "18px" }}>
              <span className="py-2">{getTranslation("lujan")}</span>
              <ul className="pt-4">
                {transformTextToList(getTranslation("puntos"))}
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
