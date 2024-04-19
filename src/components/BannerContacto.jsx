import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import banner from "../assets/img/banner1.png";
import bannerCuadrado from "../assets/img/bannerCuadrado1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

const BannerContacto = () => {
  return (
    <div>
      <div className="d-none d-md-block">
        <div className="bg-dark">
          <Carousel controls={false} fade>
            <Carousel.Item>
              <Image className="opacity-1" src={banner} alt="asdas" fluid />
              <Carousel.Caption className="">
                <div className="d-flex justify-content-center my-5">
                  <FontAwesomeIcon
                    className="iconos-redes fs-1"
                    icon={faAddressBook}
                  />
                </div>
                <h1>CONTACTO</h1>
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
                    icon={faAddressBook}
                  />
                </div>
                <h1>CONTACTO</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BannerContacto;
