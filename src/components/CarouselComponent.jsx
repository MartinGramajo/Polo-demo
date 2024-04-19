import React from "react";
import Slider from "react-slick";

// Importa estilos slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cliente from "../assets/img/slider15.png";
import cliente2 from "../assets/img/slider3.png";
import cliente3 from "../assets/img/slider16.png";

import { Link } from "react-scroll";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700, // Puedes ajustar la velocidad de transición entre slides
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Habilita el desplazamiento automático
    autoplaySpeed: 2200, // Tiempo en milisegundos que cada slide permanece visible
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Slider {...settings}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            {" "}
            {/* Ajustado para centrar el texto */}
            <h5
              className="lato-regular text-white"
              style={{ fontSize: "24px" }}
            >
              "Elevamos el desempeño del Polo <br /> a través de un seguimiento,
              cuidado y dedicación exclusivos"
            </h5>
            <div className="mt-4">
              <Link
                className=""
                to="servicios"
                spy={true}
                smooth={true}
                duration={500}
              >
                <button
                  className="ver-mas-btn text-white"
                  style={{ fontSize: "12px" }}
                >
                  CONOCÉ NUESTROS SERVICIOS
                </button>
              </Link>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={cliente}
              alt="Imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        {/* Repite el div para más slides según sea necesario */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            <h5
              className="lato-regular text-white"
              style={{ fontSize: "24px" }}
            >
              "No sólo tratamos y cuidamos lo que más te importa;
              <br /> nos convertimos en parte de tu equipo"
            </h5>

            <div className="mt-4">
              <Link to="trabajamos" spy={true} smooth={true} duration={500}>
                <button className="ver-mas-btn text-white">
                  CONOCÉ CÓMO TRABAJAMOS
                </button>
              </Link>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={cliente2}
              alt="Imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            <h5
              className="lato-regular text-white"
              style={{ fontSize: "24px" }}
            >
              “Transformar lo invisible en visible”
            </h5>

            <div className="mt-4">
              <Link
                className=""
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
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={cliente3}
              alt="Imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
