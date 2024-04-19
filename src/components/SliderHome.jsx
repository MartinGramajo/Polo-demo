import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import banner from "../assets/img/banner1.png";
import banner2 from "../assets/img/banner2.png";
import banner3 from "../assets/img/banner3.png";
import banner4 from "../assets/img/banner4.png";
import bannerCuadrado from "../assets/img/bannerCuadrado1.png";
import bannerCuadrado2 from "../assets/img/bannerCuadrado2.png";
import bannerCuadrado3 from "../assets/img/bannerCuadrado3.png";
import bannerCuadrado4 from "../assets/img/bannerCuadrado4.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logoNuevo from "../assets/img/logo-nuevo.png";

const SliderHome = () => {
  return (
    <div>
      <div className="d-none d-md-block">
        <div className="bg-dark">
          <Carousel fade>
            <Carousel.Item>
              <Image className="opacity-1" src={banner} alt="asdas" fluid />
              <Carousel.Caption className="">
                <div>
                  <img
                    className="tamaño-logo-carousel img-fluid"
                    src={logoNuevo}
                    alt="logo"
                  />
                </div>
                <h2 className="fs-18-a-14 ">
                  <b>
                    REPRESENTATE OFICIAL <br /> CUMMINS
                  </b>
                </h2>
                {/* <div className="d-flex justify-content-center  py-3">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes fs-1 text-white"
                      icon={faInstagram}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes  fs-1 text-white"
                      icon={faFacebook}
                    />
                  </a>
                </div> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="opacity-1" src={banner2} alt="asdas" fluid />
              <Carousel.Caption className="">
                <div>
                  <img
                    className="tamaño-logo-carousel img-fluid"
                    src={logoNuevo}
                    alt="logo"
                  />
                </div>
                <h2 className="fs-18-a-14 ">
                  <b>
                    REPRESENTATE OFICIAL <br /> CUMMINS
                  </b>
                </h2>
                {/* <div className="d-flex justify-content-center  py-3">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes fs-1 text-white"
                      icon={faInstagram}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes  fs-1 text-white"
                      icon={faFacebook}
                    />
                  </a>
                </div> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="opacity-1" src={banner3} alt="asdas" fluid />
              <Carousel.Caption className="">
                <div>
                  <img
                    className="tamaño-logo-carousel img-fluid"
                    src={logoNuevo}
                    alt="logo"
                  />
                </div>
                <h2 className="fs-18-a-14 ">
                  <b>
                    REPRESENTATE OFICIAL <br /> CUMMINS
                  </b>
                </h2>
                {/* <div className="d-flex justify-content-center  py-3">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes fs-1 text-white"
                      icon={faInstagram}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes  fs-1 text-white"
                      icon={faFacebook}
                    />
                  </a>
                </div> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="opacity-1" src={banner4} alt="asdas" fluid />
              <Carousel.Caption className="">
                <div>
                  <img
                    className="tamaño-logo-carousel img-fluid"
                    src={logoNuevo}
                    alt="logo"
                  />
                </div>
                <h2 className="fs-18-a-14 ">
                  <b>
                    REPRESENTATE OFICIAL <br /> CUMMINS
                  </b>
                </h2>
                {/* <div className="d-flex justify-content-center  py-3">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes fs-1 text-white"
                      icon={faInstagram}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes  fs-1 text-white"
                      icon={faFacebook}
                    />
                  </a>
                </div> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="d-md-none d-block">
        <div className="bg-dark">
          <Carousel fade>
            <Carousel.Item>
              <Image
                className="opacity-1"
                src={bannerCuadrado}
                alt="asdas"
                fluid
              />
              <Carousel.Caption className="">
                <div>
                  <img
                    className="tamaño-logo-carousel img-fluid"
                    src={logoNuevo}
                    alt="logo"
                  />
                </div>
                <h2 className="fs-18-a-14 ">
                  <b>
                    REPRESENTATE OFICIAL <br /> CUMMINS
                  </b>
                </h2>
                {/* <div className="d-flex justify-content-center py-2">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes fs-1 text-white"
                      icon={faInstagram}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes  fs-1 text-white"
                      icon={faFacebook}
                    />
                  </a>
                </div> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="opacity-1"
                src={bannerCuadrado2}
                alt="asdas"
                fluid
              />
              <Carousel.Caption className="">
                <div>
                  <img
                    className="tamaño-logo-carousel img-fluid"
                    src={logoNuevo}
                    alt="logo"
                  />
                </div>
                <h2 className="fs-18-a-14 ">
                  <b>
                    REPRESENTATE OFICIAL <br /> CUMMINS
                  </b>
                </h2>
                {/* <div className="d-flex justify-content-center py-2">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes fs-1 text-white"
                      icon={faInstagram}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes  fs-1 text-white"
                      icon={faFacebook}
                    />
                  </a>
                </div> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="opacity-1"
                src={bannerCuadrado3}
                alt="asdas"
                fluid
              />
              <Carousel.Caption className="">
                <div>
                  <img
                    className="tamaño-logo-carousel img-fluid"
                    src={logoNuevo}
                    alt="logo"
                  />
                </div>
                <h2 className="fs-18-a-14 ">
                  <b>
                    REPRESENTATE OFICIAL <br /> CUMMINS
                  </b>
                </h2>
                {/* <div className="d-flex justify-content-center py-2">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes fs-1 text-white"
                      icon={faInstagram}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes  fs-1 text-white"
                      icon={faFacebook}
                    />
                  </a>
                </div> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="opacity-1"
                src={bannerCuadrado4}
                alt="asdas"
                fluid
              />
              <Carousel.Caption className="">
                <div>
                  <img
                    className="tamaño-logo-carousel img-fluid"
                    src={logoNuevo}
                    alt="logo"
                  />
                </div>
                <h2 className="fs-18-a-14 ">
                  <b>
                    REPRESENTATE OFICIAL <br /> CUMMINS
                  </b>
                </h2>
                {/* <div className="d-flex justify-content-center py-2">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes fs-1 text-white"
                      icon={faInstagram}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="iconos-redes  fs-1 text-white"
                      icon={faFacebook}
                    />
                  </a>
                </div> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
