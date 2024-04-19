import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import banner from "../assets/img/BannerProductos.jpeg";
import bannerCuadrado from "../assets/img/BannerProductosC.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";

const BannerProductos = () => {
  return (
    <div>
      <div className="d-none d-md-block">
        <div className="bg-dark">
          <Carousel controls={false} fade>
            <Carousel.Item>
              <Image
                className="opacity-1 w-100"
                src={banner}
                alt="asdas"
                fluid
              />
              <Carousel.Caption className="">
                <div className="d-flex justify-content-center my-5">
                  <FontAwesomeIcon
                    className="iconos-redes fs-1"
                    icon={faProductHunt}
                  />
                </div>
                <h1>NUESTROS PRODUCTOS</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="d-md-none d-block">
        <div className="bg-dark">
          <Carousel controls={false} fade>
            <Carousel.Item>
              <Image
                className="opacity-1"
                src={bannerCuadrado}
                alt="asdas"
                fluid
              />
              <Carousel.Caption className="">
                <div className="d-flex justify-content-center my-5">
                  <FontAwesomeIcon
                    className="iconos-redes fs-1"
                    icon={faProductHunt}
                  />
                </div>
                <h1>NUESTROS PRODUCTOS</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BannerProductos;
