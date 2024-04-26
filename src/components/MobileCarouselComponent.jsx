import React, { useState } from "react";
import Slider from "react-slick";

// Importa estilos slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cliente from "../assets/img/slider18.png";
import cliente2 from "../assets/img/mapaMundi.png";
import cliente3 from "../assets/img/fracturacuello.jpg";
import { Link } from "react-scroll";
const MobileCarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800, // Puedes ajustar la velocidad de transición entre slides
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Habilita el desplazamiento automático
    autoplaySpeed: 4200, // Tiempo en milisegundos que cada slide permanece visible
  };

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleContactClick = () => {
    window.location.href = "#/contacto"; // Redirecciona a la página de contacto
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Slider {...settings}>
        <div className="d-flex flex-column align-items-center justify-content-center py-5">
          <div>
            <img
              src={cliente}
              alt="Imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="text-center mt-4">
            <h5
              className="lato-regular text-white"
              style={{ fontSize: "16px" }}
            >
              "Elevamos el desempeño del Polo a través de un seguimiento,
              cuidado y dedicación exclusivos"
            </h5>
            <article className="py-2">
              <div>
                <Link
                  to="servicios/mobile"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <button className="ver-mas-btn text-white">
                    CONOCÉ NUESTROS SERVICIOS
                  </button>
                </Link>
              </div>
              <div className="py-2">
                <button
                  className="ver-mas-btn text-white"
                  onClick={handleContactClick}
                >
                  CONTACTO
                </button>
              </div>
            </article>
          </div>
        </div>
        {/* Repite el div para más slides según sea necesario */}
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div>
            <img
              className="mt-5"
              src={cliente2}
              alt="Imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="text-center mt-4">
            <h5
              className="lato-regular text-white"
              style={{ fontSize: "16px" }}
            >
              "No sólo tratamos y cuidamos lo que más te importa; nos
              convertimos en parte de tu equipo"
            </h5>

            <article className="">
              <div className="py-2">
                <Link
                  to="trabajamos/mobile"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <button className="ver-mas-btn text-white">
                    CONOCÉ CÓMO TRABAJAMOS
                  </button>
                </Link>
              </div>
              <div className="py-2">
                <button
                  className="ver-mas-btn text-white"
                  onClick={handleContactClick}
                >
                  CONTACTO
                </button>
              </div>
            </article>
          </div>
        </div>
        {/* Repite el patrón para más diapositivas */}
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div>
            <img
              className="mt-5"
              src={cliente3}
              alt="Imagen"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="text-center mt-4">
            <h5
              className="lato-regular text-white"
              style={{ fontSize: "16px" }}
            >
              “Transformar lo invisible en visible”
            </h5>

            <article className="">
              <div className="py-2">
                <Link
                  to="termografia/mobile"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{ fontSize: "14px" }}
                >
                  <button className="ver-mas-btn text-white">
                    CONOCÉ EL USO DE LA CÁMARA TERMOGRÁFICA
                  </button>
                </Link>
              </div>
              <div className="py-2">
                <button
                  className="ver-mas-btn text-white"
                  onClick={handleContactClick}
                >
                  CONTACTO
                </button>
              </div>
            </article>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MobileCarouselComponent;
