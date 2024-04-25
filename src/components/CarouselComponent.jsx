import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-scroll";
import { Image } from "react-bootstrap";

import cliente from "../assets/img/slider18.png";
import cliente2 from "../assets/img/mapaMundi.png";
import cliente3 from "../assets/img/fracturacuello.jpg";

const CarouselComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleContactClick = () => {
    window.location.href = "#/contacto"; // Redirecciona a la página de contacto
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Slider
        dots={true}
        infinite={true}
        speed={800}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={4200}
        afterChange={handlePageChange}
      >
        <div style={{ height: "300px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div style={{ flex: 1, textAlign: "center" }}>
              <h5
                className="lato-regular text-white"
                style={{ fontSize: "24px" }}
              >
                "Elevamos el desempeño del Polo <br /> a través de un
                seguimiento, cuidado y dedicación exclusivos"
              </h5>
              <article className="d-flex justify-content-center">
                <div>
                  <Link to="servicios" spy={true} smooth={true} duration={500}>
                    <button className="ver-mas-btn text-white">
                      CONOCÉ NUESTROS SERVICIOS
                    </button>
                  </Link>
                </div>
                <div>
                  <button
                    className="ver-mas-btn text-white"
                    onClick={handleContactClick}
                  >
                    CONTACTO
                  </button>
                </div>
              </article>
            </div>
            <div style={{ flex: 1 }}>
              <Image
                className="py-5"
                src={cliente}
                alt="Imagen"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div style={{ height: "300px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div style={{ flex: 1, textAlign: "center" }}>
              <h5
                className="lato-regular text-white"
                style={{ fontSize: "24px" }}
              >
                "No sólo tratamos y cuidamos lo que más te importa, <br /> nos
                convertimos en parte de tu equipo"
              </h5>

              <article className="d-flex justify-content-center">
                <div>
                  <Link to="trabajamos" spy={true} smooth={true} duration={500}>
                    <button className="ver-mas-btn text-white">
                      CONOCÉ CÓMO TRABAJAMOS
                    </button>
                  </Link>
                </div>
                <div>
                  <button
                    className="ver-mas-btn text-white"
                    onClick={handleContactClick}
                  >
                    CONTACTO
                  </button>
                </div>
              </article>
            </div>
            <div style={{ flex: 1 }}>
              <Image
                className="py-4"
                src={cliente2}
                alt="Imagen"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div style={{ height: "300px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div style={{ flex: 1, textAlign: "center" }}>
              <h5
                className="lato-regular text-white"
                style={{ fontSize: "24px" }}
              >
                “Transformar lo invisible en visible”
              </h5>

              <article className="d-flex justify-content-center">
                <div>
                  <Link
                    to="termografia"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <button className="ver-mas-btn text-white">
                      CONOCÉ EL USO DE LA CÁMARA TERMOGRÁFICA
                    </button>
                  </Link>
                </div>
                <div>
                  <button
                    className="ver-mas-btn text-white"
                    onClick={handleContactClick}
                  >
                    CONTACTO
                  </button>
                </div>
              </article>
            </div>
            <div style={{ flex: 1 }}>
              <Image
                className="py-4"
                src={cliente3}
                alt="Imagen"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
