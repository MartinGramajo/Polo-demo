import { Image } from "react-bootstrap";
import bannerServicios from "../assets/img/bannerservicios.jpg";
import bannerServiciosCuadrada from "../assets/img/bannerserviciosCuadrada.jpg";
const BannerServicios = () => {
  return (
    <>
      <div className="bannerContainer d-none d-md-block">
        <Image
          src={bannerServicios}
          className="bannerImage"
          alt="inicio banner"
        />
      </div>
      <div className=" d-md-none d-block">
        <Image
          src={bannerServiciosCuadrada}
          className="bannerImage"
          alt="inicio banner"
        />
      </div>
    </>
  );
};

export default BannerServicios;
